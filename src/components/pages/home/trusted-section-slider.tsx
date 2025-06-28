"use client";
import ReviewCard from "@/components/common/cards/review-card";
import { cn } from "@/helpers/cn";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TrustedSectionSlider = ({ className }: { className?: string }) => {
  const sliderItems = [
    {
      companyLogo: "/images/goodfirms.png",
      description:
        "“We’re really pleased with how the site turned out. We’re already seeing the impact of omulod’s work  ",
      position: "Founder and CEO",
      personImage: "/images/goodfirms.png",
      name: "Kelli Fairbrother , xigxag",
    },
    {
      companyLogo: "/images/google.png",
      description:
        "“We’re really pleased with how the site turned out. We’re already seeing the impact of omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase.” omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase. omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase. omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase.",
      name: "Kelli Fairbrother , xigxag",
      position: "Founder and CEO",
      personImage: "/images/google.png",
    },
    {
      companyLogo: "/images/clutch.png",
      description:
        "“We’re really pleased with how the site turned out. We’re already seeing the impact of omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase.”",
      name: "Kelli Fairbrother , xigxag",
      position: "Founder and CEO",
      personImage: "/images/clutch.png",
    },
    {
      companyLogo: "/images/goodfirms.png",
      description:
        "“We’re really pleased with how the site turned out. We’re already seeing the impact of omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase.”",
      name: "Kelli Fairbrother , xigxag",
      position: "Founder and CEO",
      personImage: "/images/goodfirms.png",
    },
    {
      companyLogo: "/images/google.png",
      description:
        "“We’re really pleased with how the site turned out. We’re already seeing the impact of omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase.”",
      name: "Kelli Fairbrother , xigxag",
      position: "Founder and CEO",
      personImage: "/images/google.png",
    },
    {
      companyLogo: "/images/clutch.png",
      description:
        "“We’re really pleased with how the site turned out. We’re already seeing the impact of omulod’s work — we saw almost 4.5x more clicks and 67x more impressions from our site within a month. So far, we’ve only indexed 17% of our site’s pages, so we are expecting those numbers to still increase.”",
      name: "Kelli Fairbrother , xigxag",
      position: "Founder and CEO",
      personImage: "/images/clutch.png",
    },
  ];

  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("relative h-full", className)}>
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        loop={true}
        navigation={{
          prevEl: "#trustedSliderPrev",
          nextEl: "#trustedSliderNext",
        }}
        onSlideChange={() => {
          // if (swiper.realIndex === sliderItems.length - 1) {
          //   setActiveIndex(0);
          // } else {
          //   setActiveIndex(swiper.realIndex + 1);
          // }
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1280: {
            slidesPerView: 4,
          },
          1640: {
            slidesPerView: 5,
          },
          2560: {
            slidesPerView: 7,
          },
          3840: {
            slidesPerView: 9,
          },
          5120: {
            slidesPerView: 10,
          },
          7680: {
            slidesPerView: 11,
          },
        }}
        className="h-full"
      >
        {sliderItems.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              {...item}
              className={cn(
                "border-r border-surface-border hover:bg-gradient-to-t hover:from-primary-500/20 hover:to-neutral-900/10 transition-all cursor-grab",
                {
                  // "bg-gradient-to-t from-primary-500/20 to-neutral-900/10":
                  //   activeIndex === index,
                }
              )}
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

export default TrustedSectionSlider;
