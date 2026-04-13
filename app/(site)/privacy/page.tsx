import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - WealthWiseHub",
  description: "Our Privacy Policy outlines how WealthWiseHub collects, uses, and protects your personal information when you visit our finance blog.",
};

const PrivacyPage = () => {
  return (
    <section className="pb-20 pt-40 lg:pb-25 xl:pb-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="prose prose-slate dark:prose-invert mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            Privacy Policy
          </h1>
          <div className="text-body-color dark:text-body-color-dark space-y-6">
            <p>Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>
            <p>
              At WealthWiseHub, accessible from https://wealthwisehub.vercel.app, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by WealthWiseHub and how we use it.
            </p>
            
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect personal information that you provide to us, such as your name and email address when you subscribe to our newsletter or contact us through our website. We also collect non-personal information through cookies and similar technologies.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. Google DoubleClick DART Cookie</h2>
            <p>
              Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads" className="text-primary underline">https://policies.google.com/technologies/ads</a>
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Our Advertising Partners</h2>
            <p>
              Some of advertisers on our site may use cookies and web beacons. Our advertising partners include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google AdSense</li>
            </ul>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Privacy Policies</h2>
            <p>
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on WealthWiseHub, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Third Party Privacy Policies</h2>
            <p>
              WealthWiseHub's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">6. Consent</h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
