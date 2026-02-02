'use client';

import Link from 'next/link';

export default function CultureSection() {
    return (
        <section className="py-20 bg-secondary-navy overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Image Layout */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* White Border Frame with Custom Shape */}
                        <div className="bg-white p-2 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl overflow-hidden shadow-2xl relative z-10">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                alt="Our Team Culture"
                                className="w-full h-full object-cover rounded-tl-[90px] rounded-br-[90px] rounded-tr-2xl rounded-bl-2xl"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 text-left">
                        <span className="text-accent-gold font-bold tracking-widest uppercase text-base mb-4 block">
                            Our Culture
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Our Team, Your <br /> Success
                        </h2>

                        <p className="text-zinc-300 mb-8 leading-relaxed text-lg">
                            We believe that happy employees lead to happy clients.
                            Our unique culture fosters collaboration, innovation, and
                            a relentless commitment to excellence. When our team
                            thrives, so does your business.
                        </p>

                        <Link
                            href="/about"
                            className="inline-block px-10 py-4 rounded-full bg-accent-gold text-secondary-navy font-bold text-base hover:bg-white hover:text-primary-navy transition-all shadow-lg hover:shadow-xl"
                        >
                            Meet Our Team
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
