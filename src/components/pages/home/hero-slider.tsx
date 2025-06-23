import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  {
    image: "/images/home-sliders/logo-1.png",
  },
  {
    image: "/images/home-sliders/logo-2.png",
  },
  {
    image: "/images/home-sliders/logo-1.png",
  },
  {
    image: "/images/home-sliders/logo-2.png",
  },
  {
    image: "/images/home-sliders/logo-1.png",
  },
  {
    image: "/images/home-sliders/logo-2.png",
  },
  {
    image: "/images/home-sliders/logo-1.png",
  },
  {
    image: "/images/home-sliders/logo-2.png",
  },
  {
    image: "/images/home-sliders/logo-1.png",
  },
  {
    image: "/images/home-sliders/logo-2.png",
  },
  {
    image: "/images/home-sliders/logo-1.png",
  },
  {
    image: "/images/home-sliders/logo-2.png",
  },
];

const HeroSlider = () => {
  return (
    <Marquee autoFill className="py-8 bg-neutral-800">
      {logos.map((item, index) => (
        <div key={index} className="mx-8 md:mx-16">
          <Image
            src={item.image}
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
