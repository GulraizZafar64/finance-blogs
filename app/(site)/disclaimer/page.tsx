import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | WealthPilot",
  description: "Financial disclaimer and terms of information for WealthPilot.",
};

const DisclaimerPage = () => {
  return (
    <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-10 text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Financial Disclaimer
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="mb-8 rounded-lg border-l-4 border-primary bg-slate-50 p-6 dark:bg-slate-800/50">
              <p className="text-lg font-semibold text-black dark:text-white">
                Important: The information provided on WealthPilot is for educational and informational purposes only and should not be construed as professional financial advice.
              </p>
            </div>

            <h2 className="text-xl font-bold mt-8 mb-4">1. Not Financial Advice</h2>
            <p className="mb-6">
              The content on WealthPilot (https://wealthpilot.blog) is provided for general informational purposes only. WealthPilot is not a registered investment, legal, or tax advisor or a broker/dealer. All information found here should be independently verified and confirmed. We do not provide personalized investment advice, and you should not rely on any information on this site as a substitute for consultation with a qualified professional.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">2. Accuracy of Information</h2>
            <p className="mb-6">
              While we strive to provide accurate and up-to-date information, the financial landscape changes rapidly. WealthPilot makes no representations as to the accuracy, completeness, suitability, or validity of any information on this site and will not be liable for any errors, omissions, or delays in this information or any losses, injuries, or damages arising from its display or use.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">3. Risk Disclosure</h2>
            <p className="mb-6">
              Investing involves risk, including the possible loss of principal. Past performance is not indicative of future results. Any investment decisions you make are solely your responsibility. It is recommended that you consult with a certified financial planner or qualified investment advisor before making any financial decisions.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">4. Affiliate & Advertising Disclosure</h2>
            <p className="mb-6">
              WealthPilot participates in various affiliate marketing programs, which means we may get paid commissions on products purchased through our links to retailer sites. We may also display advertisements from Google AdSense and other ad networks. These commissions and ad revenues help support the research and operation of this website at no additional cost to you. However, our editorial content is not influenced by these partnerships.
            </p>

            <h2 className="text-xl font-bold mt-8 mb-4">5. Use of Content</h2>
            <p className="mb-6">
              By using this website, you agree to take full responsibility for any outcomes resulting from the use of our information. You agree to hold WealthPilot, its founders, and contributors harmless from any and all liability or loss in connection with the content provided.
            </p>

            <div className="mt-12 border-t border-stroke pt-8 dark:border-strokedark">
              <p className="text-sm text-slate-500 italic">
                Last updated: April 18, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerPage;
