'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function CareersSection() {
    return (
        <section className="py-20 bg-[#F5F2Eb] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy mb-6">
                            Join Us
                        </h2>

                        <h3 className="text-xl md:text-2xl font-bold text-secondary-navy mb-6 leading-tight">
                            We are one of the largest and fastest-growing certified public accounting and consulting firms.
                        </h3>

                        <p className="text-zinc-600 mb-8 leading-relaxed text-lg">
                            Consistently named one of the Best Accounting Firms to Work
                            for in the United States by Accounting Today, Bennett Thrasher
                            offers you the opportunities of a large accounting firm, with a
                            collaborative, fun culture and a flexible, supportive work
                            atmosphere.
                        </p>

                        <Link
                            href="/careers"
                            className="inline-flex items-center px-8 py-3 rounded-full bg-white text-secondary-navy font-bold text-base hover:shadow-lg transition-all border border-zinc-100 group"
                        >
                            Explore Careers
                            <span className="ml-3 flex items-center justify-center w-6 h-6 rounded-full bg-accent-gold text-white group-hover:bg-secondary-navy transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </div>

                    {/* Right Image Layout */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* White Border Frame with Custom Shape */}
                        <div className="bg-white p-2 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Careers at Our Firm"
                                className="w-full h-full object-cover rounded-tl-[90px] rounded-br-[90px] rounded-tr-2xl rounded-bl-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
