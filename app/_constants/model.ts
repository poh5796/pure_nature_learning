import { StaticImageData } from "next/image";

export interface Event {
  id: number;
  title: string;
  day: string;
  start: Date;
  end: Date;
  location: Location;
  description: string;
  age: string;
  fee: number;
  theme: string;
  poster: StaticImageData;
  agenda: string;
  images: StaticImageData[];
  booking: string;
}
interface Location {
  name: string;
  lat: string;
  long: string;
}
export interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}
export interface Contact {
  title: string;
  link: string;
  image: JSX.Element;
}
