import OmulodIcon from "@/components/ui/icons/omulod-icon";

interface ITwoSidePointsCardProps {
  leftPoints: string[];
  leftTitle: string;
  rightPoints: string[];
  rightTitle: string;
}

const TwoSidePointsCard = ({
  leftPoints,
  leftTitle,
  rightPoints,
  rightTitle,
}: ITwoSidePointsCardProps) => {
  return (
    <div>
      <div className="mt-10 border border-neutral-500 rounded-2xl grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:border-r border-neutral-500">
          <p className="border-b border-neutral-500 pb-4 mb-4 font-bold text-xs">
            {leftTitle}
          </p>
          <ul>
            {leftPoints.map((item) => (
              <li key={item} className="flex items-center gap-2 mb-3.5">
                <OmulodIcon size={16} />
                <span className="line-clamp-1 max-w-[calc(100%-1.5rem)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4">
          <p className="border-b border-neutral-500 pb-4 mb-4 font-bold text-xs">
            {rightTitle}
          </p>
          <ul>
            {rightPoints.map((item) => (
              <li key={item} className="flex items-center gap-2 mb-3.5">
                <OmulodIcon size={16} />
                <span className="line-clamp-1 max-w-[calc(100%-1.5rem)]">
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

export default TwoSidePointsCard;
