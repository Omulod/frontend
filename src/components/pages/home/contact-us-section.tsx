"use client";
import ContactCard from "@/components/common/cards/contact-card";
import SectionHeading from "@/components/common/section-heading";
import { cn } from "@/helpers/cn";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useState } from "react";
import ContactUsForm from "./contact-us-form";

const contactUsData = [
  {
    title: "Have a partnership in mind?",
    image: "/images/contact-person-1.png",
    name: "Mosharrof Hossain",
    position: "Co-Founder & COO",
    email: "mosharrof@omulod.com",
    facebook: "https://www.facebook.com/mosharrofuiux",
    linkedin: "https://www.linkedin.com/in/mabfahad",
  },
  {
    title: "Have a project to discuss?",
    image: "/images/contact-person-2.png",
    name: "Fahad Abdullah",
    position: "Co-Founder & CTO",
    email: "fahad@omulod.com",
    facebook: "https://www.facebook.com/fahad.abdullah42",
    linkedin: "https://www.linkedin.com/in/mosharrofux",
  },
];

const tabItems = [
  {
    id: 1,
    title: "Request a Quote",
  },
  {
    id: 2,
    title: "Book a Call",
  },
];

const ContactUsSection = () => {
  const [activeTabId, setActiveTabId] = useState(1);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#000" },
          dark: { "cal-brand": "#C69749" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div
      id="contact"
      className="container py-28 grid grid-cols-1 lg:grid-cols-12 gap-6"
    >
      <div className="lg:col-span-8">
        <SectionHeading
          subtitle="Contact Us"
          title="Ready to share your vision? Let’s talk!"
        />

        <div className="rounded-3xl lg:rounded-[100px] bg-[#1a1a1a] backdrop-blur-3xl shadow-button-secondary flex items-center gap-2 lg:gap-6 p-2 w-fit my-14">
          {tabItems.map((item) => (
            <button
              key={item.id}
              className="relative px-4 lg:px-10 cursor-pointer py-2 font-semibold rounded-[100px] w-[160px] lg:w-[200px] whitespace-nowrap"
              onClick={() => setActiveTabId(item.id)}
            >
              <span
                className={cn(
                  "absolute shadow-button backdrop-blur-3xl bg-primary-900 top-0 left-0 w-full h-full rounded-[100px] -z-10 transition-all duration-500",
                  {
                    "opacity-100": activeTabId === item.id,
                    "opacity-0": activeTabId !== item.id,
                  }
                )}
              />
              {item.title}
            </button>
          ))}
        </div>

        {activeTabId === 1 && <ContactUsForm />}

        {activeTabId === 2 && (
          <div className="border border-transparent">
            <Cal
              namespace="30min"
              calLink="omulod/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "dark" }}
            />
          </div>
        )}
      </div>
      <div className="lg:col-span-4 h-fit border border-surface-border rounded-2xl">
        {contactUsData.map((item, index) => (
          <ContactCard
            key={index}
            title={item.title}
            image={item.image}
            name={item.name}
            position={item.position}
            email={item.email}
            facebook={item.facebook}
            linkedin={item.linkedin}
            className={cn(
              "border-b border-surface-border last:border-b-0 last:rounded-b-2xl first:rounded-t-2xl"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactUsSection;
