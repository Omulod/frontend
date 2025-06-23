import {
  formatPrice,
  IPricingPlan,
} from "@/components/pages/home/website-plan-data.helper";
import CrownIcon from "@/components/ui/icons/crown-icon";
import { cn } from "@/helpers/cn";

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
        "border border-neutral-500 rounded-3xl p-8 relative",
        plan.isPopular && "border-primary-900"
      )}
    >
      {plan.isPopular && (
        <div className="absolute bg-primary-500 -top-5 right-10 rounded-lg text-primary-900 flex items-center gap-2 font-bold py-2 px-4">
          <CrownIcon />
          <span>Most Popular</span>
        </div>
      )}

      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="mb-2">
          {plan.isCustom ? (
            <span className="text-3xl font-bold text-white">Custom</span>
          ) : (
            <>
              <span className="text-3xl font-bold text-white">
                {formatPrice({
                  price:
                    plan.pricing[billingPeriod as keyof typeof plan.pricing],
                  currency: currency,
                })}
              </span>
              <span className="text-gray-400">/month</span>
            </>
          )}
        </div>
        <p className="text-gray-400 text-sm">{plan.description}</p>
      </div>

      <div className="mb-6">
        <p className="text-primary-900 text-sm font-medium">{plan.team}</p>
      </div>

      <div className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center",
                  feature.included ? "bg-success-500" : "bg-error-500"
                )}
              >
                {feature.included ? (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span
                className={cn(
                  "text-sm",
                  feature.included ? "text-white" : "text-neutral-400"
                )}
              >
                {feature.name}
              </span>
            </div>

            {feature.additionalInfo && (
              <span className="text-xs text-warning-500 font-medium">
                {feature.additionalInfo}
              </span>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={handleButtonClick}
        className={cn(
          "w-full py-3 rounded-lg font-medium transition-all",
          plan.isPopular
            ? "bg-primary-900 text-white hover:bg-primary-800"
            : "bg-gray-700 text-white hover:bg-gray-600"
        )}
      >
        {plan.buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
