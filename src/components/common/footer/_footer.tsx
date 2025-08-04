import { getSiteSettings } from "@/app/page";
import FooterBottom from "./footer-bottom";
import FooterLinksSection from "./footer-links-section";
import FooterLogoSection from "./footer-logo-section";
import FooterAccordion from "./footer-accordion";
import { IServicesData } from "@/types/services.types";
import { IIndustry, ITechnologyData } from "@/types/common.types";
import axios from "axios";

const getServicesData = async (): Promise<IServicesData[] | null> => {
  try {
    const { data: serviceData } = await axios.get<IServicesData[]>(
      `${process.env.NEXT_PUBLIC_API_URL}/omulod/services`
    );
    return serviceData;
  } catch (error) {
    console.error("Error fetching services data:", error);
    return null;
  }
};

const getIndustriesData = async (): Promise<{ data: IIndustry[] } | null> => {
  try {
    const { data: industries } = await axios.get<{ data: IIndustry[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/omulod/industries`
    );
    return industries;
  } catch (error) {
    console.error("Error fetching industries data:", error);
    return null;
  }
};

const getTechnologiesData = async (): Promise<{
  data: ITechnologyData[];
} | null> => {
  try {
    const { data: technologies } = await axios.get<{ data: ITechnologyData[] }>(
      `${process.env.NEXT_PUBLIC_API_URL}/omulod/technology_categories`
    );
    return technologies;
  } catch (error) {
    console.error("Error fetching technologies data:", error);
    return null;
  }
};

const Footer = async () => {
  const siteSettings = await getSiteSettings();
  const servicesData = await getServicesData();
  const industriesData = await getIndustriesData();
  const technologiesData = await getTechnologiesData();

  return (
    <footer className="pt-10 md:pt-40">
      <FooterLogoSection
        our_agency_acounts={siteSettings?.footer_settings?.our_agency_acounts}
      />
      <FooterLinksSection
        footer_text={siteSettings?.footer_settings?.footer_text}
        socialLinks={siteSettings?.footer_settings?.footer_social_links}
        footer_address_locations={
          siteSettings?.footer_settings?.footer_address_locations
        }
        footer_menus={siteSettings?.footer_settings?.footer_menus}
      />
      <FooterAccordion
        siteSettings={siteSettings}
        servicesData={servicesData}
        industriesData={industriesData}
        technologiesData={technologiesData?.data || []}
      />
      <FooterBottom />
    </footer>
  );
};

export default Footer;
