import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ISiteSettings } from "@/types/common.types";
import HomeHeroImage from "./home-hero-image";
import CalButton from "@/components/ui/cal-button";

const HomeHero = ({ siteSettings }: { siteSettings: ISiteSettings | null }) => {
  const reviews = siteSettings?.review_items || [];

  return (
    <div className="overflow-x-clip">
      <section className="container lg:min-h-[700px] lg:h-[calc(100vh-188px)] grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 md:py-16">
        <div className=" lg:col-span-7 my-auto order-2 md:order-1">
          <h1 className="text-center md:text-left">
            Global design & development agency helping you{" "}
            <span className="text-primary-500">simplify*</span> digital
            experiences
          </h1>

          <p className="py-6 md:py-10 max-w-[650px] lg:max-w-[804px] capitalize text-lg xl:text-3xl italic font-light text-center md:text-left">
            {siteSettings?.banner_subtitle || "Design. Build. Scale — Faster."}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <CalButton
              className="w-full md:w-auto"
              buttonText="Book a free strategy call"
              size="large"
            />
            <Link href="#works" className="w-full md:w-auto">
              <Button
                intent="secondary"
                size="large"
                className="px-14 w-full md:w-auto"
                modifier="outline"
              >
                Explore our works
              </Button>
            </Link>
          </div>

          {/* review */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-y-4 gap-x-14 mt-12">
            {reviews.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.obc_review_logo || "/images/trustpilot.png"}
                  width={114}
                  height={80}
                  alt={item.obc_review_title}
                  className="md:w-28 md:h-16 w-20 h-12 object-scale-down min-w-[112px]"
                />
                <p className="text-neutral-50 md:text-base text-sm md:mt-1">
                  {item.obc_review_average_rating} ({item.obc_review_number})
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 my-auto order-1 md:order-2">
          <HomeHeroImage />
        </div>
      </section>
    </div>
  );
};

export default HomeHero;
