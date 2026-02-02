'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection() {
    const services = [
        {
            title: "Accounting & Bookkeeping",
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Tax Preparation & Compliance",
            image: "https://images.unsplash.com/photo-1554224154-260327c00c19?q=80&w=2065&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Payroll Processing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
            link: "#"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold tracking-widest uppercase text-base mb-4 block">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy leading-tight">
                        Backed by Deep Industry Knowledge
                    </h2>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-zinc-100 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden relative">
                                <div className="absolute inset-0 bg-secondary-navy/10 group-hover:bg-transparent transition-colors z-10"></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-secondary-navy mb-8 min-h-[64px]">
                                    {service.title}
                                </h3>

                                <Link
                                    href={service.link}
                                    className="inline-flex items-center text-primary-navy font-bold text-base hover:text-accent-gold transition-colors group/link"
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
