import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - WealthWiseHub",
  description: "Read our Terms of Service to understand the rules, guidelines, and legal agreements for using the WealthWiseHub Finance Blog.",
};

const TermsPage = () => {
  return (
    <section className="pb-20 pt-40 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            Terms of Service
          </h1>
          <div className="text-body-color dark:text-body-color-dark space-y-6">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            <p>
              Welcome to WealthWiseHub. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
            </p>
            
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing WealthWiseHub, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. Financial Disclaimer</h2>
            <p>
              The content provided on WealthWiseHub is for informational and educational purposes only and should not be construed as professional financial, investment, or legal advice. We are not licensed financial advisors. Always seek the advice of a qualified professional before making any financial decisions.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on WealthWiseHub's website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall WealthWiseHub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on WealthWiseHub's website.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which WealthWiseHub operates and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;
