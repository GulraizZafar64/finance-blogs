import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - WealthPilot",
  description: "Get in touch with the WealthPilot team for any inquiries, feedback, or support regarding our financial advice and content.",
};

const ContactPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default ContactPage;
