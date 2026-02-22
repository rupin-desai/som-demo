'use client';

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Footer() {
    return (
        <footer className="bg-secondary-navy text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Column 1: Brand & About */}
                    <motion.div variants={fadeInUp}>
                        <div className="mb-6 bg-white p-2 w-fit rounded">
                            {/* Logo Placeholder - Adjust as needed */}
                            <span className="text-secondary-navy font-bold text-xl flex items-center gap-2">
                                <span className="text-2xl">CX</span> CoreAxis Global
                            </span>
                        </div>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            We believe that the best results come from true partnership.
                            Delivering financial confidence through expert
                            advisory and solutions.
                        </p>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-8">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'About Us', href: '/about/' },
                                { name: 'Services', href: '/services/' },
                                { name: 'Contact', href: '/contact/' },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 4: Get In Touch */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-8">
                            Get In Touch
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-zinc-300">
                                <MapPin className="w-5 h-5 text-accent-gold mt-1 shrink-0" />
                                <span>
                                    301, Ackruti Star, Central Road,<br />
                                    Marol MIDC, Andheri (E),<br />
                                    Mumbai 400 093
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                                <a href="tel:+917990968816" className="hover:text-white transition-colors">
                                    +91 79909 68816
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                                <a href="mailto:info@coreaxisglobe.com" className="hover:text-white transition-colors">
                                    info@coreaxisglobe.com
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>© 2026 CoreAxis Global. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
