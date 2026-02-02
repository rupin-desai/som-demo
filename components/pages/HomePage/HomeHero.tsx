export default function HomeHero() {
    return (
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-secondary-navy">
            {/* Background Image with Gradient Filter */}
            <div className="absolute inset-0 z-0">
                {/* Gradient: Opaque left -> Transparent right */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-navy via-secondary-navy/90 to-secondary-navy/10 z-10 mix-blend-normal"></div>
                <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </div>

            {/* Decorative Rings */}
            <div className="absolute top-0 right-0 h-full w-2/3 z-10 pointer-events-none overflow-hidden">
                {/* Outer Ring - More Right, Down */}
                <div className="absolute -right-[10%] top-[60%] -translate-y-1/2 w-[800px] h-[800px] rounded-full border-110 border-white/5"></div>
                {/* Inner Ring - More Right, Down */}
                <div className="absolute -right-40 top-[70%] -translate-y-1/2 w-[550px] h-[550px] rounded-full border-100 border-white/5"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                <div className="max-w-4xl text-left">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium  text-white leading-tighter mb-6">
                        Strategic <br />
                        guidance for <br />
                        <span className="text-accent-gold">growth</span>
                    </h1>

                    <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-normal mb-10 leading-tight">
                        Tax, Audit & Advisory Solutions Built <br />
                        for Today’s Businesses
                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3.5 rounded-full bg-accent-gold text-secondary-navy hover:bg-white hover:text-primary-navy transition-all font-bold text-base shadow-[0_0_15px_rgba(228,180,75,0.3)] hover:shadow-[0_0_20px_rgba(228,180,75,0.5)] cursor-pointer">
                            Explore Services
                        </button>
                        <button className="px-8 py-3.5 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-navy transition-all font-bold text-base cursor-pointer">
                            Connect Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
