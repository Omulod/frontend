"use client";
import Button from "@/components/ui/button";
import ArrowDownIcon from "@/components/ui/icons/arrow-down-icon";
import CheckIcon from "@/components/ui/icons/check-icon";
import OmulodIcon from "@/components/ui/icons/omulod-icon";
import { cn } from "@/helpers/cn";
import { IServicePoint } from "@/types/common.types";
import Image from "next/image";
import { useState } from "react";

interface IServicesCardProps extends IServicePoint {
  iconUrl?: string;
  buttonText?: string;
  isActive?: boolean;
  className?: string;
}
const ServicesCard = ({
  title,
  subtitle,
  buttonText,
  iconUrl,
  points,
  isActive = false,
  className,
}: IServicesCardProps) => {
  const [showPoints, setShowPoints] = useState(isActive || false);

  return (
    <div
      className={cn(
        "p-8 rounded-3xl border border-surface-border bg-neutral-700/30",
        className
      )}
    >
      <div className="flex items-center gap-4">
        {iconUrl ? (
          <Image
            src={iconUrl || ""}
            width={56}
            height={56}
            alt={title}
            className="object-cover w-10 h-10 lg:w-14 lg:h-14"
          />
        ) : (
          <OmulodIcon size={56} />
        )}
        <h4 className="max-w-[calc(100%-72px)]">{title}</h4>
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
        className={cn("transition-all border-surface-border", {
          "max-h-0 overflow-clip": !showPoints,
          "max-h-[500px] mt-6 pt-6 border-t": showPoints,
        })}
      >
        <p className="mb-4">What you&apos;ll get:</p>
        <ul>
          {points.map((item, index) => (
            <li key={index} className="flex items-center gap-2 mb-3.5">
              <CheckIcon size={16} className="text-primary-500" />
              <span className="line-clamp-1 max-w-[calc(100%-1.5rem)]">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <Button intent="secondary" className="mt-6 w-full">
          {buttonText || "Get a quote"}
        </Button>
      </div>
    </div>
  );
};

export default ServicesCard;
