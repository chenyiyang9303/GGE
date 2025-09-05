"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  Lightbulb, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

export function Process() {
  return (
    <div
      id="process"
      className="w-full mx-auto bg-white dark:bg-gray-900 py-24 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-accent-900 dark:text-white mb-4">
            Proven Path to Market Success
          </h2>
          <p className="text-lg text-accent-600 dark:text-accent-300 max-w-3xl mx-auto">
            Our battle-tested 4-phase methodology has generated $5M+ in client value and delivered 3x faster time-to-market across 20+ clean energy projects.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProcessStep
              step={1}
              icon={<Search className="h-8 w-8" />}
              title="Discovery & Market Intelligence"
              description="Uncover hidden opportunities through deep market analysis and competitive intelligence that reveals your path to market leadership."
              details={[
                "Market opportunity mapping",
                "Competitive white space identification",
                "Regulatory landscape & policy impact analysis",
                "Technology readiness & IP gap assessment"
              ]}
              delay={0}
            />
            
            <ProcessStep
              step={2}
              icon={<Target className="h-8 w-8" />}
              title="Strategy Design & Roadmap Creation"
              description="Craft winning strategies with clear ROI projections. Our strategic roadmaps deliver measurable results within 6-12 months."
              details={[
                "Revenue-optimized go-to-market strategy",
                "Multi-channel market penetration plan", 
                "Innovation pipeline & R&D prioritization",
                "Scalable business model architecture"
              ]}
              delay={0.1}
            />
            
            <ProcessStep
              step={3}
              icon={<Lightbulb className="h-8 w-8" />}
              title="Execution & Rapid Deployment"
              description="Transform strategy into results with hands-on execution support. Our clients achieve 85% faster implementation than industry benchmarks."
              details={[
                "Agile execution frameworks",
                "Cross-functional team alignment",
                "Performance tracking & optimization",
                "Risk mitigation & course correction"
              ]}
              delay={0.2}
            />
            
            <ProcessStep
              step={4}
              icon={<TrendingUp className="h-8 w-8" />}
              title="Scale & Continuous Growth"
              description="Achieve sustainable growth with ongoing optimization. Our clients maintain 40%+ annual growth rates with our continuous improvement framework."
              details={[
                "Real-time performance analytics",
                "Market expansion opportunities",
                "Operational efficiency optimization",
                "Strategic partnership development"
              ]}
              delay={0.3}
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-flex items-center gap-3 bg-primary-50 dark:bg-primary-900/20 px-8 py-4 rounded-full border border-primary-200 dark:border-primary-800"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
              Ready to unlock your market opportunity?
            </span>
            <ArrowRight className="h-5 w-5 text-primary-600 dark:text-primary-400" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const ProcessStep = ({
  step,
  icon,
  title,
  description,
  details,
  delay,
}: {
  step: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative group bg-white dark:bg-gray-800 rounded-2xl p-8 border border-accent-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-600 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="text-left">
        {/* Step Number and Icon */}
        <div className="relative w-16 h-16 mb-6">
          <div className="absolute inset-0 bg-primary-100 dark:bg-primary-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-1 bg-primary-600 dark:bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold text-lg group-hover:bg-primary-700 dark:group-hover:bg-primary-400 transition-colors duration-300">
            {step}
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-primary-600 dark:text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-display text-xl font-bold text-accent-900 dark:text-white mb-4">
          {title}
        </h3>
        
        <p className="text-accent-600 dark:text-accent-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Details */}
        <ul className="text-sm text-accent-500 dark:text-accent-400 space-y-3">
          {details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0 mt-1.5" />
              <span className="leading-relaxed">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};