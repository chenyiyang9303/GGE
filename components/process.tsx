"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Target, 
  Code2, 
  Rocket,
  ArrowRight
} from "lucide-react";

export function Process() {
  return (
    <div
      id="process"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From initial assessment to successful implementation, we guide you through 
            every step of building a fundable startup.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              step={1}
              icon={<Search className="h-8 w-8" />}
              title="Discovery & Diagnosis"
              description="We analyze your idea, market opportunity, and current challenges to understand your unique situation."
              details={[
                "Market research & validation",
                "Competitive analysis",
                "Business model assessment",
                "Technical feasibility review"
              ]}
              delay={0}
            />
            
            <ProcessStep
              step={2}
              icon={<Target className="h-6 w-6" />}
              title="Strategy & Planning"
              description="Together, we create a comprehensive roadmap tailored to your specific goals and constraints."
              details={[
                "Business strategy formulation",
                "Go-to-market planning", 
                "Technical architecture design",
                "Funding strategy development"
              ]}
              delay={0.2}
            />
            
            <ProcessStep
              step={3}
              icon={<Code2 className="h-6 w-6" />}
              title="Implementation"
              description="We work alongside your team to execute the plan, providing hands-on guidance and expertise."
              details={[
                "MVP development guidance",
                "Team building support",
                "Process optimization",
                "Performance monitoring"
              ]}
              delay={0.4}
            />
            
            <ProcessStep
              step={4}
              icon={<Rocket className="h-6 w-6" />}
              title="Growth & Scale"
              description="We help you prepare for the next level with funding preparation and scaling strategies."
              details={[
                "Investor pitch preparation",
                "Due diligence support",
                "Scaling strategy",
                "Ongoing advisory"
              ]}
              delay={0.6}
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="inline-flex items-center gap-3 bg-blue-50 dark:bg-blue-900/20 px-6 py-3 rounded-full"
          >
            <span className="text-blue-600 dark:text-blue-400 font-medium">
              Ready to start your journey?
            </span>
            <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
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
      className="relative group"
    >
      <div className="text-center">
        {/* Step Number and Icon */}
        <div className="relative mx-auto w-20 h-20 mb-6">
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full group-hover:scale-110 transition-transform duration-300" />
          <div className="absolute inset-2 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-700 dark:group-hover:bg-blue-400 transition-colors duration-300">
            {step}
          </div>
          <div className="absolute inset-0 flex items-center justify-center text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {icon}
          </div>
        </div>

        {/* Content */}
        <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-100 mb-3">
          {title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Details */}
        <ul className="text-sm text-neutral-500 dark:text-neutral-500 space-y-1">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center justify-center gap-2">
              <div className="w-1 h-1 rounded-full bg-blue-500 flex-shrink-0" />
              {detail}
            </li>
          ))}
        </ul>
      </div>

      {/* Connecting Arrow (visible on desktop) */}
      {step < 4 && (
        <div className="hidden md:block absolute top-10 -right-4 text-blue-400 dark:text-blue-600">
          <ArrowRight className="h-6 w-6" />
        </div>
      )}
    </motion.div>
  );
};