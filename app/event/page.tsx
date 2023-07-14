import Image from "next/image";
import PageWrapper from "../page-wrapper";

export default function Event() {
  return (
    <>
      <PageWrapper>
        <div className="flex flex-col-reverse gap-8 items-center">
          {events.map((event) => (
            <EventList key={event.id} event={event} />
          ))}
        </div>
      </PageWrapper>
    </>
  );
}

const EventList = ({ event }: { event: Event }) => (
  <>
    <div className="border rounded-2xl w-[300px] hover:shadow sm:w-[600px] sm:h-[250px] sm:flex lg:w-[900px] lg:h-[300px]">
      <Image
        src={photo1}
        alt={""}
        className="object-cover rounded-t-2xl sm:w-2/5 sm:rounded-2xl"
      />
      <div className="p-4 sm:w-3/5 lg:p-8">
        <div className="flex flex-wrap justify-between">
          <p className="text-sm text-neutral-500 font-light">{event.date}</p>
          <p className="text-sm text-neutral-500 font-light">{event.time}</p>
        </div>

        <p className="mt-4 mb-2 text-2xl text-neutral-800 font-bold">
          {event.title}
        </p>
        <p className="mb-6 text-sm text-neutral-500 font-normal">
          {event.location}
        </p>
        <p className="text-base text-neutral-600 font-normal text-ellipsis">
          {event.description}
        </p>
      </div>
    </div>
  </>
);

import photo1 from "../../assets/photo1.jpg";

interface Event {
  id: number;
  title: string;
  day: string;
  date: string;
  time: string;
  location: string;
  description: string;
  age: string;
  fee: string;
  image: string;
}

const events: Event[] = [
  {
    id: 0,
    title: "纸飞机 Paper Plane",
    day: "星期日 Sunday",
    date: "7/8/2022",
    time: "4:30pm(华) 5:30pm(英) 6:30pm(华)",
    location: "Taman Metropolitan, Kepong",
    description: "绘本解说与活动",
    age: "",
    fee: "",
    image: "",
  },
  {
    id: 1,
    title: "追风 Chasing Winds",
    day: "星期日 Sunday",
    date: "21/8/2022",
    time: "2:00pm - 6:00pm",
    location: "Taman Metropolitan, Kepong",
    description: "绘本解说与活动",
    age: "4 - 12 years old",
    fee: "RM 298 ++",
    image: "",
  },
  {
    id: 2,
    title: "小小云朵收藏家 Little Cloud Experts",
    day: "星期六 Saturday",
    date: "24/9/2022",
    time: "2:00pm - 6:00pm",
    location: "Anjung Floria, Putrajaya",
    description: "自然教育主题探索课 Theme-based Nature Learning Exploration",
    age: "3 - 12 years old",
    fee: "RM 298 ++",
    image: "",
  },
];
