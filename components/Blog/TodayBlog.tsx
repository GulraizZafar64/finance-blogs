"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const TodayBlog = () => {
  // Find post published "April 19, 2026"
  const todayPost = BlogData.find((b) => b._id === 999);
  if (!todayPost) return null;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 py-16 lg:py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-red-500" />
          </span>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Published Today — April 19, 2026
          </span>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image
                src={todayPost.mainImage}
                alt={todayPost.title}
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              {/* Tags */}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {todayPost.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Market stats strip */}
            <div className="mb-6 grid grid-cols-4 gap-2 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              {[
                { label: "S&P 500", value: "-4.8%", color: "text-red-400" },
                { label: "Nasdaq", value: "-7.2%", color: "text-red-400" },
                { label: "Gold", value: "+3.1%", color: "text-green-400" },
                { label: "10-Yr", value: "4.52%", color: "text-blue-400" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="mt-0.5 text-[10px] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <h2 className="mb-4 text-2xl font-bold leading-snug text-white md:text-3xl xl:text-[34px]">
              {todayPost.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-300">
              {todayPost.metadata}
            </p>

            {/* Key takeaways */}
            <ul className="mb-8 space-y-2.5">
              {[
                "Sector winners & losers ranked by tariff exposure",
                "SVG charts showing April 2026 performance data",
                "Defensive allocation model for uncertain markets",
                "4 key catalysts to watch for market recovery",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/blog/${todayPost.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-primaryho hover:shadow-primary/50"
              >
                Read Full Analysis
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-xs text-slate-400">
                By <span className="text-slate-200">WealthPilot Team</span> · 8 min read
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TodayBlog;
