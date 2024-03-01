import Image from "next/image";
import Link from "next/link";
import { format, isBefore } from "date-fns";
import { Event } from "../_constants/interface";
import { FadeInWrapper } from "../_utils";
import { motion } from "framer-motion";
import { convertDriveUrl } from "../_utils/util";
import { daysInWeek } from "../_constants/constants";

export default function EventCard({ event }: { event: Event }) {
  const currentDate = new Date();
  const eventDate = format(event.start, "d/M/Y");
  const eventStart = format(event.start, "h:mmaaa");
  const eventEnd = format(event.end, "h:mmaaa");
  const eventDay = event.start.getDay();

  return (
    <>
      <FadeInWrapper>
        <Link href={`/${event.id}`} className="w-full h-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col sm:flex-row w-full h-full bg-white rounded-xl hover:shadow-md"
          >
            {/* w-[300px] sm:w-[600px] lg:w-[700px] */}
            {/* sm:h-[300px] lg:h-[350px] */}
            <Image
              priority
              src={convertDriveUrl(event.poster)}
              alt={"Event poster"}
              width={0}
              height={0}
              sizes="100vw"
              className="object-cover rounded-t-xl sm:rounded-xl w-full h-auto sm:w-2/5 lg:w-[1.5/4] aspect-[4/3] "
            />

            <div className="px-6 lg:px-8 py-6 sm:py-8 md:py-10 xl:py-12 sm:w-3/5 lg:w-[2.5/4]">
              <div className="flex justify-between text-sm items-center lg:text-base text-neutral-700 font-medium">
                <p>
                  {eventDate} ({daysInWeek[eventDay]}), {eventStart} -{" "}
                  {eventEnd}
                </p>
                &nbsp;
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
                    } border border-emerald-600 text-emerald-600 bg-green-100 text-xs lg:text-sm rounded-md px-2 py-1 flex justify-center items-center`}
                  >
                    Upcoming
                  </p>
                </div>
                {/*flex-wrap  <p>
                  {eventStart} - {eventEnd}
                </p> */}
              </div>

              {/* <div
                className={`${
                  isBefore(currentDate, event.start) ? "h-[24px]" : "h-[16px]"
                } flex my-2 sm:my-3`}
              >
                <p
                  className={`${
                    isBefore(currentDate, event.start)
                      ? "inline-block"
                      : "hidden"
                  } border border-emerald-600 text-emerald-600 bg-white text-xs lg:text-sm rounded-md px-2 py-1 flex justify-center items-center`}
                >
                  Upcoming
                </p>
              </div> */}

              <div className="my-6">
                <p className="mb-2 text-2xl lg:text-4xl text-neutral-800 font-bold">
                  {event.enTitle}
                </p>
                <p className="mb-2 text-2xl lg:text-4xl text-neutral-800 font-bold">
                  {event.chsTitle}
                </p>
                <p className="lg:text-lg text-neutral-600 font-semibold">
                  {event.location?.name}
                </p>
              </div>

              {/* <div
                className={`${
                  isBefore(currentDate, event.start) ? "h-[16px]" : "h-[24px]"
                } flex my-2 sm:my-3`}
              ></div> */}

              <p className="line-clamp-3 sm:line-clamp-4 xl:line-clamp-5  text-sm lg:text-base text-neutral-600 text-justify">
                {event.description}
              </p>
            </div>
          </motion.div>
        </Link>
      </FadeInWrapper>
    </>
  );
}
