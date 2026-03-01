"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "@/utils/animations";

export default function ServiceDetails() {
  const services = [
    {
      title: "Accounting & Bookkeeping",
      image: "/images/home_accounting.png",
      features: [
        "General Ledger & Trial Balance Preparation",
        "Accounts Payable & Receivable Management",
        "Financial Statement Preparation",
        "Bank & Credit Card Reconciliations",
        "Cloud-Based Accounting Support (Xero, QuickBooks, Sage, etc.)",
      ],
      link: "/contact",
    },
    {
      title: "Tax & Compliance",
      image: "/images/home_tax.png",
      features: [
        "Corporate & Individual Tax Returns",
        "VAT/GST & Sales Tax Filings",
        "Tax Planning & Advisory",
        "IRS & HMRC Compliance Support",
      ],
      link: "/contact",
    },
    {
      title: "Payroll Processing",
      image: "/images/home_payroll.png",
      features: [
        "Payroll Setup & Processing",
        "Payslip Generation & Compliance Reporting",
        "Superannuation & Pension Contributions",
        "End-of-Year Payroll Reconciliation",
      ],
      link: "/contact",
    },
    {
      title: "Legal",
      image: "/images/home_legal.png",
      features: [
        "Company Formation",
        "Legal Documentation",
        "Corporate Legal Advisory",
        "Contract Drafting and Review",
        "Regulatory and Compliance Services",
      ],
      link: "/contact",
    },
    {
      title: "Budget / Forecasting",
      image: "/images/home_budget.png",
      features: [
        "Strategic Budgeting",
        "Financial Planning",
        "Revenue and Expense Projection",
        "Cash Flow Optimization",
        "Cost Control",
        "Risk Assessment",
      ],
      link: "/contact",
    },
    {
      title: "CFO Services",
      image: "/images/home_cfo.png",
      features: [
        "Strategic Financial Leadership",
        "Accurate Reporting & Cash Flow Management",
        "Profit Optimization & Cost Control",
        "Fundraising & Investor Support",
        "Data-Driven Insights for Scalable Growth",
      ],
      link: "/contact",
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
          >
            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-4">
                {service.title}
              </h2>
              {/* Gold Underline */}
              <div className="w-24 h-1 bg-accent-gold mb-8"></div>

              <ul className="space-y-4 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="shrink-0">
                      <div className="w-6 h-6 rounded-full border border-zinc-200 flex items-center justify-center bg-white">
                        <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                      </div>
                    </div>
                    <span className="text-secondary-navy font-bold text-lg">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="inline-flex items-center gap-2 text-secondary-navy font-bold hover:text-accent-gold transition-colors duration-300 group"
              >
                Inquire About This Service
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Image Side */}
            <motion.div
              className="w-full lg:w-1/2 relative flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
            >
              {/* Decorative Container depending on index to vary style or keep consistent */}
              <div
                className={`relative rounded-[50px] overflow-hidden shadow-2xl w-full max-w-lg aspect-auto ${index % 2 === 1 ? "border-12 border-[#F5F2Eb]" : "border-12 border-white"}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
