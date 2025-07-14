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
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-4">
            Our Consulting Process
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            From in-depth research to strategic implementation, we provide comprehensive 
            guidance for clean energy companies to achieve transformation from planning to success.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              step={1}
              icon={<Search className="h-8 w-8" />}
              title="In-Depth Research & Analysis"
              description="Comprehensive understanding of company status, market environment, and industry trends to identify key opportunities and challenges."
              details={[
                "Company status deep diagnosis",
                "Market environment analysis",
                "Competitive landscape research",
                "Policy environment assessment"
              ]}
              delay={0}
            />
            
            <ProcessStep
              step={2}
              icon={<Target className="h-6 w-6" />}
              title="Strategic Planning & Development"
              description="Based on research results, develop practical development strategies and detailed execution pathways."
              details={[
                "Precise development strategy",
                "Market entry strategy design", 
                "Technology roadmap guidance",
                "Business model optimization"
              ]}
              delay={0.2}
            />
            
            <ProcessStep
              step={3}
              icon={<Lightbulb className="h-6 w-6" />}
              title="Implementation & Execution"
              description="Work closely with company teams, providing professional guidance to ensure effective strategy execution."
              details={[
                "Detailed implementation design",
                "Team capability building",
                "Process control & optimization",
                "Key milestone monitoring"
              ]}
              delay={0.4}
            />
            
            <ProcessStep
              step={4}
              icon={<TrendingUp className="h-6 w-6" />}
              title="Continuous Optimization"
              description="Track results and continuously optimize to ensure companies achieve sustainable development and long-term success."
              details={[
                "Performance evaluation & analysis",
                "Continuous improvement",
                "Scalable development support",
                "Long-term strategic advisory"
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
              Ready to start your clean energy journey?
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