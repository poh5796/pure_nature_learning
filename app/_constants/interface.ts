import { StaticImageData } from "next/image";

export interface Event {
  id: number;
  enTitle: string;
  chsTitle: string;
  start: Date;
  end: Date;
  location: Location;
  description: string;
  age: string;
  fee: number;
  theme: string;
  poster: string;
  agendas: string[];
  images: string[];
  url: string;
}

// interface Fee {
//   adult: number;
//   children: number;
// }

interface Location {
  name: string;
  lat: string;
  long: string;
  placeId: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface Social {
  title: string;
  link: string;
  image: JSX.Element;
}
