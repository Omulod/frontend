"use client";
import { useState } from "react";
import Button from "@/components/ui/button";
import WhatsappIcon from "@/components/ui/icons/whatsapp-icon";
import { cn } from "@/helpers/cn";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Works",
    href: "#works",
  },
  {
    label: "Dedicated team",
    href: "#dedicated-team",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Company",
    href: "#company",
  },
  {
    label: "Blog",
    href: "#blog",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative">
      <Image
        src="/images/nav-bg.png"
        width={1920}
        height={400}
        alt="nav-bg"
        className="absolute top-0 left-1/2 -translate-x-1/2 -z-10"
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
            <Button intent="secondary" size="small">
              Launch a project
            </Button>
            <Button intent="secondary" size="small" className="!p-2.5">
              <WhatsappIcon />
            </Button>
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
          <div className="container bg-neutral-900 py-6 px-4 space-y-6 border border-neutral-500 rounded-2xl">
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
            <div className="border-t border-neutral-500 flex items-center gap-4 pt-4">
              <Button intent="secondary" size="small">
                Launch a project
              </Button>
              <Button intent="secondary" size="small" className="!p-2.5">
                <WhatsappIcon />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
