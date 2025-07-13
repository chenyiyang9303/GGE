"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Code, 
  DollarSign, 
  Users, 
  Target,
  Lightbulb,
  Shield,
  BarChart3
} from "lucide-react";

export function Services() {
  return (
    <div
      id="services"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          Services for Seed-Stage Startups
        </h2>
      </Header>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        From idea validation to market entry, we provide comprehensive consulting 
        to help you build a scalable, fundable business.
      </p>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ServiceCard
          icon={<Lightbulb className="h-6 w-6" />}
          title="Business Strategy & Validation"
          description="Validate your idea, define your business model, and create a roadmap for sustainable growth."
          features={["Market research & analysis", "Business model canvas", "Competitive landscape", "Go-to-market strategy"]}
        />
        
        <ServiceCard
          icon={<Code className="h-6 w-6" />}
          title="Technical Architecture"
          description="Build scalable tech infrastructure from day one with our experienced engineering guidance."
          features={["Technology stack selection", "System architecture design", "Development roadmap", "Technical debt prevention"]}
        />
        
        <ServiceCard
          icon={<DollarSign className="h-6 w-6" />}
          title="Funding & Investment"
          description="Prepare for funding rounds with pitch decks, financial models, and investor connections."
          features={["Pitch deck creation", "Financial modeling", "Investor introductions", "Due diligence prep"]}
        />
        
        <ServiceCard
          icon={<Users className="h-6 w-6" />}
          title="Team Building"
          description="Hire the right people at the right time and build a strong company culture."
          features={["Hiring strategy", "Interview processes", "Equity planning", "Culture development"]}
        />
        
        <ServiceCard
          icon={<Target className="h-6 w-6" />}
          title="Product-Market Fit"
          description="Find and optimize your product-market fit through data-driven experimentation."
          features={["User research", "MVP development", "A/B testing", "Metrics & analytics"]}
        />
        
        <ServiceCard
          icon={<BarChart3 className="h-6 w-6" />}
          title="Growth & Scaling"
          description="Scale your operations, processes, and team as you grow from startup to scale-up."
          features={["Operations optimization", "Process documentation", "Performance metrics", "Scaling strategy"]}
        />
      </div>
    </div>
  );
}

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-fit mx-auto p-4 flex items-center justify-center">
      <motion.div
        initial={{
          width: 0,
          height: 0,
          borderRadius: 0,
        }}
        whileInView={{
          width: "100%",
          height: "100%",
        }}
        style={{
          transformOrigin: "top-left",
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full border border-neutral-200 dark:border-neutral-800 w-full"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -top-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -left-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute -bottom-1 -right-1 h-2 w-2 dark:bg-neutral-800 bg-neutral-200"
        />
      </motion.div>
      {children}
    </div>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  features,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group p-6 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-all duration-200"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
          {icon}
        </div>
        <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
      </div>
      
      <p className="text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
        {description}
      </p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};