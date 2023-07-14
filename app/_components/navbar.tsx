"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import bird from "../../assets/logo-bird.png";

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

  function openNav() {
    if (typeof window !== "undefined") {
      const sidenav = document.getElementById("sidenav");
      if (sidenav) {
        sidenav.style.height = "100vh";
        sidenav!.classList.add("glass");
      }
    }
  }

  function closeNav() {
    if (typeof window !== "undefined") {
      const sidenav = document.getElementById("sidenav");
      if (sidenav) {
        sidenav.style.height = "0px";
      }
      setTimeout(() => {
        sidenav?.classList.remove("glass");
      }, 100);
    }
  }

  return (
    <>
      <nav id="nav" className="sticky top-0 flex justify-between px-8 py-4">
        <Link href={"/"}>
          <span className="flex text-lg font-semibold text-neutral-950">
            朴乐 | PURE
            <Image src={bird} alt={"Logo Image"} height={25} width={25} />
          </span>
        </Link>

        <ul className="hidden sm:flex sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  className={`${
                    link.href == path ? "font-black" : "font-semibold"
                  } text-sm text-neutral-800`}
                  href={link.href}
                  scroll={false}
                >
                  {link.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>

        <motion.div
          className="flex justify-center items-center z-3 sm:hidden hover:cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => setToggle(!toggle)}
        >
          <svg
            fill="var(--button-color)"
            className="hamburger"
            viewBox="0 0 100 100"
            width="20"
          >
            <rect
              className="line top"
              width="80"
              height="10"
              x="10"
              y="25"
              rx="5"
            ></rect>
            <rect
              className="line middle"
              width="80"
              height="10"
              x="10"
              y="45"
              rx="5"
            ></rect>
            <rect
              className="line bottom"
              width="80"
              height="10"
              x="10"
              y="65"
              rx="5"
            ></rect>
          </svg>
        </motion.div>
      </nav>
      <div id="sidenav" className={`${toggle ? openNav() : closeNav()}`}>
        <ul className="flex flex-col gap-8 px-8 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <motion.div whileHover={{ scale: 1.05, x: 15, y: -3 }}>
                <Link
                  className={`${
                    link.href == path ? "font-black" : "font-semibold"
                  } text-xl text-neutral-800`}
                  href={link.href}
                  scroll={false}
                  onClick={() => setToggle(!toggle)}
                >
                  {link.name}
                </Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
