'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PhilosophySection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-accent-gold font-bold tracking-widest uppercase text-lg mb-4 block">
                            Our Philosophy
                        </span>

                        <h2 className="text-5xl md:text-6xl font-bold text-secondary-navy mb-8 leading-tight">
                            A Collaborative <br /> Approach
                        </h2>

                        <h3 className="text-2xl font-bold text-primary-navy mb-6">
                            Your goals are our goals. We don't just work for you; we work with you.
                        </h3>

                        <p className="text-zinc-600 mb-10 leading-relaxed text-xl">
                            We believe that the best results come from true partnership.
                            By combining our deep technical expertise with a genuine
                            understanding of your business, we create solutions that drive
                            real value and long-term success.
                        </p>

                        <Link
                            href="/about"
                            className="inline-flex items-center text-primary-navy font-bold text-xl hover:text-accent-gold transition-colors relative pb-1"
                        >
                            Read Our Story
                            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            <span className="block w-full h-0.5 bg-accent-gold absolute bottom-0 left-0"></span>
                        </Link>
                    </div>

                    {/* Right Image Layout */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Background Beige Shape */}
                        <div className="absolute top-10 right-0 w-[90%] h-full bg-[#F5F2Eb] rounded-bl-[100px] -z-10 translate-x-10 translate-y-10"></div>

                        <div className="relative z-10">
                            {/* Translucent Gold Shadow Shape */}
                            <div className="absolute top-5 left-5 w-full h-full bg-accent-gold/40 rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl -z-10"></div>

                            {/* Image Container with Custom Border Radius */}
                            <div className="rounded-tl-[80px] rounded-br-[80px] rounded-tr-xl rounded-bl-xl overflow-hidden shadow-xl bg-white p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Collaborative Team"
                                    className="w-full h-full object-cover rounded-tl-[70px] rounded-br-[70px] rounded-tr-lg rounded-bl-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
