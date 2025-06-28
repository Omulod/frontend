"use client";

import Button from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const HomeHeroStrategyBtn = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#000" },
          dark: { "cal-brand": "#C69749" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div>
      <Button
        intent="secondary"
        data-cal-namespace="30min"
        data-cal-link="omulod/30min"
        data-cal-config='{"layout":"month_view"}'
      >
        Book a free strategy call
      </Button>
    </div>
  );
};

export default HomeHeroStrategyBtn;
