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
import { SectionReveal } from "@/components/layout/SectionReveal";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <SectionReveal>
        <TrustSection />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <WhyChooseUsSection />
      </SectionReveal>

      <SectionReveal>
        <ServicesSection />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <PortfolioSection />
      </SectionReveal>

      <SectionReveal>
        <ProcessSection />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <TestimonialSection />
      </SectionReveal>

      <SectionReveal>
        <TeamSection />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <FAQSection />
      </SectionReveal>

      <SectionReveal>
        <CTASection />
      </SectionReveal>

      <FooterSection />

      <ScrollToTop />
    </main>
  );
}
