"use client";

import React from "react";
import Image from "next/image";
import PageWrapper from "./page-wrapper";
import unsplashDesktop from "../assets/unsplash-desktop.jpg";
import unsplashMobile from "../assets/unsplash-mobile.jpg";
import { slideIn } from "./_utils/motion";

export default function Page() {
  return (
    <>
      {/* <div className="fadeOut bg-slate-500 h-screen w-screen absolute "></div>
      <div className="font-[3rem] scaleText flex flex-col justify-center items-center">
        <p>“把自然融入学习，与自然一起成长”</p>
        <p>Learn from nature, grow with nature</p>
      </div> */}
      <PageWrapper>
        <Image
          src={unsplashDesktop}
          alt={"Background Image of the Hero Section"}
          className="hidden md:block md:absolute md:top-0 md:left-0 md:z-[-1] "
        />
        <Image
          src={unsplashMobile}
          alt={"Background Image of the Hero Section"}
          className="md:hidden absolute top-0 left-0 z-[-1]"
        />
        <section className="mb-12 h-screen">
          <p className="text-5xl text-neutral-8-- drop-shadow-lg font-black">
            大自然学习
          </p>
          <p className="text-lg text-neutral-700 drop-shadow-lg py-4">
            是一种引领我们走向自然的学习方式。通过观察、体验和探索，我们可以深入了解自然的奥秘。朴乐提供了一个平台，让我们一起发现自然的美丽和无尽的智慧。
          </p>
          <p className="text-neutral-800 py-4">开始你的自然之旅吧！</p>
        </section>

        <section className="py-4">
          <p className="text-lg font-bold text-neutral-800 py-4">我们的使命</p>

          <div className="flex gap-8">
            {benefits.map((benefit) => (
              <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                key={benefit.title}
              >
                <div className="border flex flex-col justify-center items-center shadow-lg rounded-lg px-4 py-6">
                  <div className="rounded-t-lg my-4">
                    <Image
                      src={benefit.icon}
                      alt={"Icons representing the benefits of nature learning"}
                      height={50}
                      width={50}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-xl font-semibold text-neutral-900 py-4">
                      {benefit.title}
                    </p>
                    <p className=" text-neutral-600">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div>
          <section></section>
        </motion.div>
      </PageWrapper>
    </>
  );
}
const benefits = [
  {
    title: "增强认知和解决问题的能力",
    description: "在自然环境中学习刺激认知能力和解决问题的技巧",
    icon: facebook,
  },
  {
    title: "改善身体健康和福祉",
    description: "在大自然中活动有益于身体健康，促进身心健康",
    icon: facebook,
  },
  {
    title: "环境意识和保护伦理",
    description: "自然学习培养环境意识和保护自然的道德观念",
    icon: facebook,
  },
];
import facebook from "../assets/facebook.png";
import Navbar from "./_components/navbar";
import { motion } from "framer-motion";
