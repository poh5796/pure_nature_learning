"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PageWrapper from "./page-wrapper";
import bgHero from "../assets/bgHero.jpg";
import { benefits } from "./_constants/constants";
import { AiOutlineCaretDown } from "react-icons/ai";

export default function Page() {
  useEffect(() => {
    return () => {};
  }, []);

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
          transition={{ duration: 0.2, delay: 0.8 }}
          className="flex flex-col justify-center items-center absolute bottom-20 z-10"
        >
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.4,
              // stiffness: 50,
              // damping: 0,
              // mass: 1,
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

      <div className="absolute top-0 left-0 h-[95vh] w-full">
        <Image
          className="object-cover w-full h-full"
          src={bgHero}
          alt={"Background Image of the Hero Section"}
        />
      </div>

      <PageWrapper>
        <div className="bg-gradient-animate">
          <div id="section1" className="h-[60px]"></div>
          <section className="px-[10vw] md:px-[15vw] py-[5vh]">
            <p className="text-5xl text-neutral-8-- drop-shadow-lg font-black">
              大自然学习
            </p>
            <p className="text-lg text-neutral-700 drop-shadow-lg py-4">
              是一种引领我们走向自然的学习方式。通过观察、体验和探索，我们可以深入了解自然的奥秘。朴乐提供了一个平台，让我们一起发现自然的美丽和无尽的智慧。
            </p>
            <p className="text-neutral-800 py-4">开始你的自然之旅吧！</p>
          </section>

          <section className="py-4 px-[10vw] md:px-[15vw]">
            <p className="text-lg font-bold text-neutral-800 py-4">
              我们的使命
            </p>

            <div className="flex flex-wrap gap-4">
              {benefits.map((benefit) => {
                return (
                  // <motion.div
                  //   variants={slideIn("left", "tween", 0.2, 1)}
                  //   key={benefit.title}
                  // >
                  <div
                    key={benefit.title}
                    className="flex flex-col justify-center items-center  bg-neutral-50 rounded-2xl shadow-md"
                  >
                    {benefit.icon}
                    <div className="flex flex-col justify-center items-center px-6 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                      <p className="text-xl font-medium text-neutral-800 py-4">
                        {benefit.title}
                      </p>
                      {/* <p className="text-base text-justify text-neutral-600">
                        {benefit.description}
                      </p> */}
                    </div>
                  </div>
                  // </motion.div>
                );
              })}
            </div>
          </section>

          <motion.div>
            <section></section>
          </motion.div>
        </div>
      </PageWrapper>
    </>
  );
}
