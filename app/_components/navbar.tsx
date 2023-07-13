"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import bird from "../../assets/logo-bird.png";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/about", name: "关于" },
  { href: "/event", name: "活动" },
  { href: "#contact", name: "联络我们" },
];

export default function Navbar() {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function (event) {
      let scroll = this.scrollY;
      const nav = document.getElementById("nav");
      if (scroll > 0) {
        nav?.classList.add("glass");
      } else {
        nav?.classList.remove("glass");
      }
    });
  }

  return (
    <nav id="nav" className="sticky top-0 flex justify-between px-8 py-4 ">
      <Link href={"/"}>
        <span className="flex text-lg font-semibold text-neutral-950">
          朴乐 | PURE
          <Image src={bird} alt={"Logo Image"} height={25} width={25} />
        </span>
      </Link>

      <ul className="flex gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Link
                className={`${
                  link.href == path ? "font-black" : "font-semibold"
                } text-sm text-neutral-800`}
                href={link.href}
              >
                {link.name}
              </Link>
            </motion.div>
          </li>
        ))}
      </ul>
      {/* <div className="block md:hidden">
        <button
          id="button-three"
          onClick={() => {
            let button = document.getElementById("button-three");
            setToggle(!toggle);
            if (toggle) {
              button?.setAttribute("aria-expanded", "true");
            } else {
              button?.setAttribute("aria-expanded", "false");
            }
          }}
          aria-controls="primary-navigation"
          aria-expanded="false"
        >
          <svg
            stroke="var(--button-color)"
            fill="none"
            className="hamburger"
            viewBox="-10 -10 120 120"
            width="30"
          >
            <path
              className="line"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
            ></path>
          </svg>
        </button>
      </div> */}
    </nav>
  );
}
