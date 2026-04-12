import { Metadata } from "next";
import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Finance Blog - Master Your Wealth and Investments",

  // other metadata
  description: "Your go-to source for financial insights, wealth management, and smart investing."
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Category />
      <Blog />
      <Feature />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
