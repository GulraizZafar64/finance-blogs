import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - WealthPilot",
  description: "Read our Terms of Service to understand the rules, guidelines, and legal agreements for using the WealthPilot Finance Blog.",
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
              Welcome to WealthPilot. By accessing or using our website, you agree to comply with and be bound by the following Terms of Service. Please read them carefully.
            </p>
            
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing WealthPilot, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. Financial Disclaimer</h2>
            <p>
              The content provided on WealthPilot is for informational and educational purposes only and should not be construed as professional financial, investment, or legal advice. We are not licensed financial advisors. Always seek the advice of a qualified professional before making any financial decisions.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on WealthPilot's website for personal, non-commercial transitory viewing only.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall WealthPilot or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on WealthPilot's website.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Revisions and Errata</h2>
            <p>
              The materials appearing on WealthPilot's website could include technical, typographical, or photographic errors. WealthPilot does not warrant that any of the materials on its website are accurate, complete, or current. WealthPilot may make changes to the materials contained on its website at any time without notice.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">6. Links</h2>
            <p>
              WealthPilot has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by WealthPilot of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">7. Site Terms of Use Modifications</h2>
            <p>
              WealthPilot may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which WealthPilot operates and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsPage;

