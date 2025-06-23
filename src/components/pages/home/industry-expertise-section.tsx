import SectionHeading from "@/components/common/section-heading";
import Button from "@/components/ui/button";
import ArrowLongLeftIcon from "@/components/ui/icons/arrow-long-left-icon";
import ArrowLongRightIcon from "@/components/ui/icons/arrow-long-right-icon";
import IndustryExpertiseSlider from "./industry-expertise-slider";
import Image from "next/image";

const IndustryExpertiseSection = () => {
  return (
    <div className="relative z-10 overflow-x-clip pb-28">
      <Image
        src="/images/hero-image.png"
        width={666}
        height={666}
        alt="hero-image"
        className="absolute -top-[40%] right-[15%]"
      />
      <div className="container flex items-center justify-between gap-4">
        <SectionHeading
          subtitle="OUR INDUSTRY EXPERTISE"
          title="Built for real challenges. Designed for growth."
          className="max-w-[900px] relative z-10"
        />

        <div className="hidden lg:flex items-center gap-4">
          <Button
            className="aspect-square !p-4"
            intent="secondary"
            id="industrySliderPrev"
          >
            <ArrowLongLeftIcon />
          </Button>
          <Button
            className="aspect-square !p-4"
            intent="secondary"
            id="industrySliderNext"
          >
            <ArrowLongRightIcon />
          </Button>
        </div>
      </div>

      <div className="container relative mt-14">
        <div className="lg:h-[470px]">
          <IndustryExpertiseSlider className="lg:absolute lg:w-screen left-0 top-0" />
        </div>
      </div>
    </div>
  );
};

export default IndustryExpertiseSection;
