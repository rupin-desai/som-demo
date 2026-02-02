'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function AboutHero() {
    return (
        <section className="relative py-24 bg-primary-navy overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 Q 50 50 100 100 L 100 0 L 0 0 Z" fill="#fff" />
                </svg>
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    variants={fadeInUp}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                >
                    About <span className="text-accent-gold">Us</span>
                </motion.h1>
                <motion.p
                    variants={fadeInUp}
                    className="max-w-3xl mx-auto text-lg text-zinc-300 leading-relaxed"
                >
                    We are a team of dedicated professionals committed to delivering excellence.
                    Our mission is to empower businesses with innovative solutions and unparalleled service.
                </motion.p>
            </motion.div>
        </section>
    );
}
