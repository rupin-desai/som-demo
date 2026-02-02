'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Mail, Menu, X } from 'lucide-react'; // Assuming lucide-react is available or use SVGs

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full z-50">
            {/* Top Bar - Darker Blue */}
            <div className="bg-[#03213f] text-white text-sm sm:text-base py-2 border-b border-white/10">
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
            <nav className="bg-[#06356b] shadow-lg relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center bg-white px-6 py-3 rounded-sm shadow-sm">
                            {/* Placeholder Logo */}
                            <Link href="/" className="flex items-center gap-2">
                                <div className="text-[#03213f] font-bold text-2xl tracking-tighter uppercase leading-none">
                                    CoreAxis <br /> <span className="text-green-600">Global</span>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex flex-1 justify-center space-x-12 items-center">
                            <Link href="/" className="text-white hover:text-[#e4b44b] font-medium uppercase tracking-wider text-lg transition-colors">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:text-[#e4b44b] font-medium uppercase tracking-wider text-lg transition-colors">
                                About Us
                            </Link>
                            <Link href="/services" className="text-white hover:text-[#e4b44b] font-medium uppercase tracking-wider text-lg transition-colors">
                                Services
                            </Link>
                            <Link href="/contact" className="text-white hover:text-[#e4b44b] font-medium uppercase tracking-wider text-lg transition-colors">
                                Contact
                            </Link>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Link href="/contact" className="px-8 py-3 rounded-full bg-[#e4b44b] text-[#03213f] hover:bg-white hover:text-[#06356b] transition-all font-bold text-sm uppercase shadow-[0_0_15px_rgba(228,180,75,0.5)] hover:shadow-[0_0_20px_rgba(228,180,75,0.7)] tracking-wide">
                                Connect Now
                            </Link>
                        </div>
                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#e4b44b] focus:outline-none transition-colors"
                            >
                                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden bg-[#06356b] border-t border-white/10 absolute w-full left-0 z-50 shadow-xl">
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-white hover:text-[#e4b44b] uppercase tracking-wider">
                                Home
                            </Link>
                            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-white hover:text-[#e4b44b] uppercase tracking-wider">
                                About Us
                            </Link>
                            <Link href="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-white hover:text-[#e4b44b] uppercase tracking-wider">
                                Services
                            </Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-bold text-white hover:text-[#e4b44b] uppercase tracking-wider">
                                Contact
                            </Link>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="block mt-4 text-center px-3 py-3 rounded-full bg-[#e4b44b] text-[#03213f] font-bold uppercase">
                                Connect Now
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
