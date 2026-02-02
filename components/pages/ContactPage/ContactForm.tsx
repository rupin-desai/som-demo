'use client';

import { Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export default function ContactForm() {
    return (
        <motion.div
            className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-zinc-100"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
        >
            <h2 className="text-3xl font-bold text-secondary-navy mb-2">
                Send us a Message
            </h2>
            <p className="text-zinc-500 mb-8">
                Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Your Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary-navy">Your Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary-navy">Email Address</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Number */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary-navy">Phone Number (Optional)</label>
                        <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                    </div>

                    {/* Service Required */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary-navy">Service Required</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all text-zinc-600">
                            <option value="">Select a service</option>
                            <option value="accounting">Accounting & Bookkeeping</option>
                            <option value="tax">Tax Preparation</option>
                            <option value="payroll">Payroll Processing</option>
                            <option value="financial">Financial Analysis</option>
                        </select>
                    </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary-navy">Subject</label>
                    <input
                        type="text"
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                    />
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary-navy">Message</label>
                    <textarea
                        rows={4}
                        placeholder="Tell us more about your requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-secondary-navy text-white font-bold py-4 rounded-[20px] hover:bg-[#0B2C52] transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95"
                >
                    Send Message <Send className="w-4 h-4" />
                </button>
            </form>
        </motion.div>
    );
}
