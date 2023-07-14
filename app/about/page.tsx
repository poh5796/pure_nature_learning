"use client";
import Image from "next/image";
import PageWrapper from "../page-wrapper";
import portraitPhan from "../../assets/portrait-phan.jpg";

export default function About() {
  return (
    <>
      <PageWrapper>
        <div className="px-[10vw] py-[5vh]">
          <section className="flex flex-col">
            <div className="portrait flex justify-center">
              <span className="hidden">
                Inspired by https://stefantopalovicdev.vercel.app/
              </span>
            </div>

            <p className="py-4 text-2xl font-black">About Us</p>
            <p className="text-base text-neutral-600 text-justify font-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
              minima, et fuga ipsa dolorem sapiente eligendi minus officiis quod
              doloribus distinctio impedit, dolore dignissimos deserunt a
              facilis harum hic dolorum?
            </p>
          </section>
        </div>
      </PageWrapper>
    </>
  );
}
