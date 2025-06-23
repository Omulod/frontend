import Accordion from "@/components/common/accordion/_accordion";
import CeoCard from "@/components/common/cards/ceo-card";
import SectionHeading from "@/components/common/section-heading";
import { IAccordionItem } from "@/types/common.types";
import Image from "next/image";

interface IFAQItem {
  title: string;
  faqs: IAccordionItem[];
}

const faqItems: IFAQItem[] = [
  {
    title: "General",
    faqs: [
      {
        id: "1",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "2",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
    ],
  },
  {
    title: "SERVICES & CAPABILITIES",
    faqs: [
      {
        id: "1",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "2",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "3",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "4",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "5",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
    ],
  },
  {
    title: "PRICING & ENGAGEMENT",
    faqs: [
      {
        id: "1",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "2",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "3",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
    ],
  },
  {
    title: "Process & Delivery",
    faqs: [
      {
        id: "1",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "2",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "3",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
    ],
  },
  {
    title: " Support & Next Steps",
    faqs: [
      {
        id: "1",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
      {
        id: "2",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, veritatis.",
      },
    ],
  },
];

const FaqSection = () => {
  return (
    <section className="overflow-x-clip mt-28">
      <div className="container">
        <SectionHeading
          subtitle="FAQs"
          title="We’ve Got You Covered"
          className="mb-4"
        />
        <p>
          Here are answers to the most common questions we get from founders and
          startups.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-14">
          <div className="lg:col-span-8 flex flex-col gap-10">
            {faqItems.map((item) => (
              <div key={item.title}>
                <p className="text-primary-500 font-semibold uppercase">
                  {item?.title}
                </p>
                <div className="mt-4">
                  {item?.faqs.map((faq) => (
                    <Accordion
                      key={faq.id}
                      items={[
                        { id: faq.id, title: faq.title, content: faq.content },
                      ]}
                    />
                  ))}
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
              facebookLink=""
              linkedInLink=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
