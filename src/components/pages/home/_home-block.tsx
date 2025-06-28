import { ISiteSettings } from "@/types/common.types";
import ContactUsSection from "./contact-us-section";
import FaqSection from "./faq-section";
import FeaturedWorkSection from "./featured-work-section";
import HeroSlider from "./hero-slider";
import HomeHero from "./home-hero";
import IndustryExpertiseSection from "./industry-expertise-section";
import OurServices from "./our-services";
import TeamBehindSection from "./team-behind-section";
import TrustedSection from "./trusted-section";
import WebsitePlanSection from "./website-plan-section";

const HomeBlock = ({
  siteSettings,
}: {
  siteSettings: ISiteSettings | null;
}) => {
  return (
    <>
      <HomeHero siteSettings={siteSettings} />
      <HeroSlider />
      <TeamBehindSection />
      <div className="bg-gradient-to-b from-neutral-900 relative z-50 to-neutral-50/10">
        <TrustedSection />
        <IndustryExpertiseSection />
      </div>
      <FeaturedWorkSection />
      <OurServices />
      <FaqSection />
      <div className="bg-gradient-to-b from-neutral-50/10 via-neutral-900 to-neutral-50/10">
        <WebsitePlanSection />
        <ContactUsSection />
      </div>
    </>
  );
};

export default HomeBlock;
