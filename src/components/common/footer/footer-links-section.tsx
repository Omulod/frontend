import Button from "@/components/ui/button";
import FacebookIcon from "@/components/ui/icons/facebook-icon";
import FigmaIcon from "@/components/ui/icons/figma-icon";
import LinkedinIcon from "@/components/ui/icons/linkedin-icon";
import WhatsappIcon from "@/components/ui/icons/whatsapp-icon";
import XIcon from "@/components/ui/icons/x-icon";
import YoutubeIcon from "@/components/ui/icons/youtube-icon";
import Image from "next/image";
import Link from "next/link";

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

const FooterLinksSection = () => {
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
        <div className="text-lg mt-8 mb-10">
          <p>Design. Develop. Deliver.</p>
          <p>
            Simplifying digital products for startups & <br /> enterprises.
          </p>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <Link href="/">
            <Button intent="secondary" className="!p-2.5">
              <FacebookIcon size={32} />
            </Button>
          </Link>
          <Link href="/">
            <Button intent="secondary" className="!p-2.5">
              <XIcon size={32} />
            </Button>
          </Link>
          <Link href="/">
            <Button intent="secondary" className="!p-2.5">
              <WhatsappIcon size={32} />
            </Button>
          </Link>
          <Link href="/">
            <Button intent="secondary" className="!p-2.5">
              <LinkedinIcon size={32} />
            </Button>
          </Link>
          <Link href="/">
            <Button intent="secondary" className="!p-2.5">
              <YoutubeIcon size={32} />
            </Button>
          </Link>
        </div>

        <Button intent="secondary" size="large" className="w-full">
          <div className="flex items-center justify-between gap-4">
            <span>Company deck</span>
            <FigmaIcon />
          </div>
        </Button>
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
          <div className="mt-6">
            <Image
              src="/images/footer/vector-2.png"
              width={30}
              height={30}
              alt="vector-1"
            />
            <p className="mt-4 text-lg">London</p>
            <p className="my-1">
              19-21 Mortimer St, London W1T 3JE, United Kingdom
            </p>
            <p>+44 7438 283469</p>
          </div>
          <div className="mt-6">
            <Image
              src="/images/footer/vector-1.png"
              width={30}
              height={30}
              alt="vector-1"
            />
            <p className="mt-4 text-lg">Bangladesh</p>
            <p className="my-1">
              19-21 Mortimer St, London W1T 3JE, United Kingdom
            </p>
            <p>+880 1615966703</p>
          </div>

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
