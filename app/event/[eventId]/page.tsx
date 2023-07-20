"use client";

import { events } from "@/app/_constants/constants";
import FadeInWhenVisible from "@/app/fadein-wrapper";
import { format, isBefore } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineEnvironment,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineRight,
  AiOutlineStar,
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
  const year = event.start.getFullYear();
  const month = event.start.getMonth() + 1;
  const day = event.start.getDate();
  const startHour = event.start.getHours();
  const startMinute = event.start.getMinutes();
  const endHour = event.end.getHours();
  const endMinute = event.end.getMinutes();

  let os = "";
  if (navigator.userAgent.indexOf("Win") != -1) os = "Windows";
  if (navigator.userAgent.indexOf("Mac") != -1) os = "Macintosh";
  if (navigator.userAgent.indexOf("Linux") != -1) os = "Linux";
  if (navigator.userAgent.indexOf("Android") != -1) os = "Android";
  if (navigator.userAgent.indexOf("like Mac") != -1) os = "iOS";

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
      organizer: { name: "Pure Nature Learning" },
      url: `https://purelearning.netlify.app${usePathname()}`,
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
    if (os == "iOS") {
      window.open(icsDataUri);
      return;
    } else {
      window.location.href = `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${eventFullStart}/${eventFullEnd}&text=${event.title}&location=${event.location.name}&ctz=Asia/Kuala_Lumpur`;
    }
  }

  return (
    <>
      <div className="flex flex-col md:px-[15vw]">
        <div className="w-full h-[45vh] lg:h-[50vh] rounded-xl flex justify-center items-center ">
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
          <div className="flex gap-8">
            <div className="w-full lg:w-[60%]">
              <p className="my-4 text-xl lg:text-2xl text-neutral-800 font-bold text-shadow">
                When
              </p>
              <motion.div
                onClick={() => setReminder()}
                whileHover={{ scale: 1.02 }}
                className="w-full lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
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

            <div className="hidden lg:block lg:w-[40%]">
              <p className="my-4 text-xl lg:text-2xl text-neutral-800 font-bold text-shadow">
                Fee
              </p>
              <motion.div className="w-full lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow">
                <div className="flex justify-center items-center w-1/5">
                  <AiOutlineStar className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-yellow-500" />
                </div>

                <p className="py-12 text-sm lg:text-base text-neutral-800  font-bold w-2/5">
                  RM {event.fee == 0 ? "Free admission" : event.fee.toFixed(2)}
                </p>

                <motion.div className="flex justify-center items-center w-2/5">
                  <Link
                    className={`${
                      isBefore(currentDate, event.start) ? "block" : "hidden"
                    } rounded-xl p-4 bg-sky-600`}
                    href={event.booking}
                  >
                    <span className="text-neutral-50 font-semibold">
                      Book now!
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
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
                className="w-full  lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
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
            <div className="w-full   lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow">
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
            <div className="w-full   lg:max-w-[40vw] bg-neutral-50 rounded-xl flex shadow">
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
        </div>
      </div>

      <motion.div className="fixed bottom-0 left-0 right-0 w-full flex justify-around drop-shadow-2xl lg:hidden bg-neutral-50 rounded-xl ">
        <div className="flex justify-center items-center ">
          <AiOutlineStar className="h-[25px] w-[25px] text-yellow-500" />
        </div>

        <p className="py-10 text-lg text-neutral-800  font-bold ">
          RM {event.fee == 0 ? "Free admission" : event.fee.toFixed(2)}
        </p>

        <motion.div className="flex justify-center items-center ">
          <Link
            className={`${
              isBefore(currentDate, event.start) ? "block" : "hidden"
            } rounded-xl px-6 py-4 bg-sky-600`}
            href={event.booking}
          >
            <span className="text-xl text-neutral-50 font-semibold">
              Book now!
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </>
  );
}
