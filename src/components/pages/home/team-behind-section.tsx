import SectionHeading from "@/components/common/section-heading";
import Image from "next/image";

const stats = [
  {
    value: "£4.2M+",
    description: "Total client revenue influenced by Omulod-designed products.",
  },
  {
    value: "1.3M+",
    description: "Users served across platforms we've designed or built.",
  },
  {
    value: "97.5%",
    description: "Client satisfaction rate based on post-project surveys.",
  },
  {
    value: "125+",
    description: "Startups, SaaS brands, and teams we've partnered with.",
  },
  {
    value: "4.9",
    description: "Average project rating across reviews and feedback.",
  },
  {
    value: "40+",
    description: "Frameworks, stacks, and tools we actively use and support.",
  },
];
const TeamBehindSection = () => {
  return (
    <section id="company" className="container pt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
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
            At omulod*, we’re more than a design and development agency — we’re
            a lean, hands-on product team helping startups, SaaS platforms, and
            enterprises build faster, smarter, and better.
            <br />
            <br />
            Founded by three specialists in design, development, and digital
            strategy, omulod* is built to move quickly without compromising on
            quality. We’ve spent years designing seamless user experiences,
            developing high-performance products, and scaling digital solutions
            that power real business growth.
            <br />
            <br />
            Whether you’re launching your MVP, redesigning an outdated platform,
            or scaling your next big feature — our team works like an extension
            of yours.
          </p>
        </div>

        {/* stats section */}
        <div className="p-8 max-w-4xl mx-auto rounded-3xl backdrop-blur-xs bg-neutral-500/10">
          <div className="grid grid-cols-2 grid-rows-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-4 md:p-8 ${
                  // Add right border for left column items (except last row if odd number)
                  index % 2 === 0 && index < stats.length - 1
                    ? "border-r border-neutral-700"
                    : ""
                } ${
                  // Add bottom border for top two rows
                  index < stats.length - 2 ? "border-b border-neutral-700" : ""
                }`}
              >
                <div className="text-2xl md:text-4xl font-extrabold mb-4">
                  {stat.value}
                </div>
                <div className="leading-relaxed text-sm md:text-base">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="flex relative items-center justify-center mt-5">
        <div className="rounded-[1780px] absolute z-10 w-full h-[440px] bg-primary-700 filter blur-[145.82278442382812px]" />
        <Image
          src="/images/team-image.png"
          width={1007}
          height={440}
          alt="team-image"
          className="relative z-20"
        />
      </div>
    </section>
  );
};

export default TeamBehindSection;
