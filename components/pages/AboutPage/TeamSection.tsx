'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animations';

export default function TeamSection() {
    const teams = [
        {
            title: "Certified Accountants & Tax Professionals",
            description: "Our experts hold global certifications ensuring top-tier accuracy and compliance.",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2064&auto=format&fit=crop"
        },
        {
            title: "Experienced Payroll Specialists",
            description: "Dedicated specialists managing complex payroll requirements across multiple jurisdictions.",
            image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Skilled Bookkeepers & Compliance Experts",
            description: "Ensuring your records are meticulous and fully compliant with international standards.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <section className="py-20 bg-[#F5F2Eb]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary-navy mb-4">
                        Our Team
                    </h2>
                    <p className="text-zinc-600 text-lg">
                        Highly skilled professionals dedicated to your success.
                    </p>
                </motion.div>

                {/* Team Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teams.map((team, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-[40px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            variants={fadeInUp}
                        >
                            {/* Image Container */}
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={team.image}
                                    alt={team.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-secondary-navy mb-4 leading-tight">
                                    {team.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    {team.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
