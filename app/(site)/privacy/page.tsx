import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - WealthWise Finance Blog",
  description: "Our Privacy Policy outlines how WealthWise collects, uses, and protects your personal information when you visit our finance blog.",
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
            <p>Last updated: April 12, 2026</p>
            <p>
              At WealthWise, we prioritize your privacy. This Privacy Policy document contains types of information that is collected and recorded by WealthWise and how we use it.
            </p>
            
            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We collect personal information that you provide to us, such as your name and email address when you subscribe to our newsletter or contact us through our website. We also collect non-personal information through cookies and similar technologies to enhance your browsing experience.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
            </ul>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">3. Log Files</h2>
            <p>
              WealthWise follows a standard procedure of using log files. These files log visitors when they visit websites. Many hosting companies do this as part of hosting services' analytics.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">4. Cookies and Web Beacons</h2>
            <p>
              Like any other website, WealthWise uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Third Party Privacy Policies</h2>
            <p>
              WealthWise's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPage;
