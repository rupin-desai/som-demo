'use client';

import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function ContactInfo() {
    return (
        <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Call Us */}
            <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 flex items-start gap-4"
            >
                <div className="w-12 h-12 rounded-2xl bg-[#ecf2ff] flex items-center justify-center shrink-0 text-[#4c82f7]">
                    <Phone className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-secondary-navy text-lg mb-1">Call Us</h3>
                    <p className="text-secondary-navy font-bold">404.752.0600</p>
                    <p className="text-zinc-500 text-sm">Mon-Fri from 9am to 6pm.</p>
                </div>
            </motion.div>

            {/* Email Us */}
            <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 flex items-start gap-4"
            >
                <div className="w-12 h-12 rounded-2xl bg-[#fff4de] flex items-center justify-center shrink-0 text-[#ffa800]">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-secondary-navy text-lg mb-1">Email Us</h3>
                    <p className="text-secondary-navy font-bold">info@btcpa.net</p>
                    <p className="text-zinc-500 text-sm">We'll respond within 24 hours.</p>
                </div>
            </motion.div>

            {/* Visit Us */}
            <motion.div
                variants={fadeInUp}
                className="bg-white p-6 rounded-3xl shadow-sm border border-zinc-100 flex items-start gap-4"
            >
                <div className="w-12 h-12 rounded-2xl bg-[#e0f7f2] flex items-center justify-center shrink-0 text-[#00bfa5]">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-bold text-secondary-navy text-lg mb-1">Visit Us</h3>
                    <p className="text-secondary-navy font-bold">India Operations Center</p>
                    <p className="text-zinc-500 text-sm">Strategic KPO Hub, India</p>
                </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
                variants={fadeInUp}
                className="bg-secondary-navy p-8 rounded-[30px] shadow-lg text-white"
            >
                <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-accent-gold" />
                    <span className="font-bold text-lg">Business Hours</span>
                </div>
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-gray-300">Monday - Friday</span>
                        <span className="font-bold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                        <span className="text-gray-300">Saturday</span>
                        <span className="font-bold text-accent-gold">Closed</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300">Sunday</span>
                        <span className="font-bold text-accent-gold">Closed</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
