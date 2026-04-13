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
  title: "WealthWiseHub | Expert Financial Insights & Wealth Management",
  description: "WealthWiseHub provides professional insights on investing, crypto, insurance, and personal finance to empower your financial journey.",
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
