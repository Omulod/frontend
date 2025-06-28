import SectionHeading from "@/components/common/section-heading";
import Button from "@/components/ui/button";
import ArrowLongLeftIcon from "@/components/ui/icons/arrow-long-left-icon";
import ArrowLongRightIcon from "@/components/ui/icons/arrow-long-right-icon";
import TrustedSectionSlider from "./trusted-section-slider";
import OmulodIcon from "@/components/ui/icons/omulod-icon";
import Image from "next/image";

const reviews = [
  {
    image: "/images/google.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/google.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/google.png",
    text: "4.9/5 (98 Reviews)",
  },
  {
    image: "/images/google.png",
    text: "4.9/5 (98 Reviews)",
  },
];

const TrustedSection = () => {
  return (
    <section className="py-32">
      <div className="container flex items-center justify-between gap-4">
        <SectionHeading
          subtitle="TRUSTED BY FOUNDERS, LOVED BY TEAMS"
          title="4.9 Avg Rating from 300+ Projects"
        />

        <div className="hidden lg:flex items-center gap-4">
          <Button
            className="aspect-square !p-4"
            intent="secondary"
            id="trustedSliderPrev"
          >
            <ArrowLongLeftIcon />
          </Button>
          <Button
            className="aspect-square !p-4"
            intent="secondary"
            id="trustedSliderNext"
          >
            <ArrowLongRightIcon />
          </Button>
        </div>
      </div>

      <div className="overflow-clip">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-y-10 mt-14">
          <div className="border lg:border-r-0 border-surface-border rounded-3xl lg:rounded-r-none p-8 col-span-1 lg:col-span-4 xl:col-span-3">
            <h4>Reviews</h4>
            <p className="mt-2 text-neutral-40">
              Highly rated across multiple platforms
            </p>
            <div className="flex flex-col gap-6 mt-8">
              {reviews.map((item, index) => (
                <Button intent="secondary" className="" key={index}>
                  <div className="flex items-center gap-2 justify-between">
                    <Image
                      src={item.image}
                      width={60}
                      height={30}
                      alt="logos"
                    />
                    <div className="flex items-center gap-1">
                      <OmulodIcon size={16} />
                      <p className="font-normal">{item.text}</p>
                    </div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="col-span-1 lg:col-span-8 xl:col-span-9 relative z-[100]">
            <div className="border border-surface-border h-full lg:absolute left-0 top-0 lg:w-screen">
              <TrustedSectionSlider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
