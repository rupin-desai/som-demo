'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, wordStagger, wordAnimation } from '@/utils/animations';

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            description: "We understand your business needs and requirements."
        },
        {
            number: "02",
            title: "Tailored Solution",
            description: "We create a customized outsourcing strategy."
        },
        {
            number: "03",
            title: "Onboarding & Integration",
            description: "Your dedicated team gets onboarded with full system integration."
        },
        {
            number: "04",
            title: "Ongoing Support",
            description: "We provide continuous support and performance monitoring."
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-secondary-navy relative overflow-hidden">
            {/* Decorative Circle Top Right */}
            <div className="absolute -top-20 -right-20 w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-60 md:border-80 border-white/5 pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <motion.span
                            variants={fadeInUp}
                            className="text-accent-gold font-bold tracking-widest uppercase text-sm md:text-base mb-4 block"
                        >
                            Our Working Process
                        </motion.span>
                        <motion.h2
                            variants={wordStagger}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                        >
                            <span className="block">
                                {["A", "Simple", "&", "Seamless"].map((word, i) => (
                                    <motion.span key={i} variants={wordAnimation} className="inline-block mr-2 md:mr-3">
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                            <span className="text-accent-gold block">
                                {["Outsourcing", "Process"].map((word, i) => (
                                    <motion.span key={i} variants={wordAnimation} className="inline-block mr-2 md:mr-3">
                                        {word}
                                    </motion.span>
                                ))}
                            </span>
                        </motion.h2>
                    </div>

                    {/* Grid of Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="bg-primary-navy/30 border border-white/5 rounded-2xl p-6 hover:bg-primary-navy transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="text-3xl font-bold text-accent-gold/40 mb-4 transition-colors">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-accent-gold">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
