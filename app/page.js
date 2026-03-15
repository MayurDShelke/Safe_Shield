import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ModerationTypesSection from "@/components/sections/ModerationTypesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofSection />
      <StatsSection />
      <ServicesSection />
      <ModerationTypesSection />
      <HowItWorksSection />
      <IndustriesSection />
      <WhyChooseSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
