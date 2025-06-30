"use client";
import { useEffect, useState } from "react";
import Button from "@/components/ui/button";
import WhatsappIcon from "@/components/ui/icons/whatsapp-icon";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";
import LaunchAProjectBtn from "./launch-a-project-btn";
import axios from "axios";
import { ISiteSettings } from "@/types/common.types";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Company",
    href: "#company",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [siteSettings, setSiteSettings] = useState<ISiteSettings | null>(null);

  useEffect(() => {
    const getSiteSettings = async () => {
      const res = await axios.get("/api/site-settings");

      return res.data as ISiteSettings;
    };

    getSiteSettings().then((data) => {
      setSiteSettings(data);
    });
  }, []);

  console.log("siteSettings", siteSettings);

  const whatsappLink = siteSettings?.footer_settings.footer_social_links.find(
    (item) => item.obc_social_link_title == "WhatsApp"
  );

  return (
    <nav className="relative">
      <Image
        src="/images/nav-bg.png"
        width={1920}
        height={400}
        alt="nav-bg"
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full"
      />
      <div className="container py-6">
        {/* Desktop Layout */}
        <div className="flex items-center justify-between gap-4">
          <Link href="/">
            <Image
              src="/images/omulod-logo-white.svg"
              width={152}
              height={32}
              alt="omulod-logo-white"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-semibold hover:text-primary-500 transition-all",
                  {
                    "text-primary-500": item.href === "/",
                  }
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* <Button intent="secondary" size="small">
              Launch a project
            </Button> */}
            <LaunchAProjectBtn />

            <Link
              href={
                whatsappLink?.obc_social_link_url ||
                "https://wa.me/+447438283469"
              }
              target="_blank"
            >
              <Button intent="secondary" size="small" className="!p-2.5">
                <WhatsappIcon />
              </Button>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex flex-col gap-1 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "w-6 h-0.5 bg-white transition-all",
                isOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 w-full transition-all duration-300 z-50",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          )}
        >
          <div className="container bg-neutral-900 py-6 px-4 space-y-6 border border-surface-border rounded-2xl">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block font-semibold hover:text-primary-500 transition-all py-2",
                    {
                      "text-primary-500": item.href === "/",
                    }
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Buttons */}
            <div className="border-t border-surface-border flex items-center gap-4 pt-4">
              {/* <Button intent="secondary" size="small">
                Launch a project
              </Button> */}

              <LaunchAProjectBtn />
              <Link
                href={
                  whatsappLink?.obc_social_link_url ||
                  "https://wa.me/+447438283469"
                }
                target="_blank"
              >
                <Button intent="secondary" size="small" className="!p-2.5">
                  <WhatsappIcon />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
