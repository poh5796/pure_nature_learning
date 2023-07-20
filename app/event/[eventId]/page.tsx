"use client";

import { events } from "@/app/_constants/constants";
import FadeInWhenVisible from "@/app/fadein-wrapper";
import { format, intervalToDuration, isBefore } from "date-fns";
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
import { usePathname } from "next/navigation";

export default function Page({ params }: { params: { eventId: number } }) {
  const event = events.filter((event) => event.id == params.eventId)[0];
  const currentDate = new Date();
  const eventDate = format(event.start, "d/M/Y");
  const eventStart = format(event.start, "h:mm aaa");
  const eventEnd = format(event.end, "h:mm aaa");
  const eventFullStart = format(event.start, "yyyyMMdd'T'HHmmss");
  const eventFullEnd = format(event.end, "yyyyMMdd'T'HHmmss");
  console.log(eventFullStart);
  console.log(eventFullEnd);
  const year = event.start.getFullYear();
  const month = event.start.getMonth() + 1;
  const day = event.start.getDate();
  const startHour = event.start.getHours();
  const startMinute = event.start.getMinutes();
  const endHour = event.end.getHours();
  const endMinute = event.end.getMinutes();
  const duration = intervalToDuration({
    start: 0,
    end: event.end.getTime() - event.start.getTime(),
  });
  let icsEvent = "";

  ics.createEvent(
    {
      title: `${event.title}`,
      start: [year, month, day, startHour, startMinute],
      startInputType: "local",
      startOutputType: "local",
      end: [year, month, day, endHour, endMinute],
      endInputType: "local",
      endOutputType: "local",
      location: `${event.location.name}`,
      organizer: { name: "朴乐 Pure Nature Learning" },
      url: `https://purelearning.netlify.app${usePathname()}`,
      // alarms: [
      //   {
      //     action: "audio",
      //     trigger: {
      //       hours: duration.hours,
      //       minutes: duration.minutes,
      //       before: true,
      //     },
      //     repeat: 1,
      //   },
      // ],
    },
    (error: any, value: any) => {
      if (error) {
        console.error(error);
      }
      icsEvent = value;
    }
  );

  function setReminder() {
    const icsContent = icsEvent;
    const icsDataUri = `data:text/calendar;charset=utf8,${encodeURIComponent(
      icsContent
    )}`;

    window.open(icsDataUri);
  }

  return (
    <>
      <div className="flex flex-col md:px-[15vw]">
        <div className="w-full h-[40vh] lg:h-[50vh] rounded-xl flex justify-center items-center ">
          {/* Add/Remove "relative" for background effect */}
          <FadeInWhenVisible>
            <Image
              src={event.theme}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-xl object-cover aspect-video"
              alt={"Event theme photo"}
            />
          </FadeInWhenVisible>
          <Image
            src={event.theme}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-full object-cover aspect-video absolute -z-10 blur"
            alt={"Event theme photo"}
          />
        </div>
      </div>

      <div className="px-[10vw] md:px-[15vw] py-[5vh] flex flex-col">
        <p className="mt-8 mb-16 text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-black text-shadow">
          {event.title}
        </p>

        <div className="flex flex-col gap-12">
          <div>
            <p className="my-4 text-xl lg:text-2xl text-neutral-800 font-bold text-shadow">
              When
            </p>
            <a
              target="_blank"
              className="button"
              href={`https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${eventFullStart}/${eventFullEnd}&text=${event.title}&location=${event.location.name}&ctz=Asia/Kuala_Lumpur`}
            >
              Add to Google Calendar
            </a>
            <motion.div
              onClick={() => setReminder()}
              whileHover={{ scale: 1.02 }}
              className="w-full md:max-w-[50vw] lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
            >
              <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineCalendar className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
              </div>

              <div className="py-8 flex flex-col w-3/5 sm:w-4/6">
                <p className="text-sm lg:text-base text-neutral-600">
                  {event.day},&nbsp;{eventDate}
                </p>
                <p className="text-sm lg:text-base text-neutral-600">
                  {eventStart} - {eventEnd}
                </p>
              </div>

              <motion.div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineRight className="h-[15px] w-[15px] text-neutral-400" />
              </motion.div>
            </motion.div>
          </div>

          <div>
            <p className="my-4 text-xl lg:text-2xl text-neutral-800 font-bold text-shadow">
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
            <p className="my-4 text-xl lg:text-2xl text-neutral-800 font-bold text-shadow">
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
            <p className="my-4 text-xl lg:text-2xl text-neutral-800 font-bold text-shadow">
              What it&apos;s about
            </p>
            <div className="w-full md:max-w-[50vw] lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow">
              <p className="px-6 py-8 text-sm lg:text-base text-neutral-600 text-justify">
                {event.description}
              </p>
            </div>
          </div>

          <div className={`${event.images.length > 0 ? "block" : "hidden"}`}>
            <p className="my-4 text-xl lg:text-2xl text-neutral-800 font-bold text-shadow">
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
              isBefore(currentDate, event.start) ? "block" : "hidden"
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
