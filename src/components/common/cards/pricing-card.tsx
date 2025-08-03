import {} from "@/components/pages/home/website-plan-data.helper";
import Button from "@/components/ui/button";
import CalButton from "@/components/ui/cal-button";
import CheckIcon from "@/components/ui/icons/check-icon";
import CrossIcon from "@/components/ui/icons/cross-icon";
import CrownIcon from "@/components/ui/icons/crown-icon";
import { cn } from "@/helpers/cn";
import { IPlan } from "@/types/pricing.types";
import Image from "next/image";
import Link from "next/link";

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
        "border border-surface-border rounded-3xl p-8 relative group flex flex-col justify-between",
        plan?.is_featured && "border-primary-900"
      )}
    >
      <div className="absolute left-0 bottom-0 h-full rounded-3xl opacity-0 group-hover:opacity-60 transition-all">
        <Image
          src="/images/hover-gradiant-default.png"
          width={1640}
          height={1640}
          alt="hover-gradiant"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div>
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
              <span
                className={cn(
                  "text-sm absolute -top-2 md:top-2.5 left-[calc(100%+4px)] whitespace-nowrap bg-[#16472380] px-2 rounded-xl py-0.5",
                  {
                    hidden:
                      currency === "GBP"
                        ? !plan?.gbp_pricing_details[0].gbp_sale_price_text
                        : !plan?.usd_pricing_details[0].usd_sale_price_text,
                  }
                )}
              >
                {currency === "GBP"
                  ? plan?.gbp_pricing_details[0].gbp_sale_price_text
                  : plan?.usd_pricing_details[0].usd_sale_price_text}
              </span>
              {currency === "GBP"
                ? plan?.gbp_pricing_details[0].gbp_sale_price
                : plan?.usd_pricing_details[0].usd_sale_price}
            </h2>
            {(plan?.gbp_pricing_details[0].gbp_sale_price ||
              plan?.usd_pricing_details[0].usd_sale_price) != "Custom" && (
              <span className="italic lowercase">/{billingPeriod}</span>
            )}
          </div>
          <p className="line-clamp-1">{plan?.price_subtext}</p>
          {plan?.pricing_plan_custom_text && (
            <p className="line-clamp-1 mt-6 text-primary-500 p-4 rounded-lg bg-neutral-700">
              {plan?.pricing_plan_custom_text}
            </p>
          )}
        </div>

        <div className="space-y-3 my-8 pt-6 border-t border-surface-border">
          {plan?.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center w-full justify-between gap-3">
                <span>{feature.feature_name}</span>
                {feature.add_on_text && (
                  <span className="text-primary-500">
                    {feature.add_on_text}
                  </span>
                )}
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
      </div>

      {plan?.pricing_button_link ? (
        <Link
          href={plan?.pricing_button_link}
          target="_blank"
          rel="noreferrer"
          className="w-full"
        >
          <Button
            className="w-full"
            intent="secondary"
            onClick={handleButtonClick}
          >
            {plan?.pricing_button_text || "Select Plan"}
          </Button>
        </Link>
      ) : (
        <CalButton
          buttonText={plan?.pricing_button_text || "Select Plan"}
          className="w-full"
        />
      )}
    </div>
  );
};

export default PricingCard;
