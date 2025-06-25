import HomeBlock from "@/components/pages/home/_home-block";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Omulod",
};

export default function Home() {
  return <HomeBlock />;
}
