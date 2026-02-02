'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about/' },
        { name: 'Services', href: '/services/' },
        { name: 'Contact', href: '/contact/' },
    ];

    return (
        <header className="w-full z-50">
            {/* Top Bar - Darker Blue */}
            <div className="bg-[#03213f] text-white text-sm sm:text-base py-2 border-b border-white/10 hidden md:block">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
                    <div className="flex items-center space-x-6">
                        <a href="tel:4047520600" className="flex items-center hover:text-[#e4b44b] transition-colors gap-2">
                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-[#e4b44b]" /> <span>404.752.0600</span>
                        </a>
                        <a href="mailto:info@btcpa.net" className="flex items-center hover:text-[#e4b44b] transition-colors gap-2">
                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-[#e4b44b]" /> <span>info@btcpa.net</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Link href="#" className="hover:text-[#e4b44b] transition-colors">Online Payments & Client Resources</Link>
                        <Link href="#" className="hover:text-[#e4b44b] transition-colors">Careers</Link>
                    </div>
                </div>
            </div>

            {/* Main Bar - Blue */}
            <nav className="bg-[#06356b] shadow-lg relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="shrink-0 flex items-center bg-white px-6 py-3 rounded-sm shadow-sm relative z-50">
                            <Link href="/" className="flex items-center gap-2">
                                <div className="text-[#03213f] font-bold text-2xl tracking-tighter uppercase leading-none">
                                    CoreAxis <br /> <span className="text-green-600">Global</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex flex-1 justify-center space-x-12 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`font-medium uppercase tracking-wider text-lg transition-colors relative group ${isActive(link.href) ? 'text-[#e4b44b]' : 'text-white hover:text-[#e4b44b]'
                                        }`}
                                >
                                    {link.name}
                                    {isActive(link.href) && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 bottom-[-4px] block w-full h-[2px] bg-[#e4b44b]"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Link href="/contact" className="px-8 py-3 rounded-full bg-[#e4b44b] text-[#03213f] hover:bg-white hover:text-[#06356b] transition-all font-bold text-sm uppercase shadow-[0_0_15px_rgba(228,180,75,0.5)] hover:shadow-[0_0_20px_rgba(228,180,75,0.7)] tracking-wide cursor-pointer active:scale-95">
                                Connect Now
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#e4b44b] focus:outline-none transition-colors"
                            >
                                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay & Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ transform: 'translate3d(100%, 0, 0)' }}
                            animate={{ transform: 'translate3d(0, 0, 0)' }}
                            exit={{ transform: 'translate3d(100%, 0, 0)' }}
                            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
                            className="fixed top-0 right-0 h-dvh w-[80%] max-w-sm bg-[#06356b] shadow-2xl z-50 lg:hidden flex flex-col overflow-y-auto"
                        >
                            <div className="flex justify-end p-6">
                                {/* Close button handled by the main navbar toggle, but extra spacing here */}
                            </div>

                            <div className="flex flex-col px-8 pt-10 space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-2xl font-bold uppercase tracking-wider transition-colors ${isActive(link.href) ? 'text-[#e4b44b]' : 'text-white hover:text-[#e4b44b]'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="inline-block mt-8 text-center px-6 py-4 rounded-full bg-[#e4b44b] text-[#03213f] font-bold uppercase shadow-lg"
                                >
                                    Connect Now
                                </Link>

                                {/* Mobile Contact Info */}
                                <div className="mt-10 pt-10 border-t border-white/10 flex flex-col gap-4 text-zinc-400">
                                    <a href="tel:4047520600" className="flex items-center gap-3 hover:text-white transition-colors">
                                        <Phone className="w-5 h-5 text-[#e4b44b]" /> <span>404.752.0600</span>
                                    </a>
                                    <a href="mailto:info@btcpa.net" className="flex items-center gap-3 hover:text-white transition-colors">
                                        <Mail className="w-5 h-5 text-[#e4b44b]" /> <span>info@btcpa.net</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
