import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BlogData from "@/components/Blog/blogData";

export const metadata: Metadata = {
  title: "Gulraiz Zafar – Senior Financial Analyst & Founder | WealthPilot",
  description:
    "Gulraiz Zafar is a Senior Financial Analyst and the Founder of WealthPilot. He has 10+ years of experience in personal finance, investment strategy, and wealth management.",
};

const AuthorPage = () => {
  const authorPosts = BlogData.slice(0, 6);

  const credentials = [
    {
      icon: "🎓",
      title: "Academic Background",
      detail: "B.Sc. in Economics & Finance — University of the Punjab, Lahore",
    },
    {
      icon: "📊",
      title: "Core Expertise",
      detail:
        "Personal Finance Strategy, Index Fund Investing, Debt Management, Credit Optimization, Mortgage Analysis",
    },
    {
      icon: "🏦",
      title: "Financial Research",
      detail:
        "10+ years analyzing U.S. and global markets, with a focus on retail investor strategies and YMYL-grade content accuracy",
    },
    {
      icon: "✍️",
      title: "Editorial Standards",
      detail:
        "Every article is cross-referenced with SEC, FINRA, Federal Reserve, IRS, and CFPB primary sources before publication",
    },
  ];

  const expertiseAreas = [
    "Index Fund Investing",
    "Credit Score Optimization",
    "Debt Consolidation",
    "Mortgage Strategy",
    "Retirement Planning",
    "Small Business Loans",
    "High-Yield Savings",
    "Tax Planning",
    "Insurance Analysis",
    "Passive Income",
  ];

  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden pb-20 pt-35 lg:pb-25 lg:pt-45">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
            {/* Photo */}
            <div className="relative shrink-0">
              <div className="h-56 w-56 overflow-hidden rounded-full border-4 border-primary shadow-solid-9 lg:h-72 lg:w-72">
                <Image
                  src="/images/team/founder.PNG"
                  alt="Gulraiz Zafar — Founder of WealthPilot"
                  width={288}
                  height={288}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              {/* Verified badge */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-bold text-white shadow-md whitespace-nowrap">
                ✓ Verified Author
              </div>
            </div>

            {/* Info */}
            <div className="w-full text-center lg:text-left">
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Founder &amp; Editor-in-Chief
              </span>
              <h1 className="mb-2 text-4xl font-bold text-black dark:text-white xl:text-sectiontitle2">
                Gulraiz Zafar
              </h1>
              <p className="mb-6 text-lg font-medium text-slate-500 dark:text-manatee">
                Senior Financial Analyst &amp; Investment Strategist
              </p>

              <p className="mb-6 max-w-2xl text-lg leading-relaxed">
                Gulraiz Zafar is the founder and lead writer of WealthPilot, a
                personal finance platform dedicated to providing data-driven,
                regulatory-backed financial guidance to everyday readers. With
                over a decade of hands-on experience studying personal finance
                systems, global markets, and U.S. financial regulations, he
                translates complex financial concepts into clear, actionable
                strategies.
              </p>

              <p className="mb-8 max-w-2xl leading-relaxed text-slate-600 dark:text-manatee">
                Gulraiz founded WealthPilot after identifying a critical
                information gap: millions of Americans are making high-stakes
                financial decisions — mortgages, retirement accounts, debt
                consolidation — without access to the same quality of analysis
                available to institutional investors. Every article on
                WealthPilot is cross-referenced against primary sources
                including the SEC, IRS, CFPB, Federal Reserve, and FINRA to
                meet the highest possible standard of accuracy.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 lg:justify-start">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">10+</p>
                  <p className="text-sm text-slate-500">Yrs. Experience</p>
                </div>
                <div className="h-12 w-px bg-stroke dark:bg-strokedark hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">30+</p>
                  <p className="text-sm text-slate-500">Guides Published</p>
                </div>
                <div className="h-12 w-px bg-stroke dark:bg-strokedark hidden sm:block" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">80+</p>
                  <p className="text-sm text-slate-500">Sources Cited</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Grid */}
      <section className="bg-slate-50 py-16 dark:bg-blacksection/30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <h2 className="mb-10 text-center text-2xl font-bold text-black dark:text-white">
            Qualifications &amp; Editorial Standards
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stroke bg-white p-6 shadow-solid-3 dark:border-strokedark dark:bg-black"
              >
                <p className="mb-3 text-3xl">{cred.icon}</p>
                <p className="mb-2 font-bold text-black dark:text-white">
                  {cred.title}
                </p>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-manatee">
                  {cred.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Tags */}
      <section className="py-16">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <h2 className="mb-8 text-center text-2xl font-bold text-black dark:text-white">
            Areas of Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {expertiseAreas.map((area, i) => (
              <span
                key={i}
                className="rounded-full border border-primary/30 bg-primary/5 px-5 py-2 text-sm font-medium text-primary dark:bg-primary/10"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Philosophy */}
      <section className="bg-blacksection py-16 dark:bg-blacksection/50">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Editorial Philosophy
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-manatee">
              "Financial journalism has a responsibility that entertainment media
              does not. When someone reads a guide on whether to choose a Roth
              IRA or a Traditional IRA, they may act on it. That means every
              number, every regulation, and every recommendation I publish must
              be verifiable, current, and honest — even when the honest answer
              is 'it depends on your situation.'"
            </p>
            <p className="font-semibold text-primary">
              — Gulraiz Zafar, Founder of WealthPilot
            </p>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <h2 className="mb-10 text-center text-2xl font-bold text-black dark:text-white">
            Recent Articles by Gulraiz
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {authorPosts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-stroke bg-white p-5 shadow-solid-3 transition-all hover:border-primary hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:border-primary"
              >
                <div className="mb-3 flex flex-wrap gap-2">
                  {post.tags?.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="mb-2 text-base font-bold text-black group-hover:text-primary dark:text-white dark:group-hover:text-primary line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-500">{post.publishedAt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 font-medium text-white transition-all hover:bg-primaryho"
            >
              View All Articles
              <svg width="18" height="18" viewBox="0 0 14 14" fill="currentColor">
                <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
