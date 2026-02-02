'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function WhyIndiaSection() {
    const benefits = [
        {
            label: "EXPERTISE",
            title: "Highly Qualified Talent",
            description: "Access a pool of CA, CPA, ACCA, and experienced professionals with deep technical expertise."
        },
        {
            label: "50% SAVINGS",
            title: "Cost Efficiency",
            description: "Optimize your bottom line by saving up to 50% on operational and overhead costs."
        },
        {
            label: "OVERNIGHT DELIVERY",
            title: "Time Zone Advantage",
            description: "Benefit from work done overnight for faster turnaround times and 24/7 productivity."
        },
        {
            label: "COMPLIANT",
            title: "Global Standards",
            description: "Total fluency in US GAAP, IFRS, Australian & UK Tax Laws, and international compliance."
        }
    ];

    return (
        <section className="py-12 bg-secondary-navy relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full border-60 border-white/5 translate-x-1/2 -translate-y-1/2 opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full border-40 border-white/5 -translate-x-1/2 translate-y-1/3 opacity-30 pointer-events-none"></div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Header */}
                <motion.div className="text-center mb-16" variants={fadeInUp}>
                    <p className="text-accent-gold font-bold tracking-[0.2em] text-sm uppercase mb-4">
                        Strategic Advantage
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Why Outsource to <span className="text-accent-gold">India?</span>
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                        India is a global leader in <span className="text-white font-semibold">accounting and financial outsourcing</span>, offering an unmatched combination of talent, efficiency, and technological prowess.
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#0B2C52] border border-white/10 rounded-3xl p-8 hover:border-accent-gold/50 transition-colors duration-300 group"
                            variants={fadeInUp}
                        >
                            <span className="inline-block bg-accent-gold text-secondary-navy text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-6">
                                {benefit.label}
                            </span>
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-gold transition-colors duration-300">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Quote Box */}
                <motion.div
                    className="w-full bg-accent-gold/5 border border-accent-gold/30 rounded-[24px] px-8 py-3 md:px-12 md:py-4 text-center relative backdrop-blur-sm"
                    variants={fadeInUp}
                >
                    <p className="text-white text-lg md:text-xl font-medium italic leading-relaxed">
                        "India remains the top choice for <span className="text-accent-gold">quality-driven financial outsourcing</span>, providing seamless integration with global accounting workflows."
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}
