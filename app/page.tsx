import Hero from "@/components/sections/hero";
import MonexoIntroSection from "@/components/sections/monexo-intro-section";
import SmartTrading from "@/components/sections/smart-trading";
import MarketOverview from "@/components/sections/market-overview";
import PlatformHighlights from "@/components/sections/platform-highlights";
import PartnershipPrograms from "@/components/sections/partnership-programs";
import Pricing from "@/components/sections/pricing";
import OurPlatform from "@/components/sections/our-platform";
import WhyMonexo from "@/components/sections/why-monexo";
import FAQ from "@/components/sections/faq";
import CtaBanner from "@/components/sections/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MonexoIntroSection />
      <SmartTrading />
      <MarketOverview />
      <PlatformHighlights />
      <PartnershipPrograms />
      <Pricing />
      <OurPlatform />
      <WhyMonexo />
      <FAQ />
      <CtaBanner />
    </>
  );
}