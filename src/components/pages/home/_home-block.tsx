import { IFaqData, ISiteSettings } from "@/types/common.types";
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
import axios from "axios";
import { IServicesData } from "@/types/services.types";

const HomeBlock = async ({
  siteSettings,
}: {
  siteSettings: ISiteSettings | null;
}) => {
  const { data: serviceData } = await axios.get<IServicesData[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/omulod/services`
  );

  const { data: faqsData } = await axios.get<{ data: IFaqData[] }>(
    `${process.env.NEXT_PUBLIC_API_URL}/omulod/faqs`
  );

  return (
    <>
      <HomeHero siteSettings={siteSettings} />
      <HeroSlider />
      <TeamBehindSection siteSettings={siteSettings} />
      <div className="bg-surface-black-01">
        <TrustedSection />
        <IndustryExpertiseSection />
      </div>
      <FeaturedWorkSection />
      <OurServices servicesData={serviceData} />
      <FaqSection faqsData={faqsData?.data} />
      <div className="bg-surface-black-01">
        <WebsitePlanSection />
        <ContactUsSection />
      </div>
    </>
  );
};

export default HomeBlock;
