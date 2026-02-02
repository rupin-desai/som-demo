'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight, staggerContainer, wordStagger, wordAnimation } from '@/utils/animations';

export default function PhilosophySection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-accent-gold font-bold tracking-widest uppercase text-lg mb-4 block"
                        >
                            Our Philosophy
                        </motion.span>

                        <motion.h2
                            variants={wordStagger}
                            className="text-5xl md:text-6xl font-bold text-secondary-navy mb-8 leading-tight"
                        >
                            <span className="block">
                                {["A", "Collaborative"].map((word, i) => (
                                    <motion.span key={i} variants={wordAnimation} className="inline-block mr-3">
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="block">
                                {["Approach"].map((word, i) => (
                                    <motion.span key={i} variants={wordAnimation} className="inline-block mr-3">
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h2>

                        <motion.h3
                            variants={fadeInUp}
                            className="text-2xl font-bold text-primary-navy mb-6"
                        >
                            Your goals are our goals. We don't just work for you; we work with you.
                        </motion.h3>

                        <motion.p
                            variants={fadeInUp}
                            className="text-zinc-600 mb-10 leading-relaxed text-xl"
                        >
                            We believe that the best results come from true partnership.
                            By combining our deep technical expertise with a genuine
                            understanding of your business, we create solutions that drive
                            real value and long-term success.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <Link
                                href="/about"
                                className="inline-flex items-center text-primary-navy font-bold text-xl hover:text-accent-gold transition-colors relative pb-1 group"
                            >
                                Read Our Story
                                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                <span className="block w-full h-0.5 bg-accent-gold absolute bottom-0 left-0"></span>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right Image Layout */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Background Beige Shape */}
                        <div className="absolute top-10 right-0 w-[90%] h-full bg-[#F5F2Eb] rounded-bl-[100px] -z-10 translate-x-10 translate-y-10"></div>

                        <motion.div
                            className="relative z-10"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
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
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
