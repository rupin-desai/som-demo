'use client';

import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function ContactContent() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('sending');

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_an2bbwg',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_bbz95bp',
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YiToMl-fBuN5f-Rv-'
            );

            setStatus('success');
            setMessage('Your message has been sent successfully! We will get back to you soon.');
            formRef.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again later or contact us directly.');
        }
    };

    return (
        <section className="py-20 bg-zinc-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">Get in Touch</h1>
                    <p className="text-zinc-600 max-w-2xl mx-auto">
                        We are here to help and answer any question you might have. We look forward to hearing from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100">
                            <h3 className="text-2xl font-bold text-primary-navy mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-navy/5 rounded-lg text-primary-navy">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary-navy">Our Location</h4>
                                        <p className="text-zinc-500">301, Ackruti Star, Central Road,<br />Marol MIDC, Andheri (E), Mumbai 400 093</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-navy/5 rounded-lg text-primary-navy">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary-navy">Phone Number</h4>
                                        <p className="text-zinc-500">+91 79909 68816</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-navy/5 rounded-lg text-primary-navy">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary-navy">Email Address</h4>
                                        <p className="text-zinc-500">info@coreaxisglobe.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="aspect-video bg-zinc-200 rounded-2xl w-full flex items-center justify-center text-zinc-400 font-medium">
                            Google Maps Embed Placeholder
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-accent-gold">
                        <h3 className="text-2xl font-bold text-primary-navy mb-6">Send us a Message</h3>

                        {status === 'success' && (
                            <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>{message}</span>
                            </div>
                        )}

                        {status === 'error' && (
                            <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3">
                                <AlertCircle className="w-5 h-5" />
                                <span>{message}</span>
                            </div>
                        )}

                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-2">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="first_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="last_name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="user_email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className={`w-full px-8 py-4 rounded-full transition-all font-bold shadow-lg flex items-center justify-center gap-2 ${status === 'sending'
                                    ? 'bg-zinc-400 cursor-not-allowed text-white'
                                    : 'bg-primary-navy text-white hover:bg-secondary-navy cursor-pointer'
                                    }`}
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
