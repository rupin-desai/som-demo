import PageHero from "@/components/layout/PageHero";
import MissionVisionSection from "@/components/pages/AboutPage/MissionVisionSection";
import TeamSection from "@/components/pages/AboutPage/TeamSection";
import WhyChooseUsSection from "@/components/pages/AboutPage/WhyChooseUsSection";
import WhyIndiaSection from "@/components/pages/AboutPage/WhyIndiaSection";
import CTASection from "@/components/layout/CTASection";

export default function AboutPage() {
    return (
        <main>
            <PageHero
                heading="Your Trusted Partner in"
                highlightedHeading="Accounting & Financial Services"
                breadcrumbText="About Us"
                subtitle="We are a premier Knowledge Processing Outsourcing (KPO) firm based in India, providing world-class services globally."
                backgroundImage="/images/about_hero.png"
            />
            <MissionVisionSection />
            <TeamSection />
            <WhyChooseUsSection />
            <WhyIndiaSection />
            <CTASection />
        </main>
    );
}
