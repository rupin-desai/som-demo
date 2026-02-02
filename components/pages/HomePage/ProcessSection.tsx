'use client';

export default function ProcessSection() {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            description: "We understand your business needs and requirements."
        },
        {
            number: "02",
            title: "Tailored Solution",
            description: "We create a customized outsourcing strategy."
        },
        {
            number: "03",
            title: "Onboarding & Integration",
            description: "Your dedicated team gets onboarded with full system integration."
        },
        {
            number: "04",
            title: "Ongoing Support",
            description: "We provide continuous support and performance monitoring."
        }
    ];

    return (
        <section className="py-12 bg-secondary-navy relative overflow-hidden">
            {/* Decorative Circle Top Right */}
            <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full border-[80px] border-white/5 pointer-events-none opacity-50"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent-gold font-bold tracking-widest uppercase text-base mb-4 block">
                        Our Working Process
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        A Simple & Seamless <br />
                        <span className="text-accent-gold">Outsourcing Process</span>
                    </h2>
                </div>

                {/* Grid of Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-primary-navy/30 border border-white/5 rounded-2xl p-6 hover:bg-primary-navy transition-all duration-300 group hover:-translate-y-1">
                            <div className="text-3xl font-bold text-accent-gold/40 mb-4 transition-colors">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 transition-colors group-hover:text-accent-gold">
                                {step.title}
                            </h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
