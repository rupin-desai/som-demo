'use client';

import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/utils/animations';

export default function WhyChooseUsSection() {
    const reasons = [
        {
            title: "Dedicated Accounting Professionals",
            description: "Access highly qualified accountants and tax specialists."
        },
        {
            title: "Cost-Effective Solutions",
            description: "Reduce overhead costs while maintaining top-tier quality."
        },
        {
            title: "Scalability & Flexibility",
            description: "Scale your team up or down based on your needs."
        },
        {
            title: "Global Compliance Expertise",
            description: "Stay ahead of international accounting standards."
        },
        {
            title: "Advanced Technology",
            description: "Leverage cloud-based accounting and automation tools."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-stretch gap-16">
                    {/* Left Image Side */}
                    <motion.div
                        className="w-full lg:w-1/2 relative min-h-[600px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInLeft}
                    >
                        <div className="h-full rounded-[60px] overflow-hidden shadow-2xl border-[#f5f2ea] border-6">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                                alt="Why Choose Us"
                                className="w-full h-full object-cover"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-8 -right-8 bg-accent-gold text-secondary-navy p-7 rounded-3xl shadow-xl max-w-[250px] border-5 border-white/80">
                                <p className="font-bold text-left leading-tight text-sm md:text-lg">
                                    EMPOWERING FIRMS WITH GLOBAL TALENT
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content Side */}
                    <motion.div
                        className="w-full lg:w-1/2 flex flex-col justify-center"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div className="mb-8" variants={fadeInUp}>
                            <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy mb-6">
                                Why Choose Us?
                            </h2>
                            <p className="text-zinc-600 text-lg leading-relaxed">
                                Unlock the full potential of your firm with our expert <span className="font-bold text-secondary-navy">Knowledge Processing Outsourcing (KPO)</span> services. Specializing in Accounting, Tax, Payroll, and Bookkeeping, we provide seamless support to businesses worldwide from our highly skilled team in India.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-5 p-5 rounded-2xl bg-[#F5F2Eb] hover:shadow-md transition-all duration-300"
                                    variants={fadeInUp}
                                >
                                    <div className="shrink-0">
                                        <div className="w-10 h-10 rounded-lg bg-secondary-navy flex items-center justify-center shadow-sm">
                                            <CheckCircle2 className="w-5 h-5 text-accent-gold" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-secondary-navy mb-1">
                                            {reason.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
