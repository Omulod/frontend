import { ISiteSettings, ITechnologyData } from "@/types/common.types";
import { IServicesData } from "@/types/services.types";
import { IIndustry } from "@/types/common.types";
import ServicesFooterAccordion from "./services-footer-accordion";

const FooterAccordion = ({
  siteSettings,
  servicesData,
  industriesData,
  technologiesData,
}: {
  siteSettings: ISiteSettings | null;
  servicesData: IServicesData[] | null;
  industriesData: { data: IIndustry[] } | null;
  technologiesData: ITechnologyData[] | null;
}) => {
  return (
    <ServicesFooterAccordion
      servicesData={servicesData}
      industriesData={industriesData}
      technologiesData={technologiesData}
      siteSettings={siteSettings}
    />
  );
};

export default FooterAccordion;
