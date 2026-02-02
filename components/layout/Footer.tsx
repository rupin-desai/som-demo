'use client';

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/utils/animations";

export default function Footer() {
    return (
        <footer className="bg-secondary-navy text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
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
                        <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
                            We believe that the best results come from true partnership.
                            Delivering financial confidence since 1980 through expert
                            advisory and solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary-navy flex items-center justify-center hover:bg-accent-gold hover:text-secondary-navy transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary-navy flex items-center justify-center hover:bg-accent-gold hover:text-secondary-navy transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary-navy flex items-center justify-center hover:bg-accent-gold hover:text-secondary-navy transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-primary-navy flex items-center justify-center hover:bg-accent-gold hover:text-secondary-navy transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Column 2: Quick Links */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-8">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Our Services', 'Meet Our Team', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Expertise */}
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-accent-gold font-bold tracking-widest uppercase text-sm mb-8">
                            Expertise
                        </h3>
                        <ul className="space-y-4">
                            {['Tax & Compliance', 'Audit & Assurance', 'Business Advisory', 'Wealth Management', 'Client Accounting'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-zinc-300 hover:text-white hover:translate-x-1 transition-all inline-block">
                                        {item}
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
                                    3310 Northside Parkway<br />
                                    Suite 600<br />
                                    Atlanta, GA 30327
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                                <a href="tel:7703962200" className="hover:text-white transition-colors">
                                    770.396.2200
                                </a>
                            </li>
                            <li className="flex items-center gap-3 text-zinc-300">
                                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                                <a href="mailto:info@btcpa.net" className="hover:text-white transition-colors">
                                    info@btcpa.net
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
