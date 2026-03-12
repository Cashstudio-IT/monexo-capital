import type { Metadata } from "next";
import CommoditiesSection from "@/components/sections/commodities";

export const metadata: Metadata = { title: "Commodities" };

export default function CommoditiesPage() {
  return <CommoditiesSection />;
}
