'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: string;
    backgroundImage?: string;
    breadcrumbText?: string;
    altText?: string;
}

export default function PageHero({
    title,
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
                    alt={altText || (typeof title === 'string' ? title : "Page Banner")}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {title}
                </h1>

                {subtitle && (
                    <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                        {subtitle}
                    </p>
                )}

                {/* Breadcrumb Links */}
                <div className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wider">
                    <Link href="/" className="text-zinc-400 hover:text-accent-gold transition-colors">
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4 text-zinc-500" />
                    <span className="text-accent-gold">
                        {breadcrumbText || title}
                    </span>
                </div>
            </div>
        </section>
    );
}
