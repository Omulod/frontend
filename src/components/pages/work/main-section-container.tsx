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
import ResultMetricsSection from "./result-metrics-section";
import ClientReviewSection from "./client-review-section";

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
  const [isUserScrolling, setIsUserScrolling] = useState(false);

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

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Adjust these margins to control when sections become active
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Only update active section if user is not currently clicking/navigating
      if (isUserScrolling) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const hash = `#${id}`;

          // Update active hash without changing URL
          setActiveHash(hash);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    const sectionIds = tabLinks.map((link) => link.href.substring(1));
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Special handling for overview section (top of page)
    const handleScroll = () => {
      if (isUserScrolling) return;

      if (window.scrollY < 200) {
        // Increased threshold for overview
        setActiveHash("#overview");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isUserScrolling]);

  // Handle smooth scrolling with better control
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Set flag to prevent scroll listener from interfering
    setIsUserScrolling(true);

    // Update URL and active state immediately
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

    // Reset the flag after scroll animation completes
    setTimeout(() => {
      setIsUserScrolling(false);
    }, 1000); // Adjust timing based on your scroll animation duration
  };

  return (
    <div className="py-14 relative bg-neutral-900">
      <div className="container grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-3 bg-neutral-0/5 p-8 rounded-3xl lg:sticky top-8 self-start">
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
        <div className="lg:col-span-9 flex flex-col gap-10">
          <BusinessNeedsSection />
          <ChallengeSection />
          <ProblemSolutionSection />
          <UiUxDesignSection />
          <DesignProcessSection />
          <MobileFirstDesignSection />
          <DevelopmentSection />
          <ResultMetricsSection />
          <ClientReviewSection />
        </div>
      </div>
    </div>
  );
};

export default MainSectionContainer;
