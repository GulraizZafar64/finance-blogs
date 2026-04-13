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
      position: 'bottom-right',
      style: {
        background: '#1c2136',
        color: '#fff',
        borderRadius: '10px',
      }
    });
    e.currentTarget.reset();
  };

  if (!hasMounted) return null;

  return (
    <section id="contact" className="relative pb-20 pt-10 px-4 md:px-8 2xl:px-0">
      {/* Background Decoration */}
      <div className="absolute left-0 top-0 -z-1 h-[500px] w-full bg-linear-to-b from-zumthor/50 to-transparent dark:from-strokedark/20"></div>

      <div className="mx-auto max-w-c-1390">
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
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
              Let's Talk <span className="text-primary italic">Finance</span>
            </h2>
            <p className="mb-12 text-lg">
              Have questions about investing, personal finance, or our editorial standards? Reach out to our expert team.
            </p>

            <div className="space-y-6">
              <div className="group flex items-center gap-6 rounded-2xl border border-stroke bg-white p-6 shadow-solid-2 transition-all hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">Email Us</h4>
                  <p className="text-sm">gulraizzafar77@gmail.com</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 rounded-2xl border border-stroke bg-white p-6 shadow-solid-2 transition-all hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-meta/10 text-meta">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">Call Anytime</h4>
                  <p className="text-sm">+92 306 4643016</p>
                </div>
              </div>

              <div className="group flex items-center gap-6 rounded-2xl border border-stroke bg-white p-6 shadow-solid-2 transition-all hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4 className="font-semibold text-black dark:text-white">Main Office</h4>
                  <p className="text-sm">Arfa Software Technology Park, Lahore, Pakistan</p>
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
            className="w-full rounded-3xl bg-white p-8 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black lg:w-2/3 xl:p-15"
          >
            <h3 className="mb-10 text-2xl font-bold text-black dark:text-white">Send a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full name"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white lg:w-1/2"
                />

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Phone number"
                  className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-primary focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white lg:w-1/2"
                />
              </div>

              <div className="mb-11.5 flex">
                <textarea
                  name="message"
                  required
                  placeholder="Message"
                  rows={4}
                  className="w-full border-b border-stroke bg-transparent focus:border-primary focus:placeholder:text-black focus-visible:outline-hidden dark:border-strokedark dark:focus:border-primary dark:focus:placeholder:text-white"
                ></textarea>
              </div>

              <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                <label htmlFor="default-checkbox" className="flex cursor-pointer select-none items-start gap-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    required
                    className="peer sr-only"
                  />
                  <span className="mt-1 flex h-5 min-w-[20px] items-center justify-center rounded-sm border border-stroke bg-gray-100 dark:border-strokedark dark:bg-gray-700 peer-checked:border-primary peer-checked:bg-primary">
                    <svg
                      className="opacity-0 peer-checked:opacity-100"
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span className="max-w-[425px] text-sm">
                    By checking this box, you agree to our Terms of Service and Privacy Policy.
                  </span>
                </label>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-9 py-4 font-medium text-white shadow-lg shadow-primary/20 transition-all hover:bg-primaryho sm:w-auto"
                >
                  Send Message
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polyline points="22 2 15 22 11 13 2 9 22 2"/></svg>
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

