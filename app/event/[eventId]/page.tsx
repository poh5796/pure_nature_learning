"use client";

import { events } from "@/app/_constants/constants";
import FadeInWhenVisible from "@/app/fadein-wrapper";
import { isBefore, parse } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineEnvironment,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineRight,
} from "react-icons/ai";

import * as ics from "ics";
import { mkdir, writeFileSync } from "fs";

export default function Page({ params }: { params: { eventId: number } }) {
  const event = events.filter((event) => event.id == params.eventId)[0];
  const currentDate = new Date();
  const eventDate = parse(event.date, "d/M/y", new Date());

  ics.createEvent(
    {
      title: "Dinner",
      description: "Nightly thing I do",
      busyStatus: "FREE",
      start: [2018, 1, 15, 6, 30],
      duration: { minutes: 50 },
    },
    (error: any, value: any) => {
      if (error) {
        console.log(error);
      }
      // mkdir
      // writeFileSync(`./event.ics`, value);
    }
  );

  return (
    <>
      <div className="mt-4 lg:px-[15vw] flex flex-col">
        <div className="w-full h-full sm:h-[40vh] lg:h-[50vh] rounded-xl border flex justify-center items-center">
          <FadeInWhenVisible>
            <Image
              src={event.theme}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full sm:h-[40vh] lg:h-[50vh] rounded-xl object-cover aspect-video"
              alt={"Event theme photo"}
            />
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="px-[10vw] md:px-[15vw] py-[5vh] flex flex-col">
        <p className="mt-8 mb-16 text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-black">
          {event.title}
        </p>

        <div className="flex flex-col gap-12">
          <div>
            <p className="my-4 text-xl lg:text-2xl text-neutral-700 font-bold">
              When
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full md:max-w-[50vw] lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
            >
              <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineCalendar className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
              </div>

              <div className="py-8 flex flex-col w-3/5 sm:w-4/6">
                <p className="text-sm lg:text-base text-neutral-600">
                  {event.day},&nbsp;{event.date}
                </p>
                <p className="text-sm lg:text-base text-neutral-600">
                  {event.time}
                </p>
              </div>

              <motion.div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineRight className="h-[15px] w-[15px] text-neutral-400" />
              </motion.div>
            </motion.div>
          </div>

          <div>
            <p className="my-4 text-xl lg:text-2xl text-neutral-700 font-bold">
              Where
            </p>
            <Link
              href={`http://www.google.com/maps/place/${event.location?.lat},${event.location?.long}`}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="w-full md:max-w-[50vw] lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
              >
                <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                  <AiOutlineEnvironment className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
                </div>

                <p className="py-8 text-sm lg:text-base text-neutral-600  w-3/5 sm:w-4/6">
                  {event.location?.name}
                </p>

                <motion.div className="flex justify-center items-center w-1/5 sm:w-1/6">
                  <AiOutlineRight className="h-[15px] w-[15px] text-neutral-400" />
                </motion.div>
              </motion.div>
            </Link>
          </div>

          <div>
            <p className="my-4 text-xl lg:text-2xl text-neutral-700 font-bold">
              Who
            </p>
            <div className="w-full md:max-w-[50vw] lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow">
              <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineTeam className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
              </div>

              <p className="py-8 text-sm lg:text-base text-neutral-600 w-4/5 sm:w-5/6">
                {event.age}
              </p>
            </div>
          </div>

          <div>
            <p className="my-4 text-xl lg:text-2xl text-neutral-700 font-bold">
              What it&apos;s about
            </p>
            <div className="w-full md:max-w-[50vw] lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow">
              <p className="px-6 py-8 text-sm lg:text-base text-neutral-600 text-justify">
                {event.description}
              </p>
            </div>
          </div>

          <div className={`${event.images.length > 0 ? "block" : "hidden"}`}>
            <p className="my-4 text-xl lg:text-2xl text-neutral-700 font-bold">
              Gallery
            </p>
            {/* MASONRY LAYOUT */}
            <div className="columns-2 lg:columns-3 gap-8">
              {event.images.map((image, index) => {
                return (
                  <FadeInWhenVisible key={image}>
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      key={image}
                      src={image}
                      alt={""}
                      className={`${
                        index % 3 == 0 ? "aspect-square" : "aspect-video"
                      } w-full rounded-xl mb-6 object-cover`}
                    />
                  </FadeInWhenVisible>
                );
              })}
            </div>
          </div>

          <p className="text-sm lg:text-base text-neutral-600">{event.fee}</p>

          <Link
            className={`${
              isBefore(currentDate, eventDate) ? "block" : "hidden"
            } border border-neutral-600 rounded-xl p-4 w-fit`}
            href={event.booking}
          >
            <span className="text-600">Book now!</span>
          </Link>
        </div>
      </div>
    </>
  );
}
