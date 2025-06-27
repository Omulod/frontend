import {} from "@/components/pages/home/website-plan-data.helper";
import Button from "@/components/ui/button";
import CheckIcon from "@/components/ui/icons/check-icon";
import CrossIcon from "@/components/ui/icons/cross-icon";
import CrownIcon from "@/components/ui/icons/crown-icon";
import { cn } from "@/helpers/cn";
import { IPlan } from "@/types/pricing.types";
import Image from "next/image";

interface IPricingCardProps {
  plan?: IPlan;
  billingPeriod: string;
  currency: "GBP" | "USD";
  onButtonClick?: (plan?: IPlan) => void;
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
      className={cn(
        "border border-neutral-500 rounded-3xl p-8 relative group",
        plan?.is_featured && "border-primary-900"
      )}
    >
      <Image
        src="/images/hover-gradiant.svg"
        width={1640}
        height={570}
        alt="hover-gradiant"
        className="absolute left-0 right-0 -bottom-0 h-full rounded-3xl opacity-0 group-hover:opacity-80 transition-all duration-300"
      />
      {plan?.is_featured && (
        <div className="absolute bg-primary-500 -top-5 right-10 rounded-lg text-primary-900 flex items-center gap-2 font-bold py-2 px-3.5">
          <CrownIcon />
          <span>Most Popular</span>
        </div>
      )}

      <div className="mb-6">
        <h5 className="mb-4">{plan?.plan_name}</h5>
        <div className="mb-2">
          <h2 className="relative inline">
            {currency === "GBP"
              ? plan?.gbp_pricing_details[0].gbp_sale_price
              : plan?.usd_pricing_details[0].usd_sale_price}
          </h2>
          <span className="italic lowercase">/{billingPeriod}</span>
        </div>
        <p className="line-clamp-1">{plan?.price_subtext}</p>
      </div>

      <div className="space-y-3 my-8 pt-6 border-t border-neutral-500">
        {plan?.features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center w-full justify-between gap-3">
              <span>{feature.feature_name}</span>
              <div
                className={cn({
                  hidden: feature.add_on_text,
                })}
              >
                {feature.is_feature_available ? (
                  <CheckIcon size={19} className="text-success-500" />
                ) : (
                  <CrossIcon size={14} className="text-neutral-500" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Button className="w-full" intent="secondary" onClick={handleButtonClick}>
        {plan?.pricing_button_text}
      </Button>
    </div>
  );
};

export default PricingCard;
