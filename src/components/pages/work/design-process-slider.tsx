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
    beforeImage: "/images/feature-image.png",
    afterimage: "/images/feature-image.png",
  },
  {
    beforeImage: "/images/feature-image.png",
    afterimage: "/images/feature-image.png",
  },
  {
    beforeImage: "/images/feature-image.png",
    afterimage: "/images/feature-image.png",
  },
];

const DesignProcessSlider = ({ className }: { className?: string }) => {
  return (
    <div>
      <div className={cn("relative h-full", className)}>
        <Swiper
          slidesPerView={5}
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
            prevEl: "#designSliderPrev",
            nextEl: "#designSliderNext",
          }}
          breakpoints={{
            1280: {
              slidesPerView: 1,
            },
          }}
          //   className="h-full"
        >
          {sliderItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="border border-neutral-500 grid grid-cols-2 rounded-2xl">
                <TitleImageCard
                  title="Before - Original Design"
                  image={item.beforeImage}
                  className="border-r border-neutral-500"
                />
                <TitleImageCard
                  title="After - New Design"
                  image={item.afterimage}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 flex items-center gap-4 justify-center">
          <Button
            className="aspect-square !p-4"
            intent="secondary"
            id="designSliderPrev"
          >
            <ArrowLongLeftIcon />
          </Button>
          <Button
            className="aspect-square !p-4"
            intent="secondary"
            id="designSliderNext"
          >
            <ArrowLongRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSlider;
