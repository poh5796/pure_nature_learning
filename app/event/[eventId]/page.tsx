"use client";
import { events } from "@/app/_constants/events";

export default function Page({ params }: { params: { eventId: number } }) {
  const event = events.filter((event) => event.id == params.eventId)[0];

  return (
    <>
      <div className="px-[10vw] py-[5vh]">
        <p className="text-2xl text-neutral-800">{event.title}</p>
      </div>
    </>
  );
}
