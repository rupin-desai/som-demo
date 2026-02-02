import HomeHero from "@/components/pages/HomePage/HomeHero";
import PhilosophySection from "@/components/pages/HomePage/PhilosophySection";
import ProcessSection from "@/components/pages/HomePage/ProcessSection";
import ServicesSection from "@/components/pages/HomePage/ServicesSection";
import IndustriesSection from "@/components/pages/HomePage/IndustriesSection";
import CultureSection from "@/components/pages/HomePage/CultureSection";
import CareersSection from "@/components/pages/HomePage/CareersSection";

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
