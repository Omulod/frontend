import SectionHeading from "@/components/common/section-heading";
import WebsitePlanDetails from "./website-plan-details";

const WebsitePlanSection = () => {
  return (
    <section className="mt-32" id="pricing">
      <div className="container">
        <div className="max-w-[943px]">
          <SectionHeading
            subtitle="Website plan"
            title="Flexible website plans that grow with you"
            className="mb-4"
          />
          <p>
            Launch or upgrade your site with full service — design, development,
            SEO, hosting, and unlimited edits — all included for one flat
            monthly fee.
          </p>
        </div>
        <WebsitePlanDetails />
      </div>
    </section>
  );
};

export default WebsitePlanSection;
