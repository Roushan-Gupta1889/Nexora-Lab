import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <FooterSection />
    </main>
  );
}
