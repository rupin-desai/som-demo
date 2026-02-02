import PageHero from "@/components/layout/PageHero";
import ServiceDetails from "@/components/pages/ServicesPage/ServiceDetails";
import SecuritySection from "@/components/pages/ServicesPage/SecuritySection";
import CTASection from "@/components/layout/CTASection";

export default function ServicesPage() {
    return (
        <main>
            <PageHero
                title={
                    <>
                        Comprehensive Solutions for <br />
                        <span className="text-accent-gold">Your Business Growth</span>
                    </>
                }
                breadcrumbText="Services"
                subtitle="Comprehensive accounting and financial solutions tailored to your business needs."
                backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop"
            />
            <ServiceDetails />
            <SecuritySection />
            <CTASection />
        </main>
    );
}
