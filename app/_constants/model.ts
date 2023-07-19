export interface Event {
  id: number;
  title: string;
  day: string;
  date: string;
  time: string;
  location: Location;
  description: string;
  age: string;
  fee: string;
  theme: string;
  poster: string;
  agenda: string;
  images: string[];
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
