import type { Metadata } from "next";
import CurrenciesSection from "@/components/sections/currencies";

export const metadata: Metadata = { title: "Currencies" };

export default function CurrenciesPage() {
  return <CurrenciesSection />;
}
