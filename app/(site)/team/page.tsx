import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - WealthPilot",
  description:
    "Meet the experts behind WealthPilot. Our team of financial analysts and investment strategists is dedicated to your financial success.",
};

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Gulraiz Zafar",
      role: "Founder & Lead Financial Analyst",
      bio: "Gulraiz is a seasoned financial expert with over a decade of experience in investment strategy, portfolio construction, and financial planning. He leads WealthPilot's editorial direction and ensures every guide meets strict accuracy and usability standards.",
      image: "/images/team/founder.PNG",
    },
    {
      name: "Jason Statham",
      role: "Senior Investment Strategist",
      bio: "Jason develops data-driven wealth-building strategies for our readers and specializes in retirement planning, tax-efficient investing, and risk management for high-net-worth individuals.",
      image: "/images/team/jason.jpg",
    },
    {
      name: "Ayesha Khan",
      role: "Editorial & Research Lead",
      bio: "Ayesha oversees all financial content review, ensuring that every article is fact-checked, up to date, and aligned with regulatory best practices for the YMYL finance space.",
      image: "/images/team/ayesha.jpg",
    },
  ];

  return (
    <div className="relative overflow-hidden pt-40 pb-20">
      {/* Background Shapes */}
      <div className="absolute top-0 left-1/2 -z-1 -translate-x-1/2 opacity-30 dark:opacity-20">
        <Image
          src="/images/shape/shape-dotted-light.svg"
          alt="shape"
          width={800}
          height={800}
          className="dark:hidden"
        />
        <Image
          src="/images/shape/shape-dotted-dark.svg"
          alt="shape"
          width={800}
          height={800}
          className="hidden dark:block"
        />
      </div>

      <section className="relative z-10 pb-20 lg:pb-25 xl:pb-30">
        <div className="max-w-c-1235 mx-auto px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto mb-16 text-center">
            <h1 className="xl:text-sectiontitle3 mb-4 text-4xl font-extrabold text-black sm:text-5xl dark:text-white">
              Meet the Experts Behind{" "}
              <span className="from-primary bg-gradient-to-r to-blue-400 bg-clip-text text-transparent">
                WealthPilot
              </span>
            </h1>
            <p className="text-waterloo dark:text-manatee mx-auto max-w-[800px] text-lg leading-relaxed">
              Our multidisciplinary team of financial analysts, strategists, and
              editors works tirelessly to provide you with the most accurate,
              actionable, and trustworthy financial advice.
            </p>
          </div>

          <div className="mt-15 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="animate_top group border-stroke shadow-solid-10 hover:border-primary hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection dark:hover:border-primary relative flex flex-col rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Decorative element */}
                <div className="bg-primary/5 group-hover:bg-primary/10 absolute top-0 right-0 -z-1 h-32 w-32 translate-x-10 -translate-y-10 rounded-full blur-3xl transition-all"></div>

                <div className="relative mx-auto mb-8 h-44 w-44">
                  <div className="border-primary/20 group-hover:border-primary/40 absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border-2 border-dashed"></div>
                  <div className="shadow-solid-9 dark:border-blacksection absolute inset-2 overflow-hidden rounded-full border-4 border-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="flex-grow text-center">
                  <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">
                    {member.name}
                  </h3>
                  <div className="bg-primary/10 text-primary mb-5 inline-block rounded-full px-4 py-1 text-sm font-semibold">
                    {member.role}
                  </div>
                  <p className="text-waterloo dark:text-manatee mb-8 text-base leading-relaxed">
                    {member.bio}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Trust Banner */}
          <div className="border-stroke shadow-solid-8 dark:border-strokedark dark:from-blacksection relative mt-24 overflow-hidden rounded-[40px] border bg-gradient-to-br from-slate-50 to-white p-10 md:p-16 dark:to-black">
            <div className="absolute top-0 right-0 -translate-x-1/2 -translate-y-1/2 opacity-10">
              <Image
                src="/images/shape/shape-06.png"
                alt="shape"
                width={400}
                height={400}
              />
            </div>

            <div className="relative z-10 flex flex-col items-start gap-10 lg:flex-row lg:items-center">
              <div className="lg:w-1/2">
                <div className="bg-primary shadow-solid-5 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h2 className="mb-5 text-3xl font-bold text-black xl:text-4xl dark:text-white">
                  Our Editorial Integrity & Trust
                </h2>
                <p className="text-waterloo dark:text-manatee text-lg leading-relaxed">
                  At WealthPilot, our mission is to simplify complex financial
                  topics. We follow a rigorous editorial process to ensure every
                  piece of content is accurate, unbiased, and trustworthy.
                </p>
              </div>

              <div className="w-full space-y-4 lg:w-1/2">
                {[
                  "Expert-reviewed financial content focusing on accuracy.",
                  "Analyzed by specialists with deep YMYL finance expertise.",
                  "Clear disclosure and commitment to financial ethics.",
                  "Content updated regularly to reflect latest market trends.",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="shadow-solid-2 dark:bg-blackho flex items-center gap-4 rounded-2xl bg-white p-4"
                  >
                    <div className="bg-meta/10 text-meta flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="font-medium text-black dark:text-white">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
