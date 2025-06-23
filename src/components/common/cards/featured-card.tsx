import Button from "@/components/ui/button";
import OmulodIcon from "@/components/ui/icons/omulod-icon";
import { cn } from "@/helpers/cn";
import { IFeaturedWork } from "@/types/common.types";
import Image from "next/image";

interface IFeaturedCardProps extends IFeaturedWork {
  className?: string;
}

const FeaturedCard = ({
  title,
  subtitle,
  image,
  url,
  location,
  flag,
  techStack,
  timeline,
  impactPoint,
  className,
}: IFeaturedCardProps) => {
  return (
    <div
      className={cn(
        "p-8 rounded-3xl bg-neutral-600/30 backdrop-blur-2xl border border-neutral-500 grid grid-cols-1 lg:grid-cols-12 gap-8",
        className
      )}
    >
      <div className="lg:col-span-5">
        <Image
          src={image}
          width={632}
          height={474}
          alt={title}
          className="border border-neutral-500 rounded-3xl object-scale-down"
        />
        <Button intent="secondary" size="large" className="mt-8 w-full">
          Explore
        </Button>
      </div>
      <div className="lg:col-span-7">
        <p className="uppercase text-primary-500 text-xl font-semibold mb-2.5">
          {subtitle}
        </p>
        <h3>{title}</h3>
        <div className="flex flex-wrap items-center gap-3.5 mt-6">
          <p className="py-2 px-6 rounded-sm bg-neutral-600 text-lg">{url}</p>
          <div className="flex items-center gap-2 py-2 px-6 rounded-sm bg-neutral-600 text-lg">
            <Image
              src={flag}
              width={24}
              height={24}
              alt={location}
              className="object-scale-down"
            />
            <p>{location}</p>
          </div>
        </div>

        {/* tech stack */}
        <div className="border rounded-2xl border-neutral-500 mt-10 grid grid-cols-2">
          <div className="p-6">
            <p className="border-b border-neutral-500 pb-2 pr-4 mb-3.5 text-sm font-bold">
              Tech Stack
            </p>
            <p>{techStack}</p>
          </div>
          <div className="border-l p-6 border-neutral-500">
            <p className="border-b border-neutral-500 pb-2 mb-3.5 text-sm font-bold">
              Timeline
            </p>
            <p>{timeline}</p>
          </div>
        </div>

        {/* impact points */}
        <div className="border rounded-2xl border-neutral-500 mt-8 p-6">
          <p className="border-b border-neutral-500 pb-2 mb-3.5 text-sm font-bold">
            {impactPoint.title}:
          </p>
          <div className="flex flex-col gap-3.5 mt-3.5">
            {impactPoint.points.map((point) => (
              <p key={point} className="flex items-center gap-2">
                <OmulodIcon size={16} />
                <span>{point}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
