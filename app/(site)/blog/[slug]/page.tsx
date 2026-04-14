import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import BlogData from "@/components/Blog/blogData";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BlogData.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: `${post.title} | WealthPilot`,
    description: post.metadata,
    openGraph: {
      title: post.title,
      description: post.metadata,
      type: "article",
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.mainImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metadata,
      images: [post.mainImage],
    },
  };
}

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const post = BlogData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: post.mainImage,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || "Gulraiz Zafar",
      url: "https://wealthpilot.blog/about",
    },
    publisher: {
      "@type": "Organization",
      name: "WealthPilot",
      logo: {
        "@type": "ImageObject",
        url: "https://wealthpilot.blog/images/logo/logo.png",
      },
    },
    description: post.metadata,
  };

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="pt-35 pb-20 lg:pt-45 lg:pb-25 xl:pt-50 xl:pb-30">
        <div className="max-w-c-1390 mx-auto px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-3.5">
                <form>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="border-stroke shadow-solid-12 focus:border-primary dark:border-strokedark dark:focus:border-primary w-full rounded-lg border px-6 py-4 focus:outline-hidden dark:bg-black dark:shadow-none"
                    />

                    <button
                      className="absolute top-0 right-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="hover:fill-primary dark:hover:fill-primary fill-black transition-all duration-300 dark:fill-white"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection mb-10 rounded-md border bg-white p-9">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Categories
                </h4>

                <ul>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="/blog?category=Loans">Loans</a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="/blog?category=Credit Cards">Credit Cards</a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="/blog?category=Personal Finance">
                      Personal Finance
                    </a>
                  </li>
                  <li className="hover:text-primary mb-3 transition-all duration-300 last:mb-0">
                    <a href="/blog?category=Investing">Investing</a>
                  </li>
                </ul>
              </div>

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top border-stroke shadow-solid-13 dark:border-strokedark dark:bg-blacksection rounded-md border bg-white p-7.5 md:p-10">
                <div className="mb-10 w-full overflow-hidden">
                  <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                    <Image
                      src={post.mainImage}
                      alt={post.title}
                      fill
                      priority
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h1 className="2xl:text-sectiontitle2 mt-11 mb-5 text-3xl font-semibold text-black dark:text-white">
                  {post.title}
                </h1>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    {post.author?.name || "Gulraiz Zafar"}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On: {post.publishedAt || "April 12, 2026"}
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category:
                    </span>
                    {post.tags?.[0] || "Financial Advice"}
                  </li>
                </ul>

                <div className="blog-details prose prose-slate dark:prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: post.body || "" }} />
                </div>

                <div className="border-primary/20 bg-primary/5 dark:border-primary/30 mt-10 rounded-2xl border p-6 text-sm text-slate-700 dark:bg-white/5 dark:text-slate-200">
                  <p className="font-semibold text-black dark:text-white">
                    Financial Disclaimer
                  </p>
                  <p>
                    The content on this page is for educational purposes only
                    and is not financial advice. Always consult a licensed
                    financial advisor before making any investment, credit,
                    insurance, or loan decision.
                  </p>
                </div>

                {/* Author Bio Section */}
                <div className="border-stroke dark:border-strokedark mt-12.5 flex flex-col items-center gap-6 rounded-xl border bg-slate-50 p-6 md:flex-row md:items-start md:p-10 dark:bg-black">
                  <div className="border-primary relative h-24 w-24 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src="/images/team/founder.PNG"
                      alt="Gulraiz Zafar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-black dark:text-white">
                      Gulraiz Zafar
                    </h4>
                    <p className="text-primary mb-4 text-sm font-medium">
                      Senior Financial Analyst & Investment Strategist
                    </p>
                    <p className="text-base leading-relaxed">
                      Gulraiz Zafar is a seasoned financial analyst with over a
                      decade of experience in personal finance, stock market
                      analysis, and wealth management. He specializes in helping
                      individuals build sustainable passive income streams and
                      optimize their investment portfolios for long-term growth.
                    </p>
                  </div>
                </div>

                <SharePost post={post} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
