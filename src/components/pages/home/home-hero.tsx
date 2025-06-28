import Button from "@/components/ui/button";
import Image from "next/image";
import HomeHeroStrategyBtn from "./home-hero-strategy-btn";
import Link from "next/link";

const reviewsPlatform = [
  {
    image: "/images/trustpilot.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/google.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/goodfirms.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/clutch.png",
    text: "4.9/5 (98 Reviews)",
  },
];

const HomeHero = () => {
  return (
    <section className="container lg:min-h-[700px] lg:h-[calc(100vh-188px)] grid grid-cols-1 lg:grid-cols-12 gap-8 md:pt-20 md:pb-16 pt-16 pb-16">
      <div className=" lg:col-span-7 my-auto">
        <h1>
          Global design & development agency helping you{" "}
          <span className="text-primary-500">simplify*</span> digital
          experiences
        </h1>

        <p className="py-6 md:py-10 max-w-[650px] lg:max-w-[804px] capitalize text-base xl:text-3xl italic font-light">
          Design. Build. Scale — Faster.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <HomeHeroStrategyBtn />
          <Link href="#works">
            <Button intent="secondary" className="px-14" modifier="outline">
              Explore our works
            </Button>
          </Link>
        </div>

        {/* review */}
        <div className="flex flex-wrap items-center gap-y-4 gap-x-14 mt-12">
          {reviewsPlatform.map((item) => (
            <div key={item.image}>
              <Image
                src={item.image}
                width={114}
                height={80}
                alt={item.text}
                className="md:w-28 md:h-16 w-20 h-12 object-scale-down"
              />
              <p className="text-neutral-50 md:text-base text-sm md:mt-1">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:col-span-5 my-auto">
        <Image
          src="/images/hero-image.png"
          width={666}
          height={666}
          alt="hero-image"
          //   className="animate-pulse"
        />
      </div>
    </section>
  );
};

export default HomeHero;
