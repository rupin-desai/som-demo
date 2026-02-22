import HomeHero from "@/components/pages/HomePage/HomeHero";
import PhilosophySection from "@/components/pages/HomePage/PhilosophySection";
import ProcessSection from "@/components/pages/HomePage/ProcessSection";
import ServicesSection from "@/components/pages/HomePage/ServicesSection";
import IndustriesSection from "@/components/pages/HomePage/IndustriesSection";
import CultureSection from "@/components/pages/HomePage/CultureSection";
import CareersSection from "@/components/pages/HomePage/CareersSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CoreAxis Global | Bridging Complexity and Clarity",
  description: "Expert accounting, tax, and financial outsourcing services from India. Empowering global firms with top-tier talent and innovative solutions.",
};

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <HomeHero />
      <PhilosophySection />
      <ServicesSection />
      <ProcessSection />
      <IndustriesSection />
      <CultureSection />
      <CareersSection />
    </div>
  );
}
