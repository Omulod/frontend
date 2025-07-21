"use client";

import { IServicesData } from "@/types/services.types";
import {
  ISiteSettings,
  IIndustry,
  ITechnologyData,
} from "@/types/common.types";
import ArrowDownIcon from "@/components/ui/icons/arrow-down-icon";
import ArrowRightUpIcon from "@/components/ui/icons/arrow-right-up-icon";
import Button from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/helpers/cn";
import React, { Fragment, useState } from "react";

interface ServicesFooterAccordionProps {
  servicesData: IServicesData[] | null;
  industriesData: { data: IIndustry[] } | null;
  siteSettings: ISiteSettings | null;
  technologiesData?: ITechnologyData[] | null;
}

const ServicesFooterAccordion = ({
  servicesData,
  industriesData,
  technologiesData,
  siteSettings,
}: ServicesFooterAccordionProps) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleAccordionClick = (panelId: string) => () => {
    setExpanded(expanded === panelId ? null : panelId);
  };

  const whatsappLink = siteSettings?.footer_settings.footer_social_links.find(
    (item) => item.obc_social_link_title == "WhatsApp"
  );

  // Transform industries data
  const industriesItems = industriesData?.data?.[0]?.industry_categories || [];

  return (
    <div className="container">
      <div className="space-y-6">
        {/* Services Accordion */}
        <div
          className={cn(
            "border border-surface-border rounded-3xl backdrop-blur-xs bg-surface-black-03 px-8 py-3"
          )}
        >
          <div
            onClick={handleAccordionClick("services")}
            className="cursor-pointer flex items-center justify-between gap-10 py-1.5 md:py-3"
          >
            <div>
              <h3
                className={cn("text-xl font-semibold transition-all", {
                  "text-primary-500": expanded === "services",
                })}
              >
                Show all services
              </h3>
            </div>
            <div>
              <ArrowDownIcon
                className={cn("transition-all", {
                  "rotate-180": expanded === "services",
                  "rotate-0": expanded !== "services",
                })}
              />
            </div>
          </div>

          <div
            className={cn(
              "scrollbar overflow-hidden transition-all duration-700",
              {
                "max-h-0": expanded !== "services",
                "max-h-[400px] overflow-y-auto": expanded === "services",
              }
            )}
          >
            <div className="pb-6 pt-4">
              <div className="flex flex-col gap-6">
                {servicesData?.map((serviceDetail, index: number) => (
                  <div key={index}>
                    <p className="text-lg font-bold">{serviceDetail?.title}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-1 gap-x-4 mt-1">
                      {serviceDetail?.services?.data?.service_details?.map(
                        (service_detail_item) => (
                          <Fragment key={service_detail_item.service_category}>
                            {service_detail_item?.service_category_items?.map(
                              (service_item, service_item_index) => (
                                <div
                                  key={service_item_index}
                                  className="col-span-1"
                                >
                                  {service_item?.item_title}
                                </div>
                              )
                            )}
                          </Fragment>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Technologies Accordion */}
        <div
          className={cn(
            "border border-surface-border rounded-3xl backdrop-blur-xs bg-surface-black-03 px-8 py-3"
          )}
        >
          <div
            onClick={handleAccordionClick("technologies")}
            className="cursor-pointer flex items-center justify-between gap-10 py-1.5 md:py-3"
          >
            <div>
              <h3
                className={cn("text-xl font-semibold transition-all", {
                  "text-primary-500": expanded === "technologies",
                })}
              >
                Show all technologies
              </h3>
            </div>
            <div>
              <ArrowDownIcon
                className={cn("transition-all", {
                  "rotate-180": expanded === "technologies",
                  "rotate-0": expanded !== "technologies",
                })}
              />
            </div>
          </div>

          <div
            className={cn(
              "scrollbar overflow-hidden transition-all duration-700",
              {
                "max-h-0": expanded !== "technologies",
                "max-h-[400px] overflow-y-auto": expanded === "technologies",
              }
            )}
          >
            <div className="pb-6 pt-4">
              <div className="flex flex-col gap-6">
                {technologiesData?.map((techCategory, index) => (
                  <div key={index}>
                    <p className="text-lg font-bold">{techCategory?.name}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-1 mt-1">
                      {techCategory?.children?.map((childTech) => (
                        <Fragment key={childTech.term_id}>
                          {childTech.children &&
                          childTech.children.length > 0 ? (
                            childTech.children.map((leafTech, leafIndex) => (
                              <div key={leafIndex}>{leafTech.name}</div>
                            ))
                          ) : (
                            <div className="text-sm">{childTech.name}</div>
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Industries Accordion */}
        <div
          className={cn(
            "border border-surface-border rounded-3xl backdrop-blur-xs bg-surface-black-03 px-8 py-3"
          )}
        >
          <div
            onClick={handleAccordionClick("industries")}
            className="cursor-pointer flex items-center justify-between gap-10 py-1.5 md:py-3"
          >
            <div>
              <h3
                className={cn("text-xl font-semibold transition-all", {
                  "text-primary-500": expanded === "industries",
                })}
              >
                Show all industries
              </h3>
            </div>
            <div>
              <ArrowDownIcon
                className={cn("transition-all", {
                  "rotate-180": expanded === "industries",
                  "rotate-0": expanded !== "industries",
                })}
              />
            </div>
          </div>

          <div
            className={cn(
              "scrollbar overflow-hidden transition-all duration-700",
              {
                "max-h-0": expanded !== "industries",
                "max-h-[400px] overflow-y-auto": expanded === "industries",
              }
            )}
          >
            <div className="pb-6 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8">
                {industriesItems.map((industry, index) => (
                  <div key={`${industry.industry_category_name}-${index}`}>
                    <p className="font-semibold text-primary-400 uppercase">
                      {industry.industry_category_name}
                    </p>
                    <p className="text-neutral-30 mt-2">
                      {industry.industry_category_moto}
                    </p>
                    {industry.key_plans?.map((plan, planIndex) => (
                      <div key={`${plan.key_plan_name}-${planIndex}`}>
                        <p className="text-sm text-neutral-50 mb-1">
                          {plan.key_plan_name}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-6 pt-8">
        <div>
          <p>Let&apos;s work together</p>
          <p className="text-primary-500 text-3xl font-semibold">
            Call omulod*
          </p>
        </div>
        <Link
          href={whatsappLink?.obc_social_link_url || ""}
          target="_blank"
          rel="noreferrer"
        >
          <Button className="aspect-square !p-4">
            <ArrowRightUpIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesFooterAccordion;
