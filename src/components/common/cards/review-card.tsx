import QuoteIcon from "@/components/ui/icons/quote-icon";
import { cn } from "@/helpers/cn";
import Image from "next/image";

interface IReviewCard {
  companyLogo: string;
  description: string;
  name: string;
  position: string;
  personImage: string;
  className?: string;
}

const ReviewCard = ({
  companyLogo,
  description,
  name,
  position,
  personImage,
  className,
}: IReviewCard) => {
  return (
    <div
      className={cn(
        "p-4 md:p-8 h-full flex flex-col bg-neutral-900/5 backdrop-blur-md",
        className
      )}
    >
      <div className="border-b pb-6 border-surface-border">
        {companyLogo && (
          <Image
            src={companyLogo}
            width={100}
            height={32}
            alt="company-logo"
            className="object-scale-down h-8 w-28"
          />
        )}
      </div>
      <div className="flex gap-4 flex-col grow">
        <QuoteIcon className="mt-6" />
        <p className="line-clamp-6">{description}</p>
        <div className="flex items-center gap-2 mt-auto">
          {personImage && (
            <Image
              src={personImage}
              width={100}
              height={100}
              alt="person-image"
              className="object-scale-down rounded-full border border-surface-border h-14 w-14"
            />
          )}

          <div>
            <p className="text-primary-500 font-medium">{name}</p>
            <p>{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
