import Image from "next/image";
import Link from "next/link";
import PageWrapper from "../page-wrapper";
import { events } from "../_constants/events";
import { Event } from "../_constants/model";

export default function Page() {
  return (
    <>
      <PageWrapper>
        <div className="flex flex-col-reverse gap-8 items-center px-[10vw] py-[5vh]">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </PageWrapper>
    </>
  );
}

const EventCard = ({ event }: { event: Event }) => (
  <>
    <Link href={`/event/${event.id}`}>
      <div className="border rounded-2xl w-[300px] hover:shadow sm:w-[600px] sm:h-[350px] sm:flex lg:w-[900px] lg:h-[500px]">
        {/* <div className="flex justify-center"> */}
        <Image
          src={event.thumbnail}
          alt={"Event thumbnail"}
          width={300}
          height={150}
          className="object-cover rounded-t-2xl sm:w-2/5 sm:rounded-2xl"
        />
        {/* </div> */}
        <div className="px-4 py-8 sm:w-3/5 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="flex flex-wrap justify-between">
            <p className="text-sm text-neutral-500 font-light">{event.date}</p>
            <p className="text-sm text-neutral-500 font-light">{event.time}</p>
          </div>

          <div className="my-8">
            <p className="mb-2 text-2xl text-neutral-800 font-bold">
              {event.title}
            </p>
            <p className="text-sm text-neutral-500 font-normal">
              {event.location}
            </p>
          </div>

          <p className="text-base text-neutral-600 font-normal text-ellipsis">
            {event.description}
          </p>
        </div>
      </div>
    </Link>
  </>
);
