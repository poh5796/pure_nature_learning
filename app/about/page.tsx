"use client";
import { motion } from "framer-motion";
import { benefits } from "../_constants/constants";
import { AiOutlineCaretDown } from "react-icons/ai";
import bgHero from "@/assets/bgHero.jpg";
import Image from "next/image";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import React from 'react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Page() {
  return (
    <>
      <div className="fadeout bg-neutral-50 absolute top-0 left-0 h-[95vh] w-full z-10"></div>

      <div className="flex flex-col justify-center items-center mt-[-60px] h-[95vh] w-full relative">
        <div className="quote flex flex-col items-center gap-6 font-black text-4xl md:text-5xl lg:text-6xl z-10">
          <p>把自然融入学习</p>
          <p>与自然一起成长</p>
          {/* <br />
    <p>Learn from nature</p>
    <p>Grow with nature</p> */}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1 }}
          className="flex flex-col justify-center items-center absolute bottom-20 z-10"
        >
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.4,
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <AiOutlineCaretDown />
          </motion.div>
          <a href="#section1" className="text-shadow text-neutral-800">
            Click me
          </a>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 h-[100vh] w-full">
        <Image
          className="object-cover w-full h-full"
          src={bgHero}
          alt={"Background Image of the Hero Section"}
        />
        <video width="320" height="240" controls preload="none">
          <source src="/" type="video/mp4" />
          {/* <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          /> */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="bg-gradient-animate">
        <div id="section1" className="h-[60px]"></div>
        <section className="px-[10vw] md:px-[15vw] xl:px-[20vw] py-[5vh]">
          <p className="text-5xl text-neutral-8-- drop-shadow-lg font-black my-2">
            大自然学习
          </p>
          <p className="text-lg text-neutral-700 drop-shadow-lg py-4">
            是一种引领我们走向自然的学习方式。通过观察、体验和探索，我们可以深入了解自然的奥秘。朴乐提供了一个平台，让我们一起发现自然的美丽和无尽的智慧。
          </p>
          <p className="text-neutral-800 font-semibold py-4">
            开始你的自然之旅吧！
          </p>
        </section>

        <section className="py-4 px-[10vw] md:px-[15vw] xl:px-[20vw]">
          <p className="text-lg font-semibold text-neutral-800 py-4">
            我们的使命
          </p>

          
        </section>
      </div>

      <div className="px-[10vw] md:px-[15vw] xl:px-[20vw] py-[5vh]">
        <section className="flex flex-col sm:flex-row">
          <div className="flex justify-center">
            <div className="portrait">
              <span className="hidden">
                Inspired by https://stefantopalovicdev.vercel.app/
              </span>
            </div>
          </div>

          <div className="px-8 flex flex-col justify-center">
            <p className="py-4 text-2xl font-black">About Us</p>
            <p className="text-base text-neutral-600 text-justify font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              minima, et fuga ipsa dolorem sapiente eligendi minus officiis quod
              doloribus distinctio impedit, dolore dignissimos deserunt a
              facilis harum hic dolorum?
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
