'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function CTASection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-secondary-navy rounded-[50px] p-12 md:p-20 text-center shadow-2xl relative overflow-hidden group">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <motion.div
                        className="relative z-10 max-w-4xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
                        >
                            Ready to optimize your <br className="hidden md:block" />
                            <span className="text-accent-gold">financial operations?</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                        >
                            Partner with India's premier KPO firm and gain access to top-tier accounting talent today.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-accent-gold text-secondary-navy font-bold px-8 py-4 rounded-full hover:bg-white transition-colors duration-300 transform hover:scale-105"
                            >
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-secondary-navy transition-all duration-300"
                            >
                                Contact Us
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
