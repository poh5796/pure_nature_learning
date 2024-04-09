"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { format, isBefore } from "date-fns";
import { motion } from "framer-motion";
import {
  AiOutlineEnvironment,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineRight,
  AiOutlinePhone,
  AiOutlineSchedule,
  AiOutlineStar,
} from "react-icons/ai";
import * as ics from "ics";
import {
  contact,
  daysInWeek,
  events,
  operatingSystems,
} from "@/app/_constants/constants";
import { FadeInWrapper } from "../_utils/index";
import { styles } from "../styles";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { convertDriveUrl } from "../_utils/util";

export default function Page({ params }: { params: { eventId: number } }) {
  const event = events.filter((event) => event.id == params.eventId)[0];
  const currentDate = new Date();
  // Event Start
  const eventDay = event.start.getDay(); // 0 to 6, Starts from Sunday
  const eventDate = format(event.start, "d/M/Y");
  const eventStart = format(event.start, "h:mm aaa");
  const eventEnd = format(event.end, "h:mm aaa");
  const eventFullStart = format(event.start, "yyyyMMdd'T'HHmmss");
  const eventFullEnd = format(event.end, "yyyyMMdd'T'HHmmss");
  const startYear = event.start.getFullYear();
  const startMonth = event.start.getMonth() + 1;
  const startDay = event.start.getDate();
  const startHour = event.start.getHours();
  const startMinute = event.start.getMinutes();
  //Event End
  const endYear = event.end.getFullYear();
  const endMonth = event.end.getMonth() + 1;
  const endDay = event.end.getDate();
  const endHour = event.end.getHours();
  const endMinute = event.end.getMinutes();
  //BOOLEAN isBeforeCurrentDate
  const isBeforeCurrentDate = isBefore(currentDate, event.start);
  //Check current OS, set Calender Event
  let currentOperatingSystem = "";
  if (global.navigator?.userAgent?.indexOf("like Mac") != -1)
    currentOperatingSystem = operatingSystems.IOS;

  let icsEvent = "";
  ics.createEvent(
    {
      title: `${event.enTitle}${event.chsTitle}`,
      start: [startYear, startMonth, startDay, startHour, startMinute],
      startInputType: "local",
      startOutputType: "local",
      end: [endYear, endMonth, endDay, endHour, endMinute],
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
    if (currentOperatingSystem == operatingSystems.IOS) {
      window.open(icsDataUri, "_blank");
    } else {
      window.open(
        `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${eventFullStart}/${eventFullEnd}&text=${event.enTitle}&location=${event.location.name}&ctz=Asia/Kuala_Lumpur`,
        "_blank"
      );
    }
  }

  function openGoogleMaps() {
    window.open(
      `http://www.google.com/maps/search/?api=1&query=${event.location?.lat},${event.location?.long}&query_place_id=${event.location.placeId}`,
      "_blank"
    );
  }

  function parsePhoneNumber(input: string): string {
    // Use a regular expression to remove all non-numeric characters
    const numericOnly = input.replace(/\D/g, "");
    return numericOnly;
  }

  return (
    <>
      <div className="flex flex-col md:px-[15vw] xl:px-[20vw]">
        <div
          className="w-full h-[4
          vh] lg:h-[50vh] rounded-xl flex justify-center items-center "
        >
          <FadeInWrapper>
            <Image
              src={event.theme}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full rounded-xl object-cover aspect-video"
              alt={"Event theme photo"}
            />
          </FadeInWrapper>
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

      <div className="px-[10vw] md:px-[15vw] xl:px-[20vw] py-[5vh] flex flex-col">
        <p className="mt-8 mb-16 text-3xl md:text-4xl lg:text-5xl text-neutral-800 font-black text-shadow">
          {event.enTitle}&nbsp;
          {event.chsTitle}
        </p>

        <div className="flex flex-col gap-12">
          <div className="flex gap-4">
            <div className="w-full lg:min-w-[35vw]">
              <p className={`${styles.eventPageTitle}`}>When</p>
              {/* Calendar, setReminder*/}
              <motion.div
                onClick={() => setReminder()}
                whileHover={{ scale: 1.02 }}
                className="w-full bg-white rounded-xl flex shadow hover:shadow-lg hover:cursor-pointer"
              >
                <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                  <AiOutlineCalendar className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
                </div>

                <div className="py-8 flex flex-col w-3/5 sm:w-4/6 text-sm lg:text-base text-neutral-600">
                  <p>
                    {daysInWeek[eventDay]},&nbsp;{eventDate}
                  </p>
                  <p>
                    {eventStart} - {eventEnd}
                  </p>
                </div>

                <motion.div className="flex justify-center items-center w-1/5 sm:w-1/6">
                  <AiOutlineRight className="h-[15px] w-[15px] text-neutral-400" />
                </motion.div>
              </motion.div>
            </div>

            <div className="hidden lg:block lg:w-full">
              <p className={`${styles.eventPageTitle}`}>Fee</p>

              <div className="w-full lg:max-w-[35vw] bg-white rounded-xl flex shadow">
                {/* <div className="flex justify-center items-center w-1/5">
                  <AiOutlineStar className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-yellow-500" />
                </div> */}

                <div className="flex justify-around items-center w-full">
                  <div className="py-10 text-neutral-600">
                    {event.fee == 0 ? (
                      <p className="font-semibold">Free admission</p>
                    ) : (
                      <p>
                        <span className="text-sm sm:text-base">
                          Starting from RM{" "}
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-neutral-700">
                          {event.fee.toFixed(2)}
                        </span>
                      </p>
                    )}
                  </div>

                  <div
                    className={`${
                      isBeforeCurrentDate ? "block" : "hidden"
                    } flex justify-center items-center`}
                  >
                    <Link
                      href={`${event.url}`}
                      className={`${
                        isBeforeCurrentDate ? "block" : "hidden"
                      } rounded-xl p-4 bg-emerald-800`}
                    >
                      <span className="text-neutral-100 font-semibold">
                        Book now!
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className={`${styles.eventPageTitle}`}>Where</p>
            {/* Location, redirect to Google Map/Waze*/}
            <motion.div
              onClick={() => openGoogleMaps()}
              whileHover={{ scale: 1.01 }}
              className="w-full lg:max-w-[35vw] bg-white rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
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
          </div>

          <div className={`${event.agendas.length > 0 ? "block" : "hidden"}`}>
            <p className={`${styles.eventPageTitle}`}>Agenda</p>
            {/* <div className="w-full lg:max-w-[35vw] bg-neutral-50 rounded-xl flex"> */}
            {/* <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineSchedule className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
              </div> */}

            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => {}}
              onSwiper={() => {}}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
            >
              {event.agendas.map((agenda, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="bg-white rounded-xl flex justify-center items-center -z-50">
                      <Image
                        src={agenda}
                        alt={"Agenda's photo"}
                        width={500}
                        height={300}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div>
            <p className={`${styles.eventPageTitle}`}>Who</p>
            <div className="w-full lg:max-w-[35vw] bg-white rounded-xl flex">
              <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineTeam className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
              </div>

              <p className="py-8 text-sm lg:text-base text-neutral-600 w-4/5 sm:w-5/6">
                {event.age}
              </p>
            </div>
          </div>

          <div>
            <p className={`${styles.eventPageTitle}`}>Question?</p>

            <motion.div
              onClick={() =>
                window.open(
                  `https://wa.me/${parsePhoneNumber(contact.eefang)}`,
                  "_blank"
                )
              }
              whileHover={{ scale: 1.01 }}
              className="w-full lg:max-w-[35vw] bg-white rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
            >
              <div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlinePhone className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-neutral-400" />
              </div>

              <p className="py-8 text-sm lg:text-base text-neutral-600  w-3/5 sm:w-4/6">
                {contact.eefang}
              </p>

              <motion.div className="flex justify-center items-center w-1/5 sm:w-1/6">
                <AiOutlineRight className="h-[15px] w-[15px] text-neutral-400" />
              </motion.div>
            </motion.div>
          </div>

          <div className={`${event.description ? "block" : "hidden"}`}>
            <p className={`${styles.eventPageTitle}`}>What it&apos;s about</p>
            <div className="w-full lg:max-w-[35vw] bg-white rounded-xl flex">
              <p className="px-6 py-8 text-sm lg:text-base text-neutral-600 text-justify leading-relaxed">
                {event.description}
              </p>
            </div>
          </div>

          <div className={`${event.images.length > 0 ? "block" : "hidden"}`}>
            <p className={`${styles.eventPageTitle}`}>Gallery</p>
            {/* MASONRY LAYOUT */}
            <div className="columns-2 lg:columns-3 gap-8">
              {event.images.map((image, index) => {
                return (
                  <FadeInWrapper key={index}>
                    <Image
                      width={300}
                      height={300}
                      src={image}
                      alt={"Event photos"}
                      className={`${
                        index % 3 == 0 ? "aspect-square" : "aspect-video"
                      } w-full rounded-xl mb-6 object-cover`}
                    />
                  </FadeInWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="px-[10vw] fixed bottom-0 w-full flex justify-between items-center drop-shadow-2xl lg:hidden bg-white z-50">
        <div className="flex justify-center items-center">
          {/* <AiOutlineStar className="h-[25px] w-[25px] text-yellow-500" /> */}
        </div>

        <div className="py-8 text-neutral-600">
          {event.fee == 0 ? (
            <p className="font-semibold">Free admission</p>
          ) : (
            <p>
              <span className="text-xs sm:text-sm">Starting from RM </span>
              <span className="text-sm sm:text-base font-bold text-neutral-700">
                {event.fee.toFixed(2)}
              </span>
            </p>
          )}
        </div>

        <div className="flex justify-center items-center">
          <Link
            href={`${event.url}`}
            className={`${
              isBeforeCurrentDate ? "block" : "hidden"
            } rounded-xl p-4 bg-emerald-800`}
          >
            <span className="text-neutral-100 font-semibold">Book now!</span>
          </Link>
        </div>
      </div>
    </>
  );
}
