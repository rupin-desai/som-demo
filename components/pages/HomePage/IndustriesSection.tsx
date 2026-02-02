'use client';

export default function IndustriesSection() {
    const industries = [
        {
            title: "Accounting & CPA Firms",
            description: "Full-cycle bookkeeping and financial statement preparation specialized for CPA firms.",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "E-commerce & Retail",
            description: "Inventory management and multi-channel sales tax compliance for modern retailers.",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Hospitality & Restaurants",
            description: "Specialized accounting for restaurants, hotels, and travel services.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Real Estate & Construction",
            description: "Project-based accounting, job costing, and tax planning for developers and contractors.",
            image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1996&auto=format&fit=crop"
        },
        {
            title: "Healthcare & Medical Practices",
            description: "Revenue cycle management and compliance for medical practices.",
            image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Financial Services & Wealth Management",
            description: "Strategic financial insights and reporting for wealth management firms.",
            image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-20 bg-[#F5F2Eb]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold tracking-widest uppercase text-base mb-4 block">
                        Our Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy leading-tight">
                        Industries We Serve
                    </h2>
                    <p className="mt-4 text-zinc-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        We provide specialized accounting outsourcing services to firms across multiple industries.
                    </p>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-secondary-navy mb-4">
                                    {industry.title}
                                </h3>

                                <p className="text-zinc-600 leading-relaxed">
                                    {industry.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
