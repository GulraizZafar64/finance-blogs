import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - WealthPilot",
  description: "Our Privacy Policy outlines how WealthPilot collects, uses, and protects your personal information when you visit our finance blog.",
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
              At WealthPilot, accessible from https://wealthpilot.blog, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by WealthPilot and how we use it.
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
              Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on WealthPilot, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">5. Third Party Privacy Policies</h2>
            <p>
              WealthPilot's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">6. Cookies and Web Beacons</h2>
            <p>
              Like any other website, WealthPilot uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">7. CCPAPrivacy Rights (Do Not Sell My Personal Information)</h2>
            <p>
              Under the CCPA, among other rights, California consumers have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">8. GDPR Data Protection Rights</h2>
            <p>
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
            </ul>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">9. Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. WealthPilot does not knowingly collect any Personal Identifiable Information from children under the age of 13.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at contact@wealthpilot.blog.
            </p>

            <h2 className="text-xl font-semibold text-black dark:text-white mt-8 mb-4">11. Consent</h2>
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

