"use client";

import { cn } from "@/helpers/cn";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import BusinessNeedsSection from "./business-needs-section";
import ChallengeSection from "./challenge-section";
import ProblemSolutionSection from "./problem-solution-section";
import UiUxDesignSection from "./ui-ux-design-section";
import DesignProcessSection from "./design-process-section";
import MobileFirstDesignSection from "./mobile-first-design-section";
import DevelopmentSection from "./development-section";

const tabLinks = [
  { title: "Overview", href: "#overview" },
  { title: "Business Needs", href: "#business-needs" },
  { title: "Challenge", href: "#challenge" },
  { title: "Problems & Solutions", href: "#problems-solutions" },
  { title: "UX/UI Design", href: "#ux-ui-design" },
  { title: "Design Process & Mockups", href: "#design-process" },
  { title: "Mobile First Design", href: "#mobile-first-design" },
  { title: "Development", href: "#development" },
  { title: "Result & metrics", href: "#result-metrics" },
  { title: "Client review", href: "#client-review" },
];

const MainSectionContainer = () => {
  const [activeHash, setActiveHash] = useState<string>("#overview");

  // Update hash when URL changes
  useEffect(() => {
    const updateHash = () => {
      const hash = window.location.hash || "#overview";
      setActiveHash(hash);
    };

    updateHash(); // On mount
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  // Handle smooth scrolling with better control
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Update URL
    window.history.pushState(null, "", href);
    setActiveHash(href);

    // Smooth scroll to element
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // For the first section (overview), scroll to top of page
      if (targetId === "overview") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // Get the element's position relative to the document
        const rect = targetElement.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const offsetTop = rect.top + scrollTop - 120; // 120px offset for better positioning

        window.scrollTo({
          top: Math.max(0, offsetTop), // Ensure we don't scroll to negative values
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div className="py-14 relative bg-neutral-900">
      <div className="container grid grid-cols-12 gap-8">
        <div className="col-span-3 bg-neutral-0/5 p-8 rounded-3xl sticky top-8 self-start">
          <div className="flex flex-col gap-3.5">
            {tabLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={cn(
                  "block text-lg py-2 px-4 rounded-[100px] hover:shadow-button-secondary transition-all duration-200",
                  {
                    "shadow-button-secondary bg-neutral-800/50":
                      activeHash === item.href,
                  }
                )}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-span-9 flex flex-col gap-10">
          <BusinessNeedsSection />
          <ChallengeSection />
          <ProblemSolutionSection />
          <UiUxDesignSection />
          <DesignProcessSection />
          <MobileFirstDesignSection />
          <DevelopmentSection />
        </div>
      </div>
    </div>
  );
};

export default MainSectionContainer;
