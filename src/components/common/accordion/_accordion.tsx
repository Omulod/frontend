"use client";

import ArrowDownIcon from "@/components/ui/icons/arrow-down-icon";
import { cn } from "@/helpers/cn";
import { IAccordionItem } from "@/types/common.types";
import React, { useState } from "react";

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
            "mb-8 border border-neutral-700 rounded-3xl backdrop-blur-xs bg-neutral-500/30 px-8 py-3"
          )}
        >
          <div className="flex items-center justify-between gap-10 py-1.5 md:py-3">
            <p
              onClick={handleAccordionClick(item.id)}
              className={cn(
                "cursor-pointer text-xl transition-all hover:text-primary-500",
                {
                  "text-primary-500": expanded === item.id,
                }
              )}
            >
              {item.title}
            </p>
            <div
              className="cursor-pointer"
              onClick={handleAccordionClick(item.id)}
            >
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
            <p className="pb-4 text-base">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
