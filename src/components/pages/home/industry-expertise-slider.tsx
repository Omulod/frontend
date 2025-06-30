"use client";
import ExpertiseCard from "@/components/common/cards/expertise-card";
import { cn } from "@/helpers/cn";
import { IIndustryCategory } from "@/types/common.types";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const IndustryExpertiseSlider = ({
  industry_categories,
  className,
}: {
  industry_categories: IIndustryCategory[];
  className?: string;
}) => {
  return (
    <div className={cn("relative h-full", className)}>
      <Swiper
        slidesPerView={1}
        spaceBetween={32}
        modules={[Navigation]}
        loop={true}
        // autoplay={{
        //   delay: 2500,
        //   pauseOnMouseEnter: true,
        // }}
        onAfterInit={() => {
          //   setShowSliders(true);
        }}
        navigation={{
          prevEl: "#industrySliderPrev",
          nextEl: "#industrySliderNext",
        }}
        breakpoints={{
          1280: {
            slidesPerView: 2,
          },
          2560: {
            slidesPerView: 3,
          },
          3840: {
            slidesPerView: 4,
          },
          5120: {
            slidesPerView: 5,
          },
          7680: {
            slidesPerView: 7,
          },
        }}
        className="h-full"
      >
        {industry_categories.map((item, index) => (
          <SwiperSlide key={index}>
            <ExpertiseCard
              title={item?.industry_category_name}
              subtitle={item?.industry_category_moto}
              icon={item?.industry_category_icon}
              keyPainPoints={item?.key_plans?.map(
                (item) => item?.key_plan_name
              )}
              approach={item?.approaches?.map((item) => item?.approach_name)}
              className="cursor-grab"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="absolute right-4 -top-52 flex items-center gap-5">
        <button
          id="homeFeatureJobsPrev"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900 p-2 transition-all hover:bg-neutral-900 hover:text-neutral-0"
        >
          <ArrowLongLeftIcon size={20} />
        </button>
        <button
          id="homeFeatureJobsNext"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-900 p-2 transition-all hover:bg-neutral-900 hover:text-neutral-0"
        >
          <ArrowLongRightIcon size={20} />
        </button>
      </div> */}
    </div>
  );
};

export default IndustryExpertiseSlider;
