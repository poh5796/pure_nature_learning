"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import logoBird from "../../assets/logos/logo-bird.png";

const links = [
  // { href: "/about", name: "关于" },
  // { href: "/event", name: "活动" },
  { href: "#contact", name: "联络我们" },
];

export default function Navbar() {
  const path = usePathname();
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (toggle) openNav();
    else closeNav();
  }, [toggle]);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", function (event) {
      let scroll = this.scrollY;
      const nav = document.getElementById("nav");
      if (scroll > 0) {
        // nav?.classList.remove("unglass");
        nav?.classList.add("glass");
      } else {
        nav?.classList.remove("glass");
        // nav?.classList.add("unglass");
      }
    });
  }

  function openNav() {
    if (typeof window !== "undefined") {
      const sidenav = document.getElementById("sidenav");
      if (sidenav) {
        sidenav!.style.height = "100vh";
        sidenav?.classList.add("glass");
      }
    }
  }

  function closeNav() {
    if (typeof window !== "undefined") {
      const sidenav = document.getElementById("sidenav");
      if (sidenav) {
        sidenav!.style.height = "0px";
      }
      setTimeout(() => {
        sidenav?.classList.remove("glass");
      }, 100);
    }
  }

  return (
    <>
      <motion.nav
        id="nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.3, delay: 0.3 }}
        className="sticky top-0 flex justify-between px-8 py-4 z-50"
      >
        <Link href={"/"} onClick={() => setToggle(false)} scroll={false}>
          <span className="flex items-center text-lg text-neutral-900 font-bold text-shadow">
            朴乐 | PURE &nbsp;
            <Image
              src={logoBird}
              alt={"Logo Image"}
              height={0}
              width={0}
              sizes="100vw"
              className="w-[25px] h-[25px]"
            />
          </span>
        </Link>

        <ul className="hidden sm:flex sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  className={`${
                    path === link.href ? "font-black" : "font-bold"
                  } text-sm text-neutral-800 text-shadow`}
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
      </motion.nav>

      <div id="sidenav" className="z-40">
        {/* ${toggle ? openNav() : closeNav()} */}
        <ul className="flex flex-col gap-12 px-8 py-4 ">
          {links.map((link) => (
            <li key={link.href} className="w-fit">
              <motion.div whileHover={{ scale: 1.04 }}>
                <Link
                  tabIndex={-1} //Disable focus on hidden side nav
                  className={`${
                    link.href === path ? "font-black" : "font-semibold"
                  } text-xl text-neutral-900`}
                  href={link.href}
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
