"use client";

import ArrowDownIcon from "@/components/ui/icons/arrow-down-icon";
import { cn } from "@/helpers/cn";
import { IAccordionItem } from "@/types/common.types";
import React, { useState } from "react";
import parse from "html-react-parser";

type IAccordionProps = {
  items: IAccordionItem[];
  activeItem?: string;
  className?: string;
};

const Accordion = ({ items, activeItem, className }: IAccordionProps) => {
  const [expanded, setExpanded] = useState<string | null>(activeItem || null);

  const handleAccordionClick = (panelId: string) => () => {
    setExpanded(expanded === panelId ? null : panelId);
  };

  return (
    <div className={cn("", className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            "mb-8 border border-surface-border rounded-3xl backdrop-blur-xs bg-surface-black-01 px-8 py-3"
          )}
        >
          <div
            onClick={handleAccordionClick(item.id)}
            className="cursor-pointer flex items-center justify-between gap-10 py-1.5 md:py-3"
          >
            <p
              className={cn("text-xl transition-all", {
                "text-primary-500": expanded === item.id,
              })}
            >
              {item.title}
            </p>
            <div>
              <ArrowDownIcon
                className={cn("transition-all", {
                  "rotate-180": expanded === item.id,
                  "rotate-0": expanded !== item.id,
                })}
              />
            </div>
          </div>
          <div
            className={cn(
              "scrollbar overflow-hidden transition-all duration-700",
              {
                "max-h-0": expanded !== item.id,
                "max-h-[300px] overflow-y-auto": expanded === item.id,
              }
            )}
          >
            <div className="pb-4 text-base [&_ul]:list-inside [&_ul_li]:list-disc">
              {parse(item?.content || "")}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
