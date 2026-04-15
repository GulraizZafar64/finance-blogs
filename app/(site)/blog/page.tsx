import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Financial Insights & Guides",
  description: "Browse our latest articles on personal finance, investing strategies, cryptocurrency, and expert wealth management tips.",
};

const BlogPage = async ({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) => {
  const category = (await searchParams).category;
  const search = (await searchParams).search;

  let filteredBlogs = [...BlogData].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0;
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0;
    return dateB - dateA;
  });

  if (category) {
    filteredBlogs = filteredBlogs.filter((blog) =>
      blog.tags?.some(
        (tag) => tag.toLowerCase().replace(/\s+/g, "-") === category,
      ),
    );
  }

  if (search) {
    const searchTerm = search.toLowerCase();
    filteredBlogs = filteredBlogs.filter((blog) => {
      const content = [
        blog.title,
        blog.metadata,
        blog.tags?.join(" "),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return content.includes(searchTerm);
    });
  }

  return (
    <>
      <section className="pb-20 pt-25 lg:pb-25 lg:pt-30 xl:pb-30 xl:pt-35">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
          {category && (
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold text-black dark:text-white md:text-4xl">
                Category: <span className="capitalize text-primary">{category.replace("-", " ")}</span>
              </h1>
              <p className="mt-4 text-lg">
                Browsing our latest articles in {category.replace("-", " ")}
              </p>
            </div>
          )}
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((post, key) => (
                <BlogItem key={key} blog={post} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <h3 className="text-2xl font-semibold">No posts found in this category.</h3>
                <a href="/blog" className="mt-4 inline-block text-primary hover:underline">View all posts</a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
