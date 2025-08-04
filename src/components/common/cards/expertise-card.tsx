"use client";
import { useState } from "react";
import ArrowDownIcon from "@/components/ui/icons/arrow-down-icon";
import OmulodIcon from "@/components/ui/icons/omulod-icon";
import { cn } from "@/helpers/cn";
import Image from "next/image";

interface IExpertiseProps {
  title: string;
  subtitle: string;
  icon?: string;
  keyPainPoints: string[];
  approach: string[];
  className?: string;
}

const ExpertiseCard = ({
  title,
  subtitle,
  icon,
  keyPainPoints,
  approach,
  className,
}: IExpertiseProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={cn(
        "border border-surface-border rounded-3xl p-4 md:p-8 bg-neutral-900/5 backdrop-blur-md",
        className
      )}
    >
      {icon ? (
        <Image
          src={icon}
          width={56}
          height={56}
          alt="icon"
          className="object-cover w-14 h-14 rounded"
        />
      ) : (
        <OmulodIcon size={56} />
      )}
      <p className="py-2 text-3xl font-semibold">{title}</p>
      <p className="text-sm font-light">{subtitle}</p>
      <div className="mt-4 md:mt-10 border border-surface-border rounded-2xl grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:border-r border-surface-border">
          <p
            className={cn(
              "border-b border-surface-border pb-4 mb-4 flex items-center gap-2 justify-between cursor-pointer md:cursor-default",
              { "mb-0 border-b-0 pb-0": !isExpanded }
            )}
            onClick={toggleExpand}
          >
            <span>Key Pain Points We Fix</span>
            <ArrowDownIcon
              size={16}
              className={cn(
                "mr-2 text-primary-500 md:hidden transition-transform duration-200",
                isExpanded ? "rotate-180" : "rotate-0"
              )}
            />
          </p>
          <ul className={cn("md:block", isExpanded ? "block" : "hidden")}>
            {keyPainPoints.map((item) => (
              <li key={item} className="flex gap-2 mb-3.5">
                <OmulodIcon size={16} />
                <span className="md:line-clamp-1 max-w-[calc(100%-1.5rem)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={cn(
            "p-4 pt-0 md:pt-4 md:block",
            isExpanded ? "block" : "hidden"
          )}
        >
          <p className="border-b border-surface-border pb-4 mb-4">
            Our proven approach:
          </p>
          <ul>
            {approach.map((item) => (
              <li key={item} className="flex gap-2 mb-3.5">
                <OmulodIcon size={16} />
                <span className="md:line-clamp-1 max-w-[calc(100%-1.5rem)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;
