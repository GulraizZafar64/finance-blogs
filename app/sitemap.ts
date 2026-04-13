import { MetadataRoute } from "next";
import BlogData from "@/components/Blog/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://wealthwisehub.vercel.app";

  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const blogPosts = BlogData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt || new Date()).toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}

