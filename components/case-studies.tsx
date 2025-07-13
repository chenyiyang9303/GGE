"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, DollarSign, TrendingUp } from "lucide-react";
import Image from "next/image";

export function CaseStudies() {
  return (
    <div
      id="case-studies"
      className="w-full mx-auto bg-neutral-50 dark:bg-neutral-900 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            See how we've helped seed-stage startups transform their ideas into 
            successful, fundable businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CaseStudyCard
            company="TechFlow AI"
            industry="AI/SaaS"
            challenge="A computer vision startup needed to validate their business model and prepare for Series A funding."
            solution="We helped redesign their architecture for scale, created a comprehensive business plan, and connected them with relevant investors."
            results={[
              { metric: "ARR Growth", value: "0 → $2.4M" },
              { metric: "Team Size", value: "3 → 25 people" },
              { metric: "Funding Raised", value: "$8M Series A" }
            ]}
            timeline="8 months"
            image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop"
          />

          <CaseStudyCard
            company="GreenCart"
            industry="E-commerce"
            challenge="A sustainable e-commerce platform struggling with technical debt and unclear go-to-market strategy."
            solution="We rebuilt their tech stack, defined their market positioning, and implemented data-driven growth strategies."
            results={[
              { metric: "Revenue Growth", value: "300% in 6 months" },
              { metric: "Customer Base", value: "5K → 50K users" },
              { metric: "Tech Performance", value: "90% faster load times" }
            ]}
            timeline="6 months"
            image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
          />

          <CaseStudyCard
            company="HealthLink"
            industry="HealthTech"
            challenge="A digital health startup needed regulatory guidance and investor-ready documentation for their telemedicine platform."
            solution="We provided regulatory compliance consulting, created investor materials, and helped establish key partnerships."
            results={[
              { metric: "Compliance", value: "HIPAA certified" },
              { metric: "Partnerships", value: "12 healthcare providers" },
              { metric: "Seed Funding", value: "$3.2M raised" }
            ]}
            timeline="10 months"
            image="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop"
          />

          <CaseStudyCard
            company="EduNext"
            industry="EdTech"
            challenge="An online learning platform needed product-market fit and a scalable business model before expanding internationally."
            solution="We conducted extensive user research, optimized their product offering, and developed an international expansion strategy."
            results={[
              { metric: "User Retention", value: "40% → 85%" },
              { metric: "Market Expansion", value: "3 new countries" },
              { metric: "Revenue Per User", value: "2.5x increase" }
            ]}
            timeline="7 months"
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
          />
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            View more case studies
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const CaseStudyCard = ({
  company,
  industry,
  challenge,
  solution,
  results,
  timeline,
  image,
}: {
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  timeline: string;
  image: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={company}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold">{company}</h3>
          <p className="text-sm opacity-90">{industry}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Challenge
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {challenge}
          </p>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
            Our Solution
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {solution}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 mb-4">
          {results.map((result, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 dark:border-neutral-700 last:border-b-0">
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {result.metric}
              </span>
              <span className="font-semibold text-neutral-800 dark:text-neutral-100">
                {result.value}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-500 dark:text-neutral-400">
            Timeline: {timeline}
          </span>
          <motion.div
            whileHover={{ x: 3 }}
            className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium cursor-pointer"
          >
            Read full case study
            <ArrowUpRight className="h-3 w-3" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};