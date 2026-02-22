'use client';

import { useState, useRef } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'
            );

            setStatus('success');
            setStatusMessage('Message sent successfully! We will get back to you soon.');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setStatusMessage('Failed to send message. Please try again or email us directly.');
        }
    };

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

            {status === 'success' && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-medium">{statusMessage}</span>
                </div>
            )}

            {status === 'error' && (
                <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">{statusMessage}</span>
                </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Your Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary-navy">Your Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary-navy">Email Address</label>
                        <input
                            type="email"
                            name="user_email"
                            required
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
                            name="user_phone"
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                        />
                    </div>

                    {/* Service Required */}
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-secondary-navy">Service Required</label>
                        <select
                            name="service"
                            className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all text-zinc-600"
                        >
                            <option value="">Select a service</option>
                            <option value="Accounting & Bookkeeping">Accounting & Bookkeeping</option>
                            <option value="Tax Preparation">Tax Preparation</option>
                            <option value="Payroll Processing">Payroll Processing</option>
                            <option value="Financial Analysis">Financial Analysis</option>
                        </select>
                    </div>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary-navy">Subject</label>
                    <input
                        type="text"
                        name="subject"
                        required
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all"
                    />
                </div>

                {/* Message */}
                <div className="space-y-2">
                    <label className="text-sm font-bold text-secondary-navy">Message</label>
                    <textarea
                        rows={4}
                        name="message"
                        required
                        placeholder="Tell us more about your requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-accent-gold/50 focus:border-accent-gold transition-all resize-none"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={`w-full font-bold py-4 rounded-[20px] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform active:scale-95 ${status === 'sending'
                            ? 'bg-zinc-400 cursor-not-allowed text-white'
                            : 'bg-secondary-navy text-white hover:bg-[#0B2C52] cursor-pointer'
                        }`}
                >
                    {status === 'sending' ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <>
                            <span>Send Message</span> <Send className="w-4 h-4" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
}

