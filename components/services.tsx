"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Users, 
  Target,
  Lightbulb,
  Zap,
  Globe
} from "lucide-react";

export function Services() {
  return (
    <div
      id="services"
      className="w-full mx-auto bg-white dark:bg-neutral-950 py-20 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-800 dark:text-neutral-100">
          Clean Energy Consulting Services
        </h2>
      </Header>
      <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
        From market analysis to technology upgrades, we provide comprehensive consulting 
        services for clean energy companies to achieve sustainable growth and market breakthroughs.
      </p>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <ServiceCard
          icon={<BarChart3 className="h-6 w-6" />}
          title="Market Analysis & Strategy"
          description="Deep analysis of clean energy market trends to develop precise market entry and competitive strategies."
          features={["Industry policy analysis", "Competitive landscape review", "Market opportunity identification", "Business model design"]}
        />
        
        <ServiceCard
          icon={<Lightbulb className="h-6 w-6" />}
          title="Technology Roadmap Planning"
          description="Provide technology development path guidance and product planning consulting for clean energy companies."
          features={["Technology trend analysis", "Product technology selection", "R&D pathway planning", "Technical risk assessment"]}
        />
        
        <ServiceCard
          icon={<Globe className="h-6 w-6" />}
          title="International Market Expansion"
          description="Assist clean energy companies in expanding overseas markets and establishing global sales networks."
          features={["Overseas market analysis", "Export strategy development", "Channel partner development", "Localization guidance"]}
        />
        
        <ServiceCard
          icon={<Zap className="h-6 w-6" />}
          title="Digital Transformation"
          description="Drive traditional energy companies toward digital and intelligent transformation and upgrades."
          features={["Digital diagnosis", "Smart transformation solutions", "Operational efficiency improvement", "Data-driven decision making"]}
        />
        
        <ServiceCard
          icon={<Target className="h-6 w-6" />}
          title="Project Investment Consulting"
          description="Provide investment evaluation, risk analysis, and financing strategy guidance for clean energy projects."
          features={["Investment feasibility analysis", "Risk assessment models", "Financing solution design", "Investor connections"]}
        />
        
        <ServiceCard
          icon={<Users className="h-6 w-6" />}
          title="Supply Chain Integration"
          description="Help companies establish comprehensive clean energy supply chain partnerships and ecosystem networks."
          features={["Supply chain optimization", "Partner development", "Industry alliance building", "Resource integration strategy"]}
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