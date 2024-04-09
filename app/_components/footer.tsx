import Link from "next/link";
import { socials } from "../_constants/constants";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      id="contact"
      className="px-8 flex flex-col justify-around border text-sm text-neutral-600 bg-neutral-50"
    >
      <div className="my-8">
        <p className="mb-8 text-neutral-600 text-xl font-bold text-center">
          Contacts
        </p>
        <div className="flex justify-center">
          <div className="flex gap-8 flex-wrap justify-between">
            {socials.map((social, index) => {
              return (
                <Link
                  key={index}
                  href={social.link}
                  className={`${
                    social.title === "Facebook"
                      ? "hover:text-[#4267B2]"
                      : social.title === "WhatsApp"
                      ? "hover:text-[#25D366]"
                      : social.title === "Instagram"
                      ? "hover:text-[#8a3ab9]"
                      : social.title === "Xiaohongshu"
                      ? "hover:text-[#EB2E31]"
                      : "text-neutral-500"
                  } flex items-center`}
                >
                  {social.image}&nbsp;
                  <span className=" font-medium">{social.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* <hr /> */}

      <div className="py-4 flex flex-col items-center">
        <p>© {currentYear} Pure Nature Learning. All rights reserved.</p>
        {/* <p>
          Powered by&nbsp;
          <Link href={"https://poh.netlify.app/"}>
            <span className="text-neutral-800 font-medium">Poh.</span>
          </Link>
        </p> */}
      </div>
    </div>
  );
}
