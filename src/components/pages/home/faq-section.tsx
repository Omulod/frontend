import Accordion from "@/components/common/accordion/_accordion";
import CeoCard from "@/components/common/cards/ceo-card";
import SectionHeading from "@/components/common/section-heading";
import { IFaqData } from "@/types/common.types";
import Image from "next/image";

const FaqSection = ({
  faqsData,
  whatsAppLink,
}: {
  faqsData: IFaqData[];
  whatsAppLink?: string;
}) => {
  return (
    <section id="faqs" className="overflow-x-clip mt-28 pb-20">
      <div className="container">
        <SectionHeading
          subtitle="FAQs"
          title="We’ve Got You Covered"
          className="mb-4"
          subtitleClassName="normal-case"
        />
        <p>
          Here are answers to the most common questions we get from founders and
          startups.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">
          <div className="lg:col-span-8 flex flex-col gap-10">
            {faqsData.map((item) => (
              <div key={item.category_name}>
                <p className="text-primary-500 font-semibold uppercase">
                  {item?.category_name}
                </p>
                <div className="mt-4">
                  {item?.faqs.map((faq) => {
                    if (faq.show_on_homepage === "no") return null;
                    return (
                      <Accordion
                        key={faq.id}
                        items={[
                          {
                            title: faq.question,
                            content: faq.answer,
                            id: String(faq.id),
                          },
                        ]}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-4 h-fit mt-10 relative">
            <Image
              src="/images/hero-image.png"
              width={666}
              height={666}
              alt="hero-image"
              className="absolute -right-44 top-[70%] -z-10"
            />
            <CeoCard
              image="/images/ceo-pic.png"
              name="Saif"
              subtitle="We help you launch faster — with clarity and confidence."
              points={[
                "et started in under 1 day",
                "Define scope & goals together",
                "Receive first designs in 4–5 days",
                "Refine, build, and launch",
              ]}
              facebookLink="https://www.facebook.com/saif.ratul93"
              linkedInLink="https://www.linkedin.com/in/saif-bin-alam"
              whatsAppLink={whatsAppLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
