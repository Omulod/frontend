"use client";
import ReviewCard from "@/components/common/cards/review-card";
import { cn } from "@/helpers/cn";
import { ITestimonial } from "@/types/common.types";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TrustedSectionSlider = ({
  testimonials = [],
  className,
}: {
  testimonials: ITestimonial[];
  className?: string;
}) => {
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
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <ReviewCard
              name={item.testimonial_name}
              description={item.testimonial_text}
              personImage={item.testimonial_image}
              companyLogo={item.company_image}
              position={item.testimonial_designation}
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
