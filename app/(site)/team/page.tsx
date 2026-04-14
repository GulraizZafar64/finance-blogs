import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team - WealthPilot",
  description: "Meet the experts behind WealthPilot. Our team of financial analysts and investment strategists is dedicated to your financial success.",
};

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Gulraiz Zafar",
      role: "Founder & Lead Financial Analyst",
      bio: "Gulraiz Zafar is a seasoned financial expert with a passion for helping others achieve financial independence. With over a decade of experience in investment strategy and personal finance management, he founded WealthPilot to provide clear, actionable, and unbiased financial guidance.",
      image: "/images/team/founder.PNG",
      linkedin: "https://www.linkedin.com/in/gulraiz-zafar-811876330/",
    },
    // We can add more placeholder members or just leave it as a single-person lead if it's a personal blog
  ];

  return (
    <div className="pb-20 pt-40">
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="animate_top mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-[700px] text-base leading-relaxed">
              We are a dedicated group of financial professionals committed to empowering your financial journey with expert insights and proven strategies.
            </p>
          </div>

          <div className="mt-15 flex flex-wrap justify-center gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="animate_top group relative w-full max-w-[400px] rounded-2xl border border-stroke bg-white p-8 shadow-solid-10 transition-all hover:border-primary dark:border-strokedark dark:bg-blacksection"
              >
                <div className="relative mx-auto mb-8 h-40 w-40 overflow-hidden rounded-full border-4 border-primary/10 transition-all group-hover:border-primary">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="mb-1 text-2xl font-bold text-black dark:text-white">
                    {member.name}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-primary uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="mb-8 text-base leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 transition-all hover:text-primary"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
