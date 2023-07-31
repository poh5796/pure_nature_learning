"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { format, isBefore } from "date-fns";
import {
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineSwapLeft,
} from "react-icons/ai";
import { FadeInWrapper, PageWrapper } from "./_utils/index";
import { daysInWeek, events } from "./_constants/constants";
import { Event } from "./_constants/model";

export default function Page() {
  const initialEvents = events.sort(
    (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
  );
  // Initialize sortedEvents in descending order by date
  const [sortedEvents, setSortedEvents] = useState<Event[]>(initialEvents);
  const [sortType, setSortType] = useState<string>("Sort");
  const [searchInput, setSearchInput] = useState<string>("");

  function searchByInput(searchInput: string) {
    let filteredEvents: Event[];
    if (searchInput == "") filteredEvents = initialEvents;
    filteredEvents = events.filter((event) =>
      event.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSortedEvents(filteredEvents);
  }

  //Sort events by useState hook and shallow copy of events array to trigger rerendering
  function sortEvents(sortType: string) {
    const sortArrow = document.getElementById("sortArrow");
    const popoverContent = document.getElementById("popoverContent");
    const ascSortedEvents = [...events].sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    const descSortedEvents = [...events].sort(
      (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
    );

    if (sortType == "asc") {
      setSortedEvents(ascSortedEvents);
      setSortType("Date Asc");
      sortArrow!.style.transform = "rotate(90deg)";
      sortArrow!.style.transition = "all 0.2s ease-in 0.2s";
    } else {
      setSortedEvents(descSortedEvents);
      setSortType("Date Desc");
      sortArrow!.style.transform = "rotate(270deg)";
      sortArrow!.style.transition = "all 0.2s ease-in 0.2s";
    }
    //Dismiss popover after events sorted
    if (popoverContent) {
      popoverContent.style.display = "none";
    }
  }

  function openPopover() {
    const popoverContent = document.getElementById("popoverContent");
    if (popoverContent) {
      if (popoverContent.style.display == "none") {
        popoverContent.style.display = "block";
      } else {
        popoverContent.style.display = "none";
      }
    }
  }

  return (
    <div className="pt-[5vh] pb-[10vh]">
      <PageWrapper>
        <div className="px-[10vw] md:px-[15vw] xl:px-[20vw] flex gap-2 md:gap-4 xl:gap-6 relative">
          <div className="flex justify-center items-center relative w-full focus:border-blue-500 focus:ring-blue-500">
            <input
              type="text"
              placeholder="Search"
              value={searchInput}
              onChange={(event) => {
                setSearchInput(event.target.value);
                searchByInput(event.target.value);
              }}
              className="rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-700 text-sm lg:text-base w-full px-4 py-2"
            />

            <motion.div className="absolute right-0 mx-4">
              <AiOutlineSearch
                className={`${
                  searchInput === "" ? "block" : "hidden"
                } text-neutral-300 w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]`}
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              onClick={() => {
                setSearchInput("");
                searchByInput("");
              }}
              className="absolute right-0 mx-4"
            >
              <AiOutlineClose
                className={`${
                  searchInput === "" ? "hidden" : "block"
                } text-neutral-400 w-[20px] h-[20px] lg:w-[25px] lg:h-[25px] hover:text-neutral-600`}
              />
            </motion.div>
          </div>

          <div className="relative">
            <motion.button
              onClick={() => openPopover()}
              whileHover={{ scale: 1.07 }}
              whileFocus={{ scale: 1.07 }}
              className="flex items-center px-4 py-2 bg-neutral-50 rounded-xl border border-neutral-200 min-w-max"
            >
              <span className="mx-2 hidden sm:block text-sm lg:text-base text-neutral-400">
                {sortType}
              </span>

              <AiOutlineSwapLeft
                id="sortArrow"
                className=" text-neutral-400 w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                style={{ transform: "rotate(90deg)" }}
              />
            </motion.button>

            <motion.div
              id="popoverContent"
              whileInView={{ translateY: 75 }}
              className="hidden p-2 sm:px-4 bg-neutral-50 shadow-md rounded-xl border absolute bottom-0 right-0 min-w-max sm:w-full"
            >
              <div className="flex flex-col gap-2 text-sm lg:text-base text-neutral-600 hover:cursor-pointer">
                <p onClick={() => sortEvents("asc")}>Date Asc</p>
                <p onClick={() => sortEvents("desc")}>Date Desc</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="px-[10vw] md:px-[15vw] xl:px-[20vw]">
          <p className="my-8 lg:my-12 font-black text-2xl lg:text-4xl text-neutral-800">
            Events
          </p>
          <div className="flex flex-col items-center gap-8 lg:gap-12 xl:gap-16">
            {sortedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

function EventCard({ event }: { event: Event }) {
  const currentDate = new Date();
  const eventDate = format(event.start, "d/M/Y");
  const eventStart = format(event.start, "h:mmaaa");
  const eventEnd = format(event.end, "h:mmaaa");
  const eventDay = event.start.getDay();

  return (
    <>
      <FadeInWrapper>
        <Link href={`/${event.id}`} className="w-full">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className=" flex flex-col sm:flex-row w-full h-full bg-neutral-50 rounded-xl shadow-md hover:shadow-lg"
          >
            {/* w-[300px] sm:w-[600px] lg:w-[700px] */}
            {/* sm:h-[300px] lg:h-[350px] */}
            <Image
              src={event.poster}
              alt={"Event poster"}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover rounded-t-xl sm:rounded-xl w-full h-auto sm:w-2/5 lg:w-[1.5/4] aspect-square "
            />

            <div className="px-6 lg:px-8 py-6 sm:py-8 md:py-10 xl:py-12 sm:w-3/5 lg:w-[2.5/4]">
              <div className="flex flex-wrap justify-between text-sm lg:text-base text-neutral-500 font-light">
                <p>
                  {eventDate} ({daysInWeek[eventDay]})
                </p>
                <p>
                  {eventStart} - {eventEnd}
                </p>
              </div>

              <div
                className={`${
                  isBefore(currentDate, event.start) ? "h-[24px]" : "h-[16px]"
                } flex my-2 sm:my-3`}
              >
                <p
                  className={`${
                    isBefore(currentDate, event.start)
                      ? "inline-block"
                      : "hidden"
                  } border border-green-300 text-emerald-700 bg-emerald-100  text-xs lg:text-sm rounded-md px-2 py-1 flex justify-center items-center`}
                >
                  Upcoming
                </p>
              </div>

              <div>
                <p className="mb-2 lg:mb-4 text-2xl lg:text-4xl text-neutral-800 font-bold">
                  {event.title}
                </p>
                <p className="text-sm lg:text-lg text-neutral-500 font-normal">
                  {event.location?.name}
                </p>
              </div>

              <div
                className={`${
                  isBefore(currentDate, event.start) ? "h-[16px]" : "h-[24px]"
                } flex my-2 sm:my-3`}
              ></div>

              <p className="line-clamp-3 sm:line-clamp-4 xl:line-clamp-5  text-sm lg:text-base text-neutral-600 font-normal text-justify">
                {event.description}
              </p>
            </div>
          </motion.div>
        </Link>
      </FadeInWrapper>
    </>
  );
}
