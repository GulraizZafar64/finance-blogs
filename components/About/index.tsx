"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Hero Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-15 lg:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-solid-l">
                <Image
                  src="/images/about/about-light-01.png"
                  alt="About WealthPilot"
                  className="object-cover dark:opacity-80"
                  fill
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-5 z-10 hidden rounded-xl border border-white bg-white/70 p-5 shadow-solid-7 backdrop-blur-md dark:border-strokedark dark:bg-blacksection/70 sm:block"
              >
                <p className="text-3xl font-bold text-primary">Join Us</p>
                <p className="text-sm font-medium text-black dark:text-white">Active Readers</p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right w-full lg:w-1/2"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4.5 py-1.5 text-xs font-semibold tracking-wider text-primary uppercase dark:bg-primary/5">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                Our Story
              </span>
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Empowering Your {" "}
                <span className="relative inline-block text-primary">
                  Financial Future
                  <svg className="absolute -bottom-2 left-0 w-full" width="222" height="12" viewBox="0 0 222 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10.5C41.6667 4.16667 141.6 -5.3 221 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              <p className="mb-8 text-lg leading-relaxed">
                At WealthPilot, we believe that financial freedom shouldn't be a privilege of the few. We've dedicated ourselves to demystifying the world of finance for readers worldwide, providing actionable strategies for sustainable wealth creation.
              </p>

              <div className="space-y-6">
                <div className="group flex items-start gap-5 rounded-xl border border-transparent p-4 transition-all hover:border-stroke hover:bg-white dark:hover:border-strokedark dark:hover:bg-blacksection">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-metatitle2 font-semibold text-black dark:text-white">Unbiased Analysis</h3>
                    <p className="text-sm">We provide objective financial insights without hidden agendas or affiliate bias.</p>
                  </div>
                </div>

                <div className="group flex items-start gap-5 rounded-xl border border-transparent p-4 transition-all hover:border-stroke hover:bg-white dark:hover:border-strokedark dark:hover:bg-blacksection">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-meta/10 text-meta transition-colors group-hover:bg-meta group-hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-metatitle2 font-semibold text-black dark:text-white">Proven Strategies</h3>
                    <p className="text-sm">Real-world data and expert research back every piece of advice we share.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Mission Statement Section ===== --> */}
      <section className="relative z-10 overflow-hidden bg-blacksection py-20 dark:bg-blacksection/50 lg:py-25">
        {/* Background shapes */}
        <div className="absolute left-0 top-0 -z-1 h-full w-full opacity-10">
          <Image src="/images/shape/shape-dotted-light.svg" alt="shape" fill className="object-cover" />
        </div>

        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
            <div className="w-full lg:w-3/5">
              <h2 className="mb-6 text-3xl font-bold text-white xl:text-hero">
                Our Mission is to <br />
                <span className="text-meta">Bridge the Wealth Gap</span>
              </h2>
              <p className="text-lg text-manatee">
                We're building the most comprehensive and accessible financial resource on the internet. Our goal is to empower individuals at every life stage with the tools and knowledge they need to build lasting generational wealth.
              </p>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-8 lg:w-2/5 lg:justify-end">
              <div className="text-center">
                <p className="text-4xl font-bold text-white">Daily</p>
                <p className="text-sm text-manatee">Expert Guides</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">24/7</p>
                <p className="text-sm text-manatee">Market Updates</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-white">100%</p>
                <p className="text-sm text-manatee">Free Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Secondary About Section ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse items-center gap-15 lg:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full lg:w-1/2"
            >
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Expert Insights for Every 
                <span className="text-primary"> Stage of Life</span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed">
                Whether you're just starting your career, building a family, or planning for retirement, our blog provides comprehensive guidance tailored to your specific financial milestones.
              </p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-stroke p-6 shadow-solid-3 dark:border-strokedark dark:bg-black">
                  <p className="mb-2 text-primary font-bold">Investments</p>
                  <p className="text-sm">Mastering the art of asset allocation and capital growth.</p>
                </div>
                <div className="rounded-xl border border-stroke p-6 shadow-solid-3 dark:border-strokedark dark:bg-black">
                  <p className="mb-2 text-meta font-bold">Savings</p>
                  <p className="text-sm">Building a safety net that survives any economic storm.</p>
                </div>
              </div>

              <a
                href="/blog"
                className="mt-12 inline-flex items-center gap-2.5 rounded-full bg-black px-8 py-3.5 font-medium text-white transition-all hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              >
                Start Learning Now
                <svg width="18" height="18" viewBox="0 0 14 14" fill="currentColor"><path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"/></svg>
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto aspect-[588/526.5] w-full md:w-1/2"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-solid-l">
                <Image
                  src="/images/about/about-light-02.svg"
                  alt="About"
                  className="object-contain p-10 dark:opacity-80"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

