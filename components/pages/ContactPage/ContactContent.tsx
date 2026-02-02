import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactContent() {
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
                                        <p className="text-zinc-500">123 Business Avenue, Suite 100<br />Atlanta, GA 30303</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-navy/5 rounded-lg text-primary-navy">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary-navy">Phone Number</h4>
                                        <p className="text-zinc-500">404.752.0600</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary-navy/5 rounded-lg text-primary-navy">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-primary-navy">Email Address</h4>
                                        <p className="text-zinc-500">info@btcpa.net</p>
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
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-zinc-700 mb-2">First Name</label>
                                    <input type="text" id="firstName" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-zinc-700 mb-2">Last Name</label>
                                    <input type="text" id="lastName" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-zinc-700 mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-zinc-700 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-zinc-50 border border-zinc-200 focus:border-primary-navy focus:ring-1 focus:ring-primary-navy outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>

                            <button type="button" className="w-full px-8 py-4 rounded-full bg-primary-navy text-white hover:bg-secondary-navy transition-all font-bold shadow-lg flex items-center justify-center gap-2">
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
