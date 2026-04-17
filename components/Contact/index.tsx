"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message received! We'll get back to you shortly.", {
      duration: 4000,
      position: "bottom-right",
      style: {
        background: "#1c2136",
        color: "#fff",
        borderRadius: "10px",
      },
    });
    e.currentTarget.reset();
  };

  if (!hasMounted) return null;

  return (
    <section
      id="contact"
      className="relative px-4 pt-10 pb-20 md:px-8 2xl:px-0"
    >
      {/* Background Decoration */}
      <div className="from-zumthor/50 dark:from-strokedark/20 absolute top-0 left-0 -z-1 h-[500px] w-full bg-linear-to-b to-transparent"></div>

      <div className="max-w-c-1390 mx-auto">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between xl:gap-20">
          {/* Contact Info Cards */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/3"
          >
            <h2 className="xl:text-sectiontitle2 mb-8 text-3xl font-bold text-black dark:text-white">
              Let's Talk <span className="text-primary italic">Finance</span>
            </h2>
            <p className="mb-12 text-lg">
              Have questions about investing, personal finance, or our editorial
              standards? Reach out to our expert team. We typically respond within <span className="text-primary font-bold">24-48 hours</span>.
            </p>

            <div className="space-y-6">
              <div className="group border-stroke shadow-solid-2 hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection flex items-center gap-6 rounded-2xl border bg-white p-6 transition-all">
                <div className="bg-primary/10 text-primary flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">
                    Editorial & Support
                  </h4>
                  <a href="mailto:contact@wealthpilot.blog" className="text-sm hover:text-primary transition-colors">contact@wealthpilot.blog</a>
                </div>
              </div>

              <div className="group border-stroke shadow-solid-2 hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection flex items-center gap-6 rounded-2xl border bg-white p-6 transition-all">
                <div className="bg-meta/10 text-meta flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">
                    Call Anytime
                  </h4>
                  <a href="tel:+923064643016" className="text-sm hover:text-primary transition-colors">+92 306 4643016</a>
                </div>
              </div>

              <div className="group border-stroke shadow-solid-2 hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection flex items-center gap-6 rounded-2xl border bg-white p-6 transition-all">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">
                    Main Office
                  </h4>
                  <p className="text-sm">
                    Arfa Software Technology Park, Lahore, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="shadow-solid-8 dark:border-strokedark w-full rounded-3xl bg-white p-8 lg:w-2/3 xl:p-15 dark:border dark:bg-black"
          >
            <h3 className="mb-10 text-2xl font-bold text-black dark:text-white">
              Send a message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full name"
                  className="border-stroke focus:border-primary dark:border-strokedark dark:focus:border-primary w-full border-b bg-transparent pb-3.5 text-black focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:text-white dark:focus:placeholder:text-white"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="border-stroke focus:border-primary dark:border-strokedark dark:focus:border-primary w-full border-b bg-transparent pb-3.5 text-black focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:text-white dark:focus:placeholder:text-white"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="border-stroke focus:border-primary dark:border-strokedark dark:focus:border-primary w-full border-b bg-transparent pb-3.5 text-black focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:text-white dark:focus:placeholder:text-white"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone number"
                  className="border-stroke focus:border-primary dark:border-strokedark dark:focus:border-primary w-full border-b bg-transparent pb-3.5 text-black focus:placeholder:text-black focus-visible:outline-hidden lg:w-1/2 dark:text-white dark:focus:placeholder:text-white"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows={4}
                  className="border-stroke focus:border-primary dark:border-strokedark dark:focus:border-primary w-full border-b bg-transparent text-black focus:placeholder:text-black focus-visible:outline-hidden dark:text-white dark:focus:placeholder:text-white"
                ></textarea>
              </div>

              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <label
                  htmlFor="default-checkbox"
                  className="flex cursor-pointer items-start gap-4 select-none"
                >
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    required
                    className="border-stroke text-primary focus:ring-primary dark:border-strokedark dark:bg-blackho mt-1 h-5 w-5 rounded-sm bg-gray-100"
                  />
                  <span className="max-w-[425px] text-sm dark:text-white">
                    By checking this box, you agree to our Terms of Service and
                    Privacy Policy.
                  </span>
                </label>

                <button
                  type="submit"
                  className="bg-primary shadow-primary/20 hover:bg-primaryho inline-flex items-center justify-center gap-2.5 rounded-full px-9 py-4 font-medium whitespace-nowrap text-white shadow-lg transition-all sm:w-auto"
                >
                  Send Message
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polyline points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
