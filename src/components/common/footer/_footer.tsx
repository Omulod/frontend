import { getSiteSettings } from "@/app/page";
import FooterBottom from "./footer-bottom";
import FooterLinksSection from "./footer-links-section";
import FooterLogoSection from "./footer-logo-section";

const Footer = async () => {
  const siteSettings = await getSiteSettings();

  return (
    <footer className="container pt-20 md:pt-40">
      <FooterLogoSection
        our_agency_acounts={siteSettings?.footer_settings?.our_agency_acounts}
      />
      <FooterLinksSection
        footer_text={siteSettings?.footer_settings?.footer_text}
        socialLinks={siteSettings?.footer_settings?.footer_social_links}
        footer_address_locations={
          siteSettings?.footer_settings?.footer_address_locations
        }
      />
      {/* <FooterAccordion /> */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
