import Link from "next/link";
import { contacts } from "../_constants/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <div
      id="contact"
      className="px-8 flex flex-col justify-around border text-sm text-neutral-600 bg-neutral-50"
    >
      <div className="py-8 flex justify-center">
        <div>
          <p className="mb-4 text-neutral-600 text-xl font-bold">Contacts</p>
          <div className="flex flex-col gap-2">
            {contacts.map((contact) => {
              return (
                <Link href={contact.link} className="flex items-center">
                  {contact.image}&nbsp;
                  <span className="text-neutral-500 font-medium">
                    {contact.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <hr />

      <div className="py-4 flex flex-col items-center">
        <p>© 2023 Pure Nature Learning. All rights reserved.</p>
        <p>
          Powered by&nbsp;
          <Link href={"https://poh.netlify.app/"}>
            <span className="text-neutral-800 font-medium">Poh.</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
