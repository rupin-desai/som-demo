import PageHero from "@/components/layout/PageHero";
import ContactInfo from "@/components/pages/ContactPage/ContactInfo";
import ContactForm from "@/components/pages/ContactPage/ContactForm";

export default function ContactPage() {
    return (
        <main className="bg-[#FAFAFA]">
            <PageHero
                title={
                    <>
                        Get in Touch with our <br />
                        <span className="text-accent-gold">Global Support Team</span>
                    </>
                }
                breadcrumbText="Contact"
                subtitle="Ready to transform your financial operations? Our team is here to help you every step of the way."
                backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />

            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                        {/* Left Column: Contact Info */}
                        <div className="w-full lg:w-1/3">
                            <ContactInfo />
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="w-full lg:w-2/3">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
