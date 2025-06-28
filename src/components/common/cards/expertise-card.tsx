import OmulodIcon from "@/components/ui/icons/omulod-icon";
import { cn } from "@/helpers/cn";

interface IExpertiseProps {
  title: string;
  subtitle: string;
  keyPainPoints: string[];
  approach: string[];
  className?: string;
}

const ExpertiseCard = ({
  title,
  subtitle,
  keyPainPoints,
  approach,
  className,
}: IExpertiseProps) => {
  return (
    <div
      className={cn(
        "border border-surface-border rounded-3xl p-8 bg-neutral-900/5 backdrop-blur-md",
        className
      )}
    >
      <OmulodIcon size={56} />
      <p className="py-2 text-3xl font-semibold">{title}</p>
      <p className="text-sm font-light">{subtitle}</p>
      <div className="mt-10 border border-surface-border rounded-2xl grid grid-cols-1 md:grid-cols-2">
        <div className="p-4 md:border-r border-surface-border">
          <p className="border-b border-surface-border pb-4 mb-4">
            Key Pain Points We Fix
          </p>
          <ul>
            {keyPainPoints.map((item) => (
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
          <p className="border-b border-surface-border pb-4 mb-4">
            Our proven approach:
          </p>
          <ul>
            {approach.map((item) => (
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

export default ExpertiseCard;
