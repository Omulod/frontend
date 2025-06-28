import OmulodIcon from "@/components/ui/icons/omulod-icon";
import React from "react";

const WorkProjectCard = ({
  title,
  points,
}: {
  title: string;
  points: {
    title: string;
    point?: string;
  }[];
}) => {
  return (
    <div className="bg-neutral-900 rounded-3xl border border-surface-border p-8">
      <p className="pb-2.5 border-b border-surface-border text-xs font-extrabold">
        {title}:
      </p>
      <div className="flex flex-col gap-3.5 mt-3.5">
        {points.map((item, index) => (
          <div key={index} className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-1.5">
              <OmulodIcon size={16} />
              <p className="font-semibold">{item.title}</p>
            </div>
            <p>{item.point}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkProjectCard;
