"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <div className="mb-6 flex items-center">
                <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold tracking-wide text-primary dark:bg-white/10 dark:text-white">
                  🔥 The Premium Guide to Investing
                </span>
              </div>
              
              <h1 className="mb-6 text-4xl font-extrabold leading-tight text-black dark:text-white md:text-5xl lg:text-6xl">
                Master Your Finances <br className="hidden lg:block" /> with{" "}
                <span className="text-primary">
                  Confidence.
                </span>
              </h1>
              
              <p className="mb-10 text-lg leading-relaxed text-black dark:text-white lg:w-11/12">
                Discover data-driven strategies for investing, saving smartly, and building long-term wealth. Join thousands of sophisticated readers taking absolute control over their financial future.
              </p>

              <div className="flex flex-wrap items-center gap-5">
                <a
                  href="/blog"
                  className="group flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-medium text-white shadow-solid-2 transition-all duration-300 hover:bg-primaryho hover:shadow-lg dark:shadow-none"
                >
                  Start Reading Now
                  <svg className="transition-transform duration-300 group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="/contact"
                  className="flex items-center rounded-full border-2 border-black bg-transparent px-8 py-3 font-medium text-black transition-all duration-300 hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Contact Experts
                </a>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                {/* shapes removed for cleaner look */}
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-image.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-image.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
