"use client";
import "swiper/css";
import { cn } from "@/helpers/cn";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLongLeftIcon from "@/components/ui/icons/arrow-long-left-icon";
import ArrowLongRightIcon from "@/components/ui/icons/arrow-long-right-icon";
import Button from "@/components/ui/button";
import TitleImageCard from "@/components/common/cards/title-image-card";

const sliderItems = [
  {
    image: "/images/feature-image.png",
  },
  {
    image: "/images/feature-image.png",
  },
  {
    image: "/images/feature-image.png",
  },
];

const DevelopmentSlider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative h-full", className)}>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        onAfterInit={() => {
          //   setShowSliders(true);
        }}
        navigation={{
          prevEl: "#developmentSliderPrev",
          nextEl: "#developmentSliderNext",
        }}
        breakpoints={{
          1280: {
            slidesPerView: 1,
          },
        }}
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="border border-surface-border rounded-2xl">
              <TitleImageCard
                title="Technical Implementation"
                image={item.image}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-10 flex items-center gap-4 justify-center">
        <Button
          className="aspect-square !p-4"
          intent="secondary"
          id="developmentSliderPrev"
        >
          <ArrowLongLeftIcon />
        </Button>
        <Button
          className="aspect-square !p-4"
          intent="secondary"
          id="developmentSliderNext"
        >
          <ArrowLongRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default DevelopmentSlider;
