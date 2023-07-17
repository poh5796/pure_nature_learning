import { IconType } from "react-icons/lib";

export interface Event {
  id: number;
  title: string;
  day: string;
  date: string;
  time: string;
  location: string;
  description: string;
  age: string;
  fee: string;
  theme: string;
  thumbnail: string;
  images: string[];
  booking: string;
}
export interface Benefit {
  title: string;
  description: string;
  icon: IconType;
}
