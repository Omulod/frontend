import FeaturedCard from "@/components/common/cards/featured-card";
import SectionHeading from "@/components/common/section-heading";
import { IFeaturedWork } from "@/types/common.types";

const featureData: IFeaturedWork[] = [
  {
    image: "/images/feature-image.png",
    subtitle: "EARNING",
    title: "Shaga Odyssey – an award- winning web3 gamepad platform",
    url: "www.earning.com",
    location: "London",
    flag: "https://flagcdn.com/w20/gb.png",
    techStack: "React, Python, AWS",
    timeline: "12 months, ongoing",
    impactPoint: {
      title: "IMPACT (5 MONTHS POST-LAUNCH)",
      points: [
        "2x faster user workflows",
        "50% shorter time-to-market",
        "Nominated for UX Design Award 2024",
      ],
    },
  },
  {
    image: "/images/feature-image.png",
    subtitle: "EARNING",
    title: "Shaga Odyssey – an award- winning web3 gamepad platform",
    url: "www.earning.com",
    location: "London",
    flag: "https://flagcdn.com/w20/gb.png",
    techStack: "React, Python, AWS",
    timeline: "12 months, ongoing",
    impactPoint: {
      title: "IMPACT (5 MONTHS POST-LAUNCH)",
      points: [
        "2x faster user workflows",
        "50% shorter time-to-market",
        "Nominated for UX Design Award 2024",
      ],
    },
  },
];

const FeaturedWorkSection = () => {
  return (
    <div id="works" className="container my-28">
      <div className="max-w-[943px]">
        <SectionHeading
          subtitle="FEATURED WORK"
          title="Successful launches across SaaS, LMS, and more."
        />
        <p className="mt-4">
          We’ve helped 30+ brands in the UK and beyond turn ideas into digital
          products — and redesign platforms that needed a fresh start. From LMS
          platforms to SaaS apps and eCommerce systems — our team delivers
          high-quality design and development, fast.
        </p>
      </div>

      <div className="flex flex-col gap-10 mt-14">
        {featureData.map((item, index) => (
          <FeaturedCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWorkSection;
