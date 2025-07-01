import SectionHeading from "@/components/common/section-heading";
import WebsitePlanDetails from "./website-plan-details";

const WebsitePlanSection = () => {
  return (
    <section className="mt-32" id="pricing">
      <div className="">
        <div className="container">
          <div>
            <SectionHeading
              subtitle="Website plan"
              title="Flexible website plans that grow with you"
              className="mb-4 max-w-[943px] "
            />
            <p>
              Launch or upgrade your site with full service — design,
              development, SEO, hosting, and unlimited edits — all included for
              one flat monthly fee.
            </p>
          </div>
        </div>
        <WebsitePlanDetails />
      </div>
    </section>
  );
};

export default WebsitePlanSection;
