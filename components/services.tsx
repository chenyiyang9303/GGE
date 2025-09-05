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
      className="w-full mx-auto bg-gray-50 dark:bg-gray-800 py-24 px-4 md:px-8"
    >
      <Header>
        <h2 className="font-display text-display-md md:text-display-lg text-center mx-auto text-accent-900 dark:text-white">
          Accelerate Your Clean Energy Growth
        </h2>
      </Header>
      <p className="max-w-3xl text-lg text-accent-600 dark:text-accent-300 text-center mx-auto mt-6">
        Strategic consulting that transforms innovative clean energy technologies into scalable, profitable businesses ready for global expansion.
      </p>
      
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <ServiceCard
          icon={<BarChart3 className="h-6 w-6" />}
          title="Market Intelligence & Go-to-Market Strategy"
          description="Turn market insights into winning strategies. We identify opportunities and create actionable roadmaps for market dominance."
          features={["Market opportunity mapping", "Competitive intelligence & white space analysis", "High-impact opportunity prioritization", "Revenue-optimized business model design"]}
        />
        
        <ServiceCard
          icon={<Lightbulb className="h-6 w-6" />}
          title="Innovation Strategy & R&D Acceleration"
          description="Fast-track your technology breakthroughs. We help you build industry-leading solutions that capture premium market positions."
          features={["Breakthrough technology identification", "Patent landscape & IP strategy", "Accelerated development roadmaps", "Technology risk mitigation frameworks"]}
        />
        
        <ServiceCard
          icon={<Globe className="h-6 w-6" />}
          title="Global Market Expansion"
          description="Scale internationally with confidence. We've helped companies establish presence in 5+ countries and unlock $2M+ in international revenue."
          features={["High-growth market entry strategies", "Multi-channel distribution networks", "Strategic partnership development", "Regulatory compliance & risk management"]}
        />
        
        <ServiceCard
          icon={<Zap className="h-6 w-6" />}
          title="Digital Transformation & Industry 4.0"
          description="Modernize operations with cutting-edge digital solutions. Achieve 30-50% efficiency gains through intelligent automation and data analytics."
          features={["AI-powered operational optimization", "IoT & smart grid integration", "Predictive maintenance systems", "Real-time performance dashboards"]}
        />
        
        <ServiceCard
          icon={<Target className="h-6 w-6" />}
          title="Capital Strategy & Investment Advisory"
          description="Secure funding and maximize ROI. Our clients have raised $5M+ in capital with 85% higher success rates than industry average."
          features={["Investment-ready business case development", "Advanced financial modeling & valuation", "Strategic investor matching & introductions", "Due diligence preparation & support"]}
        />
        
        <ServiceCard
          icon={<Users className="h-6 w-6" />}
          title="Strategic Partnerships & Ecosystem Development"
          description="Build powerful industry alliances that accelerate growth. Create integrated value chains that deliver competitive advantages and cost efficiencies."
          features={["Tier-1 supplier partnership development", "Strategic alliance structuring", "Vertical integration opportunities", "Ecosystem platform design"]}
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
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group relative p-8 rounded-2xl bg-white dark:bg-accent-800 border border-accent-200/50 dark:border-accent-700/50 hover:border-primary-300 dark:hover:border-primary-600 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold text-accent-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <p className="text-accent-600 dark:text-accent-300 mb-6 leading-relaxed text-base">
        {description}
      </p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-accent-600 dark:text-accent-400">
            <svg className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};