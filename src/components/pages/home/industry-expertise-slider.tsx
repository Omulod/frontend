"use client";
import ExpertiseCard from "@/components/common/cards/expertise-card";
import { cn } from "@/helpers/cn";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const IndustryExpertiseSlider = ({ className }: { className?: string }) => {
  const sliderItems = [
    {
      title: "LMS & eLearning",
      subtitle:
        "Helping educators and training providers scale user experience.",
      keyPainPoints: [
        "Outdated UX and low learner engagement",
        "Complex course setup and content management",
        "Poor mobile accessibility and tracking",
      ],
      approach: [
        "Learner-first UX with gamified flows",
        "Easy-to-manage LMS interfaces",
        "Seamless mobile and SCORM-ready integration",
      ],
    },
    {
      title: "SaaS platforms",
      subtitle: "Scalable platforms for fast-growing product teams.",
      keyPainPoints: [
        "Slow loading times and low user engagement",
        "Complex product management and customer support",
        "Lack of mobile accessibility and tracking",
      ],
      approach: [
        "Fast-loading and easy-to-use interfaces",
        "Efficient product management and customer support",
        "Seamless mobile integration",
      ],
    },
    {
      title: "eCommerce platforms",
      subtitle: "E-commerce platforms for fast-growing product teams.",
      keyPainPoints: [
        "Slow loading times and low user engagement",
        "Complex product management and customer support",
        "Lack of mobile accessibility and tracking",
      ],
      approach: [
        "Fast-loading and easy-to-use interfaces",
        "Efficient product management and customer support",
        "Seamless mobile integration",
      ],
    },
  ];

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
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <ExpertiseCard {...item} />
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
