import HomeBlock from "@/components/pages/home/_home-block";
import { ISiteSettings } from "@/types/common.types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omulod",
};

export const revalidate = 60; // revalidate at every 60 seconds

export const getSiteSettings = async (): Promise<ISiteSettings | null> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/omulod/site-settings`
    );

    const _response = await res.json();

    return _response.data as ISiteSettings;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export default async function Home() {
  const siteSettings = await getSiteSettings();

  return <HomeBlock siteSettings={siteSettings} />;
}
