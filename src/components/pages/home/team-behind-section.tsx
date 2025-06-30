import SectionHeading from "@/components/common/section-heading";
import { ISiteSettings } from "@/types/common.types";
import Image from "next/image";

const TeamBehindSection = ({
  siteSettings,
}: {
  siteSettings: ISiteSettings | null;
}) => {
  const stats = siteSettings?.statistics_reports || [];

  return (
    <div className="relative overflow-y-clip">
      <Image
        // src="/images/gradient-v2.svg"
        src="/images/bg-grad-2.svg"
        width={1640}
        height={570}
        alt="team-image"
        className="absolute left-0 right-0 mx-auto w-full rounded-t-4xl -bottom-20 -z-10 opacity-60"
      />
      <section id="company" className="container pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <SectionHeading
              subtitle="MEET THE TEAM BEHIND"
              title="Designers, developers, and doers with a product mindset"
              className="max-w-[804px]"
            />
            <p className="py-10 italic text-3xl font-light">
              “Clear communication, unlimited edits, and transparent pricing are
              part of how we work — not extras.”
            </p>
            <p>
              At omulod*, we’re more than a design and development agency —
              we’re a lean, hands-on product team helping startups, SaaS
              platforms, and enterprises build faster, smarter, and better.
              <br />
              <br />
              Founded by three specialists in design, development, and digital
              strategy, omulod* is built to move quickly without compromising on
              quality. We’ve spent years designing seamless user experiences,
              developing high-performance products, and scaling digital
              solutions that power real business growth.
              <br />
              <br />
              Whether you’re launching your MVP, redesigning an outdated
              platform, or scaling your next big feature — our team works like
              an extension of yours.
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1" />
          {/* stats section */}
          <div className="lg:col-span-5 max-w-4xl mx-auto rounded-3xl backdrop-blur-xs bg-neutral-500/10">
            <div className="grid grid-cols-2 grid-rows-3">
              {stats.slice(0, 6).map((stat, index) => (
                <div
                  key={index}
                  className={`p-4 md:p-8 ${
                    // Add right border for left column items (except last row if odd number)
                    index % 2 === 0 && index < stats.length - 1
                      ? "border-r border-neutral-700"
                      : ""
                  } ${
                    // Add bottom border for top two rows
                    index < stats.length - 2
                      ? "border-b border-neutral-700"
                      : ""
                  }
                  ${index === 4 && "border-b-0"}
                  `}
                >
                  <div className="text-2xl md:text-4xl font-extrabold mb-4">
                    {stat?.obc_statistics_title}
                  </div>
                  <div className="leading-relaxed text-sm md:text-base">
                    {stat.obc_statistics_description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* image section */}
        <div className="flex items-center justify-center -mt-10">
          {/* <div className="rounded-[1780px] absolute z-10 w-full h-[440px] bg-primary-700 filter blur-[145.82278442382812px]" /> */}

          <Image
            src="/images/team-image.png"
            width={811}
            height={527}
            alt="team-image"
            className="relative z-20 -mb-[1px]"
          />
        </div>
      </section>
    </div>
  );
};

export default TeamBehindSection;
