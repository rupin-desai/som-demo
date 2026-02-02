import PageHero from "@/components/layout/PageHero";
import CultureSection from "@/components/pages/HomePage/CultureSection";

export default function CareersPage() {
    return (
        <main>
            <PageHero
                title="Careers"
                subtitle="Join our team and be part of a collaborative, innovative, and growth-oriented culture."
                backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            />
            <CultureSection />
        </main>
    );
}
