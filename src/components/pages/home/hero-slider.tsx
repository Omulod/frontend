import { ISiteSettings } from "@/types/common.types";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const HeroSlider = ({
  siteSettings,
}: {
  siteSettings: ISiteSettings | null;
}) => {
  const clientLogos = siteSettings?.client_logos || [];

  return (
    <Marquee autoFill className="py-4 md:py-8 bg-neutral-800">
      {clientLogos.map((item, index) => (
        <div key={index} className="mx-8 md:mx-16">
          <Image
            src={item?.obc_client_logo_image}
            width={114}
            height={32}
            alt="logos"
            className="w-32 h-8 object-scale-down"
          />
        </div>
      ))}
    </Marquee>
  );
};

export default HeroSlider;
