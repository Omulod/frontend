import FooterBottom from "./footer-bottom";
import FooterLinksSection from "./footer-links-section";

const Footer = () => {
  return (
    <footer className="container pt-20 md:pt-40">
      {/* <FooterLogoSection /> */}
      <FooterLinksSection />
      {/* <FooterAccordion /> */}
      <FooterBottom />
    </footer>
  );
};

export default Footer;
