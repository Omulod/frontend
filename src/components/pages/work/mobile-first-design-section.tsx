"use client";
import "swiper/css";
import { cn } from "@/helpers/cn";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLongLeftIcon from "@/components/ui/icons/arrow-long-left-icon";
import ArrowLongRightIcon from "@/components/ui/icons/arrow-long-right-icon";
import Button from "@/components/ui/button";
import Image from "next/image";

const sliderItems = [
  {
    images: [
      "/images/mobile-image.png",
      "/images/mobile-image.png",
      "/images/mobile-image.png",
      "/images/mobile-image.png",
    ],
  },
  {
    images: [
      "/images/mobile-image.png",
      "/images/mobile-image.png",
      "/images/mobile-image.png",
      "/images/mobile-image.png",
    ],
  },
  {
    images: [
      "/images/mobile-image.png",
      "/images/mobile-image.png",
      "/images/mobile-image.png",
      "/images/mobile-image.png",
    ],
  },
];

const MobileFirstDesignSection = () => {
  return (
    <div id="mobile-first-design">
      <h3 className="uppercase">Mobile-First Design</h3>
      <div className="mt-8 rounded-3xl border border-neutral-500 p-8">
        <div className={cn("relative h-full")}>
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
              prevEl: "#mobileFirstSliderPrev",
              nextEl: "#mobileFirstSliderNext",
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
                <div className="flex items-center gap-4">
                  {item.images.slice(0, 4).map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      height={575}
                      width={265}
                      alt="mobile-image"
                      className="w-full rounded-3xl"
                    />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-10 flex items-center gap-4 justify-center">
            <Button
              className="aspect-square !p-4"
              intent="secondary"
              id="mobileFirstSliderPrev"
            >
              <ArrowLongLeftIcon />
            </Button>
            <Button
              className="aspect-square !p-4"
              intent="secondary"
              id="mobileFirstSliderNext"
            >
              <ArrowLongRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFirstDesignSection;
