import { StaticImageData } from "next/image";

export interface Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
  location: Location;
  description: string;
  age: string;
  fee: Fee;
  theme: string;
  poster: StaticImageData;
  sheetId: string;
  agenda: string;
  images: StaticImageData[];
}

interface Fee {
  adult: number;
  children: number;
}

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

export interface Form {
  name: string;
  dob: Date;
  idNumber: string;
  age: string;
  gender: string;
  guardianName: string;
  guardianIdNumber: string;
  guardianEmail: string;
  guardianContact: string;
  relationship: string;
  emergencyContact: string;
  paymentReceipt: string;
}
