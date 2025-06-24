import {
  formatPrice,
  IPricingPlan,
} from "@/components/pages/home/website-plan-data.helper";
import Button from "@/components/ui/button";
import CheckIcon from "@/components/ui/icons/check-icon";
import CrossIcon from "@/components/ui/icons/cross-icon";
import CrownIcon from "@/components/ui/icons/crown-icon";
import { cn } from "@/helpers/cn";
import Image from "next/image";

interface IPricingCardProps {
  plan: IPricingPlan;
  billingPeriod: string;
  currency: "GBP" | "USD";
  onButtonClick?: (plan: IPricingPlan) => void;
}

const PricingCard = ({
  plan,
  billingPeriod,
  currency,
  onButtonClick,
}: IPricingCardProps) => {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick(plan);
    }
  };

  return (
    <div
      key={plan.id}
      className={cn(
        "border border-neutral-500 rounded-3xl overflow-clip p-8 relative group",
        plan.isPopular && "border-primary-900"
      )}
    >
      <Image
        src="/images/hover-gradiant.svg"
        width={1640}
        height={570}
        alt="hover-gradiant"
        className="absolute left-0 right-0 -bottom-5 opacity-0 group-hover:opacity-100 transition-all duration-300"
      />
      {plan.isPopular && (
        <div className="absolute bg-primary-500 -top-5 right-10 rounded-lg text-primary-900 flex items-center gap-2 font-bold py-2 px-3.5">
          <CrownIcon />
          <span>Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <h5 className="mb-4">{plan.name}</h5>
        <div className="mb-2">
          {plan.isCustom ? (
            <h2 className="relative inline">
              Custom
              {plan.pricing.discount && (
                <span className="text-base absolute top-2 left-[102%] bg-success-900/60 px-2 py-0.5 rounded-3xl whitespace-nowrap">
                  -{plan.pricing.discount}
                </span>
              )}
              {plan.pricing.badge && !plan.pricing.discount && (
                <span className="text-base absolute top-2 left-[102%] bg-success-900/60 px-2 py-0.5 rounded-3xl whitespace-nowrap">
                  {plan.pricing.badge}
                </span>
              )}
            </h2>
          ) : (
            <>
              <h2 className="relative inline">
                {formatPrice({
                  price:
                    plan.pricing[billingPeriod as keyof typeof plan.pricing],
                  currency: currency,
                })}
                {plan.pricing.discount && (
                  <span className="text-base absolute top-2 left-[102%] bg-success-900/60 px-2 py-0.5 rounded-3xl">
                    -{plan.pricing.discount}
                  </span>
                )}
                {plan.pricing.badge && !plan.pricing.discount && (
                  <span className="text-base absolute top-2 left-[102%] bg-success-900/60 px-2 py-0.5 rounded-3xl">
                    {plan.pricing.badge}
                  </span>
                )}
              </h2>
              <span className="italic">/month</span>
            </>
          )}
        </div>
        <p className="line-clamp-1">{plan.description}</p>
      </div>

      {plan?.team && (
        <div className="p-4 text-primary-500 bg-neutral-700 rounded-lg">
          {plan.team}
        </div>
      )}

      <div className="space-y-3 my-8 pt-6 border-t border-neutral-500">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center w-full justify-between gap-3">
              <span>{feature.name}</span>
              <div
                className={cn({
                  hidden: feature.additionalInfo,
                })}
              >
                {feature.included ? (
                  <CheckIcon size={19} className="text-success-500" />
                ) : (
                  <CrossIcon size={14} className="text-neutral-500" />
                )}
              </div>
            </div>

            {feature.additionalInfo && (
              <span className="text-xs text-warning-500 font-medium">
                {feature.additionalInfo}
              </span>
            )}
          </div>
        ))}
      </div>

      <Button className="w-full" intent="secondary" onClick={handleButtonClick}>
        {plan.buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
