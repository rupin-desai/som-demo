import PageHero from "@/components/layout/PageHero";
import ServiceDetails from "@/components/pages/ServicesPage/ServiceDetails";
import SecuritySection from "@/components/pages/ServicesPage/SecuritySection";
import CTASection from "@/components/layout/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | CoreAxis Global",
    description: "Explore our comprehensive accounting and financial solutions, from tax preparation to payroll processing, designed for business growth.",
};

export default function ServicesPage() {
    return (
        <main>
            <PageHero
                heading="Comprehensive Solutions for"
                highlightedHeading="Your Business Growth"
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
