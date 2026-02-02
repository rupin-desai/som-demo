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
                title={
                    <>
                        Your Trusted Partner in <br />
                        <span className="text-accent-gold">Accounting & Financial Services</span>
                    </>
                }
                breadcrumbText="About Us"
                subtitle="We are a premier Knowledge Processing Outsourcing (KPO) firm based in India, providing world-class services globally."
                backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            />
            <MissionVisionSection />
            <TeamSection />
            <WhyChooseUsSection />
            <WhyIndiaSection />
            <CTASection />
        </main>
    );
}
