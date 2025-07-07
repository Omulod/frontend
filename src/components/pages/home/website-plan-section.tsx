"use client";
import SectionHeading from "@/components/common/section-heading";
import WebsitePlanDetails from "./website-plan-details";
import { useState } from "react";

const WebsitePlanSection = () => {
  const [currentSectionTitles, setCurrentSectionTitles] = useState({
    title: "Flexible website plans that grow with you",
    subtitle: "Website plan",
  });
  return (
    <section className="mt-32" id="pricing">
      <div className="">
        <div className="container">
          <div>
            <SectionHeading
              subtitle={currentSectionTitles.subtitle}
              title={currentSectionTitles.title}
              className="mb-4 max-w-[943px] "
            />
            <p>
              Launch or upgrade your site with full service — design,
              development, SEO, hosting, and unlimited edits — all included for
              one flat monthly fee.
            </p>
          </div>
        </div>
        <WebsitePlanDetails setCurrentSectionTitles={setCurrentSectionTitles} />
      </div>
    </section>
  );
};

export default WebsitePlanSection;
