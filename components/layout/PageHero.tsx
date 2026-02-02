'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, wordStagger, wordAnimation } from '@/utils/animations';

interface PageHeroProps {
    title?: React.ReactNode;
    heading?: string;
    highlightedHeading?: string;
    subtitle?: string;
    backgroundImage?: string;
    breadcrumbText?: string;
    altText?: string;
}

export default function PageHero({
    title,
    heading,
    highlightedHeading,
    subtitle,
    backgroundImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    breadcrumbText,
    altText
}: PageHeroProps) {
    return (
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-secondary-navy">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-secondary-navy/85 z-10"></div>
                <img
                    src={backgroundImage}
                    alt={altText || (heading ? `${heading} ${highlightedHeading || ''}` : typeof title === 'string' ? title : "Page Banner")}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <motion.div
                className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.h1
                    className="text-4xl md:text-6xl font-bold text-white mb-6"
                    variants={wordStagger}
                >
                    {heading ? (
                        <>
                            {heading.split(" ").map((word, i) => (
                                <motion.span
                                    key={`h-${i}`}
                                    variants={wordAnimation}
                                    className="inline-block mr-3"
                                >
                                    {word}
                                </motion.span>
                            ))}
                            {highlightedHeading && <br />}
                            {highlightedHeading && highlightedHeading.split(" ").map((word, i) => (
                                <motion.span
                                    key={`hh-${i}`}
                                    variants={wordAnimation}
                                    className="inline-block mr-3 text-accent-gold"
                                >
                                    {word}
                                </motion.span>
                            ))}
                        </>
                    ) : (
                        // Fallback for custom title node or simple string
                        typeof title === 'string' ? (
                            title.split(" ").map((word, i) => (
                                <motion.span
                                    key={i}
                                    variants={wordAnimation}
                                    className="inline-block mr-3"
                                >
                                    {word}
                                </motion.span>
                            ))
                        ) : (
                            <motion.span variants={wordAnimation} className="inline-block">
                                {title}
                            </motion.span>
                        )
                    )}
                </motion.h1>

                {subtitle && (
                    <motion.p
                        className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed"
                        variants={fadeInUp}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* Breadcrumb Links */}
                <motion.div
                    className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider"
                    variants={fadeInUp}
                >
                    <Link href="/" className="text-zinc-400 hover:text-accent-gold transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                    <span className="text-accent-gold">
                        {breadcrumbText || heading || title}
                    </span>
                </motion.div>
            </motion.div>
        </section>
    );
}
