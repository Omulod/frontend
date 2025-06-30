import Button from "@/components/ui/button";
import Image from "next/image";
import HomeHeroStrategyBtn from "./home-hero-strategy-btn";
import Link from "next/link";
import { ISiteSettings } from "@/types/common.types";

const HomeHero = ({ siteSettings }: { siteSettings: ISiteSettings | null }) => {
  const reviews = siteSettings?.review_items || [];

  return (
    <section className="container lg:min-h-[700px] lg:h-[calc(100vh-188px)] grid grid-cols-1 lg:grid-cols-12 gap-8 py-16">
      <div className=" lg:col-span-7 my-auto">
        <h1>
          Global design & development agency helping you{" "}
          <span className="text-primary-500">simplify*</span> digital
          experiences
        </h1>

        <p className="py-6 md:py-10 max-w-[650px] lg:max-w-[804px] capitalize text-lg xl:text-3xl italic font-light">
          {siteSettings?.banner_subtitle || "Design. Build. Scale — Faster."}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <HomeHeroStrategyBtn />
          <Link href="#works">
            <Button
              intent="secondary"
              size="large"
              className="px-14"
              modifier="outline"
            >
              Explore our works
            </Button>
          </Link>
        </div>

        {/* review */}
        <div className="flex flex-wrap items-center gap-y-4 gap-x-14 mt-12">
          {reviews.map((item, index) => (
            <div key={index}>
              <Image
                src={"/images/trustpilot.png"}
                width={114}
                height={80}
                alt={item.obc_review_title}
                className="md:w-28 md:h-16 w-20 h-12 object-scale-down"
              />
              <p className="text-neutral-50 md:text-base text-sm md:mt-1">
                {item.obc_review_average_rating} ({item.obc_review_number})
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
