import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/common/footer/_footer";
import Navbar from "@/components/common/navbar/_navbar";
import MSClarity from "@/helpers/ms-clarity";
import GoogleAnalytics from "@/helpers/google-analytics";

export const metadata: Metadata = {
  title: {
    default: "Omulod",
    template: "%s | Omulod",
  },
  description: "Omulod - Global Design & Development Agency",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [
      {
        url: "https://omulod.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Omulod",
      },
    ],
  },
  keywords: [
    "Omulod",
    "UI UX Design Agency",
    "Product Design",
    "SaaS Website Design",
    "Web Development",
    "Mobile App Development",
    "Startup MVP Design",
    "Branding Agency",
    "WordPress Developer",
    "No-code Development",
    "LMS UX Design",
    "Enterprise Website Design",
    "Dedicated Development Team",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex min-h-screen flex-col`}>
        <Navbar />
        <main className="flex grow flex-col">{children}</main>
        <Footer />
        <GoogleAnalytics />
        <MSClarity />
      </body>
    </html>
  );
}
