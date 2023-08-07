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
  AiOutlineStar,
  AiOutlinePhone,
  AiOutlineClose,
} from "react-icons/ai";
import * as ics from "ics";
import {
  contact,
  daysInWeek,
  events,
  operatingSystems,
} from "@/app/_constants/constants";
import { FadeInWrapper } from "../_utils/index";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { Form } from "../_constants/model";
import Link from "next/link";

export default function Page({ params }: { params: { eventId: number } }) {
  const [toggleModal, setToggleModal] = useState(false);
  useEffect(() => {
    const modal: HTMLDialogElement = document.querySelector("#modal")!;
    if (toggleModal) modal?.showModal();
    else modal?.close();
  }, [toggleModal]);

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

  let currentOperatingSystem = "";
  if (navigator.userAgent.indexOf("like Mac") != -1)
    currentOperatingSystem = operatingSystems.IOS;

  let icsEvent = "";
  ics.createEvent(
    {
      title: `${event.title}`,
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
        `https://calendar.google.com/calendar/render?action=TEMPLATE&dates=${eventFullStart}/${eventFullEnd}&text=${event.title}&location=${event.location.name}&ctz=Asia/Kuala_Lumpur`,
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

  async function updateSheet() {}

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
          {event.title}
        </p>

        <div className="flex flex-col gap-12">
          <div className="flex gap-4">
            <div className="w-full lg:min-w-[35vw]">
              <p className={`${styles.eventPageTitle}`}>When</p>
              {/* Calendar, setReminder*/}
              <motion.div
                onClick={() => setReminder()}
                whileHover={{ scale: 1.02 }}
                className="w-full bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
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

              <div className="w-full lg:max-w-[35vw] bg-neutral-50 rounded-xl flex shadow">
                <div className="flex justify-center items-center w-1/5">
                  <AiOutlineStar className="h-[20px] w-[20px] md:h-[25px] md:w-[25px] text-yellow-500" />
                </div>

                <div className="flex justify-around items-center w-4/5">
                  <div className="py-10 text-neutral-600">
                    {event.fee.children == 0 ? (
                      <p className="font-semibold">Free admission</p>
                    ) : (
                      <p>
                        <span className="text-xs sm:text-sm">RM </span>
                        <span className="text-sm sm:text-base font-semibold text-neutral-700">
                          {event.fee.children.toFixed(2)}
                        </span>
                      </p>
                    )}
                  </div>

                  <div
                    className={`${
                      isBefore(currentDate, event.start) ? "block" : "hidden"
                    } flex justify-center items-center`}
                  >
                    {/* <button
                      onClick={() => setToggleModal(true)}
                      className="rounded-xl p-4 bg-sky-600"
                    >
                      <span className=" text-neutral-100 font-semibold">
                        Book now!
                      </span>
                    </button> */}
                    <Link
                      href={`/booking/${event.id}`}
                      className={`${
                        isBefore(currentDate, event.start) ? "block" : "hidden"
                      } rounded-xl p-4 bg-sky-600`}
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
              className="w-full lg:max-w-[35vw] bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
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

          <div>
            <p className={`${styles.eventPageTitle}`}>Who</p>
            <div className="w-full lg:max-w-[35vw] bg-neutral-50 rounded-xl flex shadow">
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
              className="w-full lg:max-w-[35vw] bg-neutral-50 rounded-xl flex shadow hover:shadow-md hover:cursor-pointer"
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

          <div>
            <p className={`${styles.eventPageTitle}`}>What it&apos;s about</p>
            <div className="w-full lg:max-w-[35vw] bg-neutral-50 rounded-xl flex shadow">
              <p className="px-6 py-8 text-sm lg:text-base text-neutral-600 text-justify">
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
                      width={0}
                      height={0}
                      sizes="100vw"
                      src={image}
                      alt={""}
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

      <div className="px-[10vw] fixed bottom-0 w-full flex justify-between items-center drop-shadow-2xl lg:hidden bg-neutral-50">
        <div className="flex justify-center items-center">
          <AiOutlineStar className="h-[25px] w-[25px] text-yellow-500" />
        </div>

        <div className="py-10 text-neutral-600">
          {event.fee.children == 0 ? (
            <p className="font-semibold">Free admission</p>
          ) : (
            <p>
              <span className="text-xs sm:text-sm">Starting from RM </span>
              <span className="text-sm sm:text-base font-semibold text-neutral-700">
                {event.fee.children.toFixed(2)}
              </span>
            </p>
          )}
        </div>

        <div className="flex justify-center items-center">
          {/* <button
            onClick={() => setToggleModal(true)}
            className={`${
              isBefore(currentDate, event.start) ? "block" : "hidden"
            } rounded-xl p-4 bg-sky-600`}
          >
            <span className="text-neutral-100 font-semibold">Book now!</span>
          </button> */}
          <Link
            href={`/booking/${event.id}`}
            className={`${
              isBefore(currentDate, event.start) ? "block" : "hidden"
            } rounded-xl p-4 bg-sky-600`}
          >
            <span className="text-neutral-100 font-semibold">Book now!</span>
          </Link>
        </div>
      </div>

      <dialog
        id="modal"
        className="rounded-xl p-0 w-[80%] md:w-[70%] xl:w-[60%] text-neutral-700"
      >
        <div className="w-full h-[50px] px-6 py-4 flex justify-between items-center shadow-sm">
          <p className="font-semibold text-lg">Form</p>
          <button onClick={() => setToggleModal(false)}>
            <AiOutlineClose className="w-[18px] h-[18px]  text-neutral-400" />
          </button>
        </div>

        <form method="post" className="flex flex-col px-6">
          <div className="flex flex-col gap-2 my-4">
            <p className="font-medium">Children&apos;s Information</p>
            <input
              placeholder="Name"
              className={`${styles.formInput}`}
              type="text"
              name="name"
            />

            <div className="flex gap-2">
              <input
                placeholder="MyKid/MyKad"
                className={`${styles.formInput} w-3/4`}
                type="text"
                name="idNumber"
              />
              <input
                placeholder="Age"
                className={`${styles.formInput} w-1/4`}
                type="text"
                name="age"
              />
            </div>

            <div className="flex gap-2">
              <input
                type="date"
                name="dob"
                className={`${styles.formInput} w-1/2`}
              />

              <select id="gender" className={`${styles.formInput} w-1/2`}>
                <option selected>Gender</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 my-4">
            <p className="font-medium">Guardian&apos;s Information</p>
            {/* <select
              id="pet-select"
              className={`${styles.formInput} appearance-none`}
            >
              <option selected>Relationship</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select> */}
            <input
              type="file"
              name="receipt"
              className={`${styles.formInput} file:mr-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100`}
            />
          </div>

          <div className="my-4 flex flex-col gap-4">
            <div className="flex justify-between ">
              <p>Total fee:</p>
              <p>
                <span className="text-xs sm:text-sm">RM </span>
                <span className="text-sm sm:text-base font-semibold">
                  123.00
                </span>
              </p>
            </div>
            <button type="submit" className="rounded-xl p-2 bg-sky-600">
              <span className="text-neutral-100 font-semibold">Submit</span>
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}
