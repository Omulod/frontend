"use client";
import ServicesCard from "@/components/common/cards/services-card";
import SectionHeading from "@/components/common/section-heading";
import { cn } from "@/helpers/cn";
import { IServicesData } from "@/types/services.types";
import { useEffect, useState } from "react";

const OurServices = ({
  servicesData = [],
}: {
  servicesData: IServicesData[];
}) => {
  const [activeTab, setActiveTab] = useState<IServicesData | null>(null);

  useEffect(() => {
    setActiveTab(servicesData[0]);
  }, [activeTab]);

  return (
    <section
      id="services"
      className="bg-gradient-to-t from-neutral-700/70 via-neutral-900 to-neutral-700/70 py-28"
    >
      <div className="container">
        <SectionHeading
          subtitle="Our Services"
          title="Choose your path to success with our comprehensive service offerings"
          className="max-w-[804px] mb-4"
        />
        <p>For Startups, SaaS Teams & Global Brands</p>

        <div className="rounded-3xl lg:rounded-[100px] bg-[#1a1a1a] backdrop-blur-3xl shadow-button-secondary flex flex-wrap items-center justify-between gap-6 p-2 w-fit my-14">
          {servicesData.map((item) => (
            <button
              key={item.id}
              className="relative px-4 lg:px-10 cursor-pointer py-2 font-semibold rounded-[100px]"
              onClick={() => setActiveTab(item)}
            >
              <span
                className={cn(
                  "absolute shadow-button backdrop-blur-3xl bg-primary-900 top-0 left-0 w-full h-full rounded-[100px] -z-10 transition-all duration-500",
                  {
                    "opacity-100": activeTab?.id === item.id,
                    "opacity-0": activeTab?.id !== item.id,
                  }
                )}
              />
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-10">
          {activeTab?.services?.data?.service_details?.map(
            (item, serviceindex) => (
              <div key={serviceindex}>
                <p className="text-xl text-primary-500 font-semibold mb-6">
                  {item?.service_category}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {item.service_category_items.map((item, index) => (
                    <ServicesCard
                      key={index}
                      className="h-fit"
                      title={item?.item_title}
                      subtitle={item?.item_button_text}
                      points={item?.item_features.map(
                        (feature) => feature?.feature_title
                      )}
                      iconUrl={item?.item_icon}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
