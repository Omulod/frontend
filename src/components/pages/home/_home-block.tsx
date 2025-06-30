import {
  IFaqData,
  IIndustry,
  ISiteSettings,
  ITestimonial,
} from "@/types/common.types";
import { IServicesData } from "@/types/services.types";
import axios from "axios";
import ContactUsSection from "./contact-us-section";
import FaqSection from "./faq-section";
import HeroSlider from "./hero-slider";
import HomeHero from "./home-hero";
import IndustryExpertiseSection from "./industry-expertise-section";
import OurServices from "./our-services";
import TeamBehindSection from "./team-behind-section";
import TrustedSection from "./trusted-section";
import WebsitePlanSection from "./website-plan-section";

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

  const { data: testimonials } = await axios.get<ITestimonial[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/omulod/testimonials`
  );

  const { data: industries } = await axios.get<{ data: IIndustry[] }>(
    `${process.env.NEXT_PUBLIC_API_URL}/omulod/industries`
  );

  return (
    <>
      <HomeHero siteSettings={siteSettings} />
      <HeroSlider siteSettings={siteSettings} />
      <TeamBehindSection siteSettings={siteSettings} />
      <div className="bg-surface-black-01">
        <TrustedSection
          testimonials={testimonials}
          siteSettings={siteSettings}
        />
        <IndustryExpertiseSection industry={industries?.data?.[0]} />
      </div>
      {/* <FeaturedWorkSection /> */}
      <OurServices servicesData={serviceData} />
      <FaqSection
        faqsData={faqsData?.data}
        whatsAppLink={
          siteSettings?.footer_settings.footer_social_links.find(
            (item) => item.obc_social_link_title == "WhatsApp"
          )?.obc_social_link_url
        }
      />
      <div className="bg-surface-black-01">
        <WebsitePlanSection />
        <ContactUsSection />
      </div>
    </>
  );
};

export default HomeBlock;
