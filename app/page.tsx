"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import PageWrapper from "./page-wrapper";
import { slideIn } from "./_utils/motion";
import unsplashDesktop from "../assets/unsplash-desktop.jpg";
import { benefits } from "./_constants/constants";

export default function Page() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
      <div className="fadeout bg-neutral-50 absolute top-0 left-0 h-screen w-screen z-10"></div>
      <div className="flex justify-center items-center mt-[-60px] h-screen w-screen">
        <div className="textShadowWhite textScaleDown flex flex-col items-center text-neutral-900 font-black text-2xl md:text-4xl lg:text-5xl z-10">
          <p>“把自然融入学习，与自然一起成长”</p>
          <p>Learn from nature, grow with nature</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-screen w-screen">
        <Image
          className="object-cover w-full h-full"
          src={unsplashDesktop}
          alt={"Background Image of the Hero Section"}
        />
      </div>
      <PageWrapper>
        <section className="mb-12 px-[10vw] md:px-[15vw] py-[5vh]">
          <p className="text-5xl text-neutral-8-- drop-shadow-lg font-black">
            大自然学习
          </p>
          <p className="text-lg text-neutral-700 drop-shadow-lg py-4">
            是一种引领我们走向自然的学习方式。通过观察、体验和探索，我们可以深入了解自然的奥秘。朴乐提供了一个平台，让我们一起发现自然的美丽和无尽的智慧。
          </p>
          <p className="text-neutral-800 py-4">开始你的自然之旅吧！</p>
        </section>

        <section className="py-4 px-[10vw] md:px-[15vw]">
          <p className="text-lg font-bold text-neutral-800 py-4">我们的使命</p>

          <div className="flex flex-wrap gap-4">
            {benefits.map((benefit) => {
              // const icon = benefit.icon
              return (
                // <motion.div
                //   variants={slideIn("left", "tween", 0.2, 1)}
                //   key={benefit.title}
                // >
                <div
                  key={benefit.title}
                  className="flex flex-col justify-center items-center  bg-neutral-50 rounded-2xl shadow-md"
                >
                  <div>
                    {/* <a href="">{icon}</a> */}
                    {/* <Image
                    src={benefit.icon}
                    alt={"Icons representing the benefits of nature learning"}
                    height={50}
                    width={50}
                  /> */}
                  </div>
                  <div className="flex flex-col justify-center items-center px-6 py-4 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
                    <p className="text-xl font-medium text-neutral-800 py-4">
                      {benefit.title}
                    </p>
                    <p className="text-base text-justify text-neutral-600">
                      {benefit.description}
                    </p>
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
      </PageWrapper>
    </>
  );
}
