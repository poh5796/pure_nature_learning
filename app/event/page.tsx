"use client";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../page-wrapper";
import { events } from "../_constants/constants";
import { Event } from "../_constants/model";
import { motion } from "framer-motion";
import { isBefore, parse } from "date-fns";

export default function Page() {
  return (
    <>
      <PageWrapper>
        <div className="px-[10vw] md:px-[15vw] py-[5vh]">
          <p className="font-black">Searchbar & Filter</p>
        </div>

        <div className="flex flex-col-reverse gap-12 items-center px-[10vw] md:px-[15vw] py-[5vh]">
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
  const eventDate = parse(event.date, "d/M/y", new Date());

  return (
    <>
      <Link href={`/event/${event.id}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className=" flex flex-col w-[300px] sm:flex-row sm:w-[600px] sm:h-[300px] lg:w-[700px] lg:h-[350px] bg-neutral-50 rounded-2xl shadow-md hover:shadow-lg"
        >
          <Image
            src={event.poster}
            alt={"Event thumbnail"}
            width={300}
            height={150}
            className="object-cover rounded-t-2xl sm:w-2/5 sm:rounded-2xl"
          />
          <div className="px-6 py-4 sm:w-3/5 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
            <div className="flex flex-wrap justify-between">
              <p className="text-sm text-neutral-500 font-light">
                {event.date}
              </p>
              <p className="text-sm text-neutral-500 font-light">
                {event.time}
              </p>
            </div>

            <div className="flex justify-end h-[32px]">
              <p
                className={`${
                  isBefore(currentDate, eventDate) ? "inline-block" : "hidden"
                } text-emerald-600  bg-green-100  text-xs rounded-lg px-2 py-1 mt-2`}
              >
                Upcoming
              </p>
            </div>

            <div className="mt-2 mb-4 sm:mb-8">
              <p className="mb-2 text-2xl text-neutral-800 font-bold">
                {event.title}
              </p>
              <p className="text-sm text-neutral-500 font-normal">
                {event.location?.name}
              </p>
            </div>

            <p className="line-clamp-3 lg:line-clamp-5 text-sm text-neutral-600 font-normal text-justify">
              {event.description}
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}
