import Button from "@/components/ui/button";
import {
  IFooterAddressLocation,
  IFooterSocialLink,
} from "@/types/common.types";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";

const importantLinks = [
  {
    title: "Company",
    links: [
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Our Team",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Blog",
        href: "#",
      },
    ],
  },
  {
    title: "Services",
    links: [
      {
        title: "UI/UX Design",
        href: "#",
      },
      {
        title: "Web & App Development",
        href: "#",
      },
      {
        title: "Product Strategy",
        href: "#",
      },
      {
        title: "No-Code",
        href: "#",
      },
      {
        title: "View All Services",
        href: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        title: "Case Studies",
        href: "#",
      },
      {
        title: "FAQ",
        href: "#",
      },
      {
        title: "Free Tools & Downloads",
        href: "#",
      },
      {
        title: "Smart Calculator",
        href: "#",
      },
      {
        title: "Schedule a Call",
        href: "#",
      },
    ],
  },
];

const FooterLinksSection = ({
  footer_text,
  socialLinks,
  footer_address_locations,
}: {
  footer_text?: string;
  socialLinks?: IFooterSocialLink[];
  footer_address_locations?: IFooterAddressLocation[];
}) => {
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 py-14">
      <div className="lg:col-span-4 max-w-[386px]">
        <Link href="/">
          <Image
            src="/images/omulod-logo-white.svg"
            width={152}
            height={32}
            alt="omulod-logo-white"
          />
        </Link>
        <div className="text-lg mt-8 mb-10">{parse(footer_text || "")}</div>

        <div className="flex items-center gap-4 mb-10">
          {socialLinks?.map((item, index) => (
            <Link key={index} href={item?.obc_social_link_url} target="_blank">
              <Button intent="secondary" className="!p-2.5">
                <Image
                  src={item?.obc_social_link_icon}
                  width={32}
                  height={32}
                  alt="social-icon"
                  className="h-8 w-8 object-cover"
                />
              </Button>
            </Link>
          ))}
        </div>

        {/* <Button intent="secondary" size="large" className="w-full">
          <div className="flex items-center justify-between gap-4">
            <span>Company deck</span>
            <FigmaIcon />
          </div>
        </Button> */}
      </div>
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-5 gap-4">
        {importantLinks.map((item) => (
          <div key={item.title}>
            <h6 className="uppercase text-primary-500 font-semibold">
              {item.title}
            </h6>
            <ul className="mt-8 flex flex-col gap-6">
              {item.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2">
          <h6 className="text-primary-500 font-semibold uppercase">
            Locations
          </h6>

          {footer_address_locations?.map((item, index) => (
            <div key={index} className="mt-6">
              <Image
                src={item?.obc_address_icon}
                width={30}
                height={30}
                alt="vector-1"
              />
              <p className="mt-4 text-lg">{item?.obc_address_location}</p>
              <p className="my-1">{item?.obc_address_city}</p>
              {item?.obc_address_phone_numbers.map((phone, index) => (
                <p key={index}>{phone.obc_phone_number}</p>
              ))}
            </div>
          ))}

          <div className="mt-8">
            <h6 className="text-primary-500 font-semibold uppercase">
              our latest updates
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinksSection;
