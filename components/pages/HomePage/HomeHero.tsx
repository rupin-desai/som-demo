'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInRight, staggerContainer, wordStagger, wordAnimation } from '@/utils/animations';

export default function HomeHero() {
    return (
        <section className="relative min-h-svh md:min-h-[700px] flex items-center overflow-hidden bg-secondary-navy">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 bg-black">
                <picture className="w-full h-full">
                    <source media="(max-width: 767px)" srcSet="/images/home_hero_mobile.png" />
                    <img
                        src="/images/home_hero.png"
                        alt="Hero Background"
                        className="w-full h-full object-cover block"
                    />
                </picture>
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Decorative Rings - Hidden on Mobile/Tablet */}
            <div className="hidden lg:block absolute top-0 right-0 h-full w-2/3 z-10 pointer-events-none overflow-hidden">
                {/* Outer Ring */}
                <div className="absolute -right-[10%] top-[60%] -translate-y-1/2">
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-[800px] h-[800px] rounded-full border-110 border-white/5"
                    ></motion.div>
                </div>

                {/* Inner Ring */}
                <div className="absolute -right-40 top-[70%] -translate-y-1/2">
                    <motion.div
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-[550px] h-[550px] rounded-full border-100 border-white/5"
                    ></motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full pt-20 md:pt-0">
                <motion.div
                    className="max-w-4xl text-left"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.h1
                        variants={wordStagger}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-6 tracking-tight"
                    >
                        {/* Row 1 */}
                        <span className="block">
                            {["Strategic"].map((word, i) => (
                                <motion.span key={i} variants={wordAnimation} className="inline-block mr-2 sm:mr-3">
                                    {word}
                                </motion.span>
                            ))}
                        </span>

                        {/* Row 2 */}
                        <span className="block">
                            {["guidance", "for"].map((word, i) => (
                                <motion.span key={i} variants={wordAnimation} className="inline-block mr-2 sm:mr-3">
                                    {word}
                                </motion.span>
                            ))}
                        </span>

                        {/* Row 3 */}
                        <span className="text-accent-gold block">
                            {["growth"].map((word, i) => (
                                <motion.span key={i} variants={wordAnimation} className="inline-block mr-2 sm:mr-3">
                                    {word}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>

                    <motion.h2
                        variants={fadeInUp}
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 font-normal mb-8 md:mb-10 leading-relaxed max-w-2xl"
                    >
                        Audit, Legal & Advisory Solutions Built for Today’s Businesses
                    </motion.h2>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-gold text-secondary-navy hover:bg-white hover:text-primary-navy transition-all font-bold text-base shadow-[0_0_15px_rgba(228,180,75,0.3)] hover:shadow-[0_0_20px_rgba(228,180,75,0.5)] cursor-pointer active:scale-95 text-center">
                            Explore Services
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-navy transition-all font-bold text-base cursor-pointer active:scale-95 text-center">
                            Connect Now
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
