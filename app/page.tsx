"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineSearch,
  AiOutlineSwapLeft,
} from "react-icons/ai";
import { PageWrapper } from "./_utils/index";
import { events } from "./_constants/constants";
import { Event } from "./_constants/interface";
import EventCard from "./_components/eventCard";

export default function Page() {
  // Initialize sortedEvents in descending order by date
  const [sortedEvents, setSortedEvents] = useState<Event[]>(
    events.sort(
      (a, b) => new Date(b.start).getTime() - new Date(a.start).getTime()
    )
  );

  // Filter events by query from search bar
  const [query, setQuery] = useState<string>("");
  const filteredEvents = useMemo(() => {
    return sortedEvents.filter((event) => {
      return event.enTitle.toLowerCase().includes(query.toLowerCase());
    });
  }, [sortedEvents, query]);

  const [sortType, setSortType] = useState<string>("Sort");
  // Sort events by useState hook and shallow copy of events array to trigger rerendering
  function sortEvents(sortType: string) {
    const sortArrow = document.getElementById("sortArrow");
    const popoverContent = document.getElementById("popoverContent");
    const ascSortedEvents = [...sortedEvents].sort(
      (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
    );
    const descSortedEvents = [...sortedEvents].sort(
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
    popoverContent!.style.display = "none";
  }

  function openPopover() {
    const popoverContent = document.getElementById("popoverContent");
    if (popoverContent!.style.display === "none") {
      popoverContent!.style.display = "block";
    } else {
      popoverContent!.style.display = "none";
    }
  }

  return (
    <div className="pt-[5vh] pb-[10vh]">
      <PageWrapper>
        <div className="px-[10vw] md:px-[15vw] xl:px-[20vw] flex gap-2 md:gap-4 xl:gap-6 relative">
          <div className="flex justify-center items-center relative w-full">
            <input
              className="rounded-xl border border-transparent bg-white text-neutral-700 text-sm lg:text-base w-full px-4 py-2 placeholder:text-neutral-500 focus:border-emerald-700 focus:ring-emerald-700"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
            />

            <div className="absolute right-0 mx-4">
              <AiOutlineSearch
                className={`${
                  query === "" ? "block" : "hidden"
                } text-neutral-400 w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]`}
              />
            </div>
          </div>

          <div className="relative">
            <motion.button
              onClick={() => openPopover()}
              whileHover={{ scale: 1.07 }}
              whileFocus={{ scale: 1.07 }}
              className="flex items-center px-4 py-2 bg-white rounded-xl border border-transparent min-w-max"
            >
              <span className="mx-2 hidden sm:block text-sm lg:text-base text-neutral-500">
                {sortType}
              </span>
              <AiOutlineSwapLeft
                id="sortArrow"
                className="text-neutral-400 w-[20px] h-[20px] lg:w-[25px] lg:h-[25px]"
                style={{ transform: "rotate(90deg)" }}
              />
            </motion.button>

            <motion.div
              id="popoverContent"
              whileInView={{ translateY: 75 }}
              className="p-2 sm:px-4 bg-white shadow-sm rounded-xl border border-transparent absolute bottom-0 right-0 min-w-max sm:w-full hidden"
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
            {filteredEvents.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

