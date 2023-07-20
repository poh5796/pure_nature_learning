"use client";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../page-wrapper";
import { events } from "../_constants/constants";
import { Event } from "../_constants/model";
import { motion } from "framer-motion";
import { format, isBefore, parse } from "date-fns";

export default function Page() {
  return (
    <>
      <PageWrapper>
        <div className="px-[10vw] py-[5vh] md:px-[15vw] ">
          <p className="font-black">Searchbar & Filter</p>
        </div>

        <div className="flex flex-col-reverse items-center gap-12  px-[10vw] md:px-[15vw] py-[5vh]">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </PageWrapper>
    </>
  );
}

function EventCard({ event }: { event: Event }) {
  const currentDate = new Date();
  const eventDate = format(event.start, "d/M/Y");
  const eventDay = format(event.start.getDay(), "EEEE");
  const eventStart = format(event.start, "h:mmaaa");
  const eventEnd = format(event.end, "h:mmaaa");
  return (
    <>
      <Link href={`/event/${event.id}`} className="w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className=" flex flex-col sm:flex-row w-full h-full  bg-neutral-50 rounded-2xl shadow-md hover:shadow-lg"
        >
          {/* w-[300px] sm:w-[600px] lg:w-[700px] */}
          {/* sm:h-[300px] lg:h-[350px] */}
          <Image
            src={event.poster}
            alt={"Event poster"}
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover rounded-t-2xl sm:w-2/5 sm:rounded-2xl"
          />
          <div className="px-6 lg:px-8 py-4 sm:py-6 lg:py-8 sm:w-3/5">
            <div className="flex flex-wrap justify-between text-sm lg:text-base text-neutral-500 font-light">
              <p>
                {eventDate} ({eventDay})
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
                  isBefore(currentDate, event.start) ? "inline-block" : "hidden"
                } text-emerald-700 bg-emerald-100  text-xs lg:text-sm rounded-md px-2 py-1 flex justify-center items-center`}
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

            <p className="line-clamp-3 sm:line-clamp-4 lg:line-clamp-5 text-sm lg:text-base text-neutral-600 font-normal text-justify">
              {event.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}
