import React from "react";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - WealthWise Finance Blog",
  description: "Learn more about WealthWise, your trusted partner in financial success. Our expert team provides actionable advice for investing, personal finance, and wealth growth.",
};

const AboutPage = () => {
  return (
    <div className="pb-20 pt-40">
      <About />
    </div>
  );
};

export default AboutPage;
