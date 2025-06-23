"use client";
import Button from "@/components/ui/button";
import ArrowDownIcon from "@/components/ui/icons/arrow-down-icon";
import CheckIcon from "@/components/ui/icons/check-icon";
import OmulodIcon from "@/components/ui/icons/omulod-icon";
import { cn } from "@/helpers/cn";
import { IServicePoint } from "@/types/common.types";
import { useState } from "react";

interface IServicesCardProps extends IServicePoint {
  isActive?: boolean;
  className?: string;
}
const ServicesCard = ({
  title,
  subtitle,
  points,
  isActive = false,
  className,
}: IServicesCardProps) => {
  const [showPoints, setShowPoints] = useState(isActive || false);

  return (
    <div className={cn("p-8 rounded-3xl border border-neutral-500", className)}>
      <div className="flex items-center gap-2">
        <OmulodIcon size={56} />
        <h4>{title}</h4>
      </div>
      <p className="mt-6 mb-9">{subtitle}</p>
      <div
        className="flex items-center gap-2 justify-between text-primary-500 cursor-pointer"
        onClick={() => setShowPoints(!showPoints)}
      >
        <p>View details</p>
        <ArrowDownIcon size={20} />
      </div>

      <div
        className={cn("transition-all border-neutral-500", {
          "max-h-0 overflow-clip": !showPoints,
          "max-h-[500px] mt-6 pt-6 border-t": showPoints,
        })}
      >
        <p className="mb-4">What you&apos;ll get:</p>
        <ul>
          {points.map((item, index) => (
            <li key={index} className="flex items-center gap-2 mb-3.5">
              <CheckIcon size={16} />
              <span className="line-clamp-1 max-w-[calc(100%-1.5rem)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <Button intent="secondary" className="mt-6 w-full">
          Get a quote
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
