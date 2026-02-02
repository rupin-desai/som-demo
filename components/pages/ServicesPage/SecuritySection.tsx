'use client';

import { CheckCircle2, Cloud, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function SecuritySection() {
    const platforms = [
        "Xero",
        "QuickBooks",
        "Sage",
        "NetSuite",
        "MYOB",
        "FreshBooks"
    ];

    const securityFeatures = [
        "End-to-End Data Encryption",
        "GDPR & HIPAA Compliance",
        "Multi-Factor Authentication",
        "Secure Access Controls"
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#e4b44b 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy mb-4">
                        Securing Your <span className="text-accent-gold">Financial Future</span>
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        Enterprise-grade security meets industry-leading cloud platforms.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Platform Expertise Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-secondary-navy rounded-[40px] p-10 md:p-12 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-6 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-accent-gold text-secondary-navy flex items-center justify-center shrink-0 shadow-lg">
                                <Cloud className="w-8 h-8 stroke-[2.5]" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Platform Expertise
                                </h3>
                                <p className="text-gray-400">
                                    Certified cloud accounting specialists.
                                </p>
                            </div>
                        </div>

                        {/* List */}
                        <ul className="space-y-6">
                            {platforms.map((platform, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-transparent group-hover:border-accent-gold/50 transition-colors duration-300">
                                        <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                                    </div>
                                    <span className="text-white text-lg font-bold tracking-wide">
                                        {platform}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Data Integrity Card */}
                    <motion.div
                        variants={fadeInUp}
                        className="bg-secondary-navy rounded-[40px] p-10 md:p-12 shadow-2xl relative overflow-hidden group"
                    >
                        {/* Header */}
                        <div className="flex items-start gap-6 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-transparent border-2 border-accent-gold text-accent-gold flex items-center justify-center shrink-0 shadow-lg">
                                <Lock className="w-8 h-8 stroke-[2.5]" />
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                    Data Integrity
                                </h3>
                                <p className="text-gray-400">
                                    Uncompromising compliance standards.
                                </p>
                            </div>
                        </div>

                        {/* List */}
                        <ul className="space-y-6">
                            {securityFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-transparent group-hover:border-accent-gold/50 transition-colors duration-300">
                                        <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                                    </div>
                                    <span className="text-white text-lg font-bold tracking-wide">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
