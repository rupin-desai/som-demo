'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, wordStagger, wordAnimation } from '@/utils/animations';

export default function CultureSection() {
    return (
        <section className="py-16 md:py-20 bg-secondary-navy overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left Image Layout */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* White Border Frame with Custom Shape */}
                        <motion.div
                            className="bg-white p-2 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl relative z-10"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                alt="Our Team Culture"
                                className="w-full h-full object-cover rounded-tl-[90px] rounded-br-[90px] rounded-tr-2xl rounded-bl-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Right Content */}
                    <motion.div
                        className="w-full lg:w-1/2 text-left"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-accent-gold font-bold tracking-widest uppercase text-sm md:text-base mb-4 block"
                        >
                            Our Culture
                        </motion.span>

                        <motion.h2
                            variants={wordStagger}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                        >
                            <span className="block">
                                {["Our", "Team,", "Your"].map((word, i) => (
                                    <motion.span key={i} variants={wordAnimation} className="inline-block mr-2 md:mr-3">
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="block">
                                {["Success"].map((word, i) => (
                                    <motion.span key={i} variants={wordAnimation} className="inline-block mr-2 md:mr-3">
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h2>

                        <motion.p
                            variants={fadeInUp}
                            className="text-zinc-300 mb-8 leading-relaxed text-base md:text-lg"
                        >
                            We believe that happy employees lead to happy clients.
                            Our unique culture fosters collaboration, innovation, and
                            a relentless commitment to excellence. When our team
                            thrives, so does your business.
                        </motion.p>

                        <motion.div variants={fadeInUp}>
                            <Link
                                href="/about"
                                className="inline-block px-8 py-3 md:px-10 md:py-4 rounded-full bg-accent-gold text-secondary-navy font-bold text-base hover:bg-white hover:text-primary-navy transition-all shadow-lg hover:shadow-xl"
                            >
                                Meet Our Team
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
