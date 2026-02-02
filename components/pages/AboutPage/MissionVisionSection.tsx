'use client';

export default function MissionVisionSection() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 relative">
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy inline-block relative pb-4">
                        Our Mission & Vision
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-accent-gold rounded-full"></span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content - Cards */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {/* Mission Card */}
                        <div className="bg-secondary-navy p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-xl font-bold text-accent-gold mb-4 uppercase tracking-wider">
                                Our Mission
                            </h3>
                            <p className="text-white leading-relaxed text-lg">
                                Our mission is to help businesses optimize their
                                financial operations while ensuring compliance with
                                international accounting standards. We bridge the
                                gap between complexity and clarity.
                            </p>
                        </div>

                        {/* Vision Card */}
                        <div className="bg-secondary-navy p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                            <h3 className="text-xl font-bold text-accent-gold mb-4 uppercase tracking-wider">
                                Our Vision
                            </h3>
                            <p className="text-white leading-relaxed text-lg italic">
                                "To be the most reliable and efficient outsourcing
                                partner for accounting firms worldwide, enabling them
                                to focus on <span className="text-accent-gold font-bold not-italic">growth, profitability, and client success.</span>"
                            </p>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative">
                 

                            {/* Image Container */}
                            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-6 border-[#F5F2Eb] max-w-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                    alt="Our Mission and Vision"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
