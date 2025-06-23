import Image from "next/image";

const footerLogos = [
  {
    image: "/images/trustpilot.png",
  },
  {
    image: "/images/google.png",
  },
  {
    image: "/images/goodfirms.png",
  },
  {
    image: "/images/clutch.png",
  },
  {
    image: "/images/google.png",
  },
  {
    image: "/images/goodfirms.png",
  },
  {
    image: "/images/clutch.png",
  },
];

const FooterLogoSection = () => {
  return (
    <div className="flex items-center justify-center gap-6 flex-wrap lg:flex-nowrap">
      {footerLogos.map((item, index) => (
        <div
          key={index}
          className="rounded-[50px] border border-neutral-300 md:px-6 py-2 px-4 xl:px-10 md:py-3 xl:py-5"
        >
          <Image
            src={item.image}
            width={144}
            height={80}
            alt="logos"
            className="w-36 h-8 object-scale-down"
          />
        </div>
      ))}
    </div>
  );
};

export default FooterLogoSection;
