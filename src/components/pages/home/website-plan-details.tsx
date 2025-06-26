"use client";

import { cn } from "@/helpers/cn";
import { useState } from "react";
import { billingPeriods, pricingTabs } from "./website-plan-data.helper";
import Button from "@/components/ui/button";
import PricingCard from "@/components/common/cards/pricing-card";

const WebsitePlanDetails = () => {
  // State management
  const [activeTab, setActiveTab] = useState(1);
  const [billingPeriod, setBillingPeriod] = useState<string>("quarterly");
  const [currency, setCurrency] = useState<"GBP" | "USD">("GBP");

  // Event handlers
  const handleTabClick = (tabId: number) => () => {
    setActiveTab(tabId);
  };

  const handleBillingChange = (period: string) => {
    setBillingPeriod(period);
  };

  const handleCurrencyChange = (curr: "GBP" | "USD") => {
    setCurrency(curr);
  };

  // Helper functions

  const getCurrentPlans = () => {
    return pricingTabs.find((tab) => tab.id === activeTab)?.plans || [];
  };

  return (
    <div className="container">
      {/* Tab Navigation */}
      <div className="rounded-3xl lg:rounded-[100px] bg-[#1a1a1a] backdrop-blur-3xl shadow-button-secondary flex flex-wrap items-center justify-between gap-6 p-2 w-full my-14">
        <div>
          {pricingTabs.map((item) => (
            <button
              key={item.id}
              className="relative px-4 lg:px-10 cursor-pointer py-2 font-semibold rounded-[100px]"
              onClick={handleTabClick(item.id)}
            >
              <span
                className={cn(
                  "absolute shadow-button backdrop-blur-3xl bg-primary-900 top-0 left-0 w-full h-full rounded-[100px] -z-10 transition-all duration-500",
                  {
                    "opacity-100": activeTab === item.id,
                    "opacity-0": activeTab !== item.id,
                  }
                )}
              />
              {item.title}
            </button>
          ))}
        </div>

        {/* Currency Selector */}
        <div className="flex items-center gap-2">
          <span>Currency:</span>
          <div className="rounded-[100px] bg-[#292929] backdrop-blur-3xl shadow-button-secondary p-1.5 flex ">
            {(["GBP", "USD"] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => handleCurrencyChange(curr)}
                className={cn(
                  "px-10 py-0.5 rounded-[100px] transition-all cursor-pointer",
                  currency === curr
                    ? "shadow-button backdrop-blur-3xl bg-primary-900"
                    : "hover:text-neutral-20"
                )}
              >
                {curr === "GBP" ? "£ GBP" : "$ USD"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Billing Period Selector */}
      <div className="flex items-center flex-wrap gap-4 justify-center mb-[4.75rem]">
        {billingPeriods.map((period) => (
          <Button
            key={period.id}
            onClick={() => handleBillingChange(period.id)}
            className={cn("py-3 px-6 min-w-48 font-normal", {
              "bg-primary-900/40 text-primary-500": billingPeriod === period.id,
            })}
            modifier="outline"
            intent="secondary"
          >
            <div className="flex items-center justify-center gap-2">
              <span>{period.label}</span>
              {period.discount && (
                <span className="bg-success-500 px-2 rounded-2xl text-neutral-0">
                  -{period.discount}
                </span>
              )}
              {period.badge && (
                <span className="bg-success-500 px-2 rounded-2xl text-neutral-0">
                  {period.badge}
                </span>
              )}
            </div>
          </Button>
        ))}
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-12">
        {getCurrentPlans().map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            billingPeriod={billingPeriod}
            currency={currency}
            onButtonClick={(plan) => console.log(plan)}
          />
        ))}
      </div>
    </div>
  );
};

export default WebsitePlanDetails;
