"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, DollarSign, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies-data";

export function CaseStudies() {
  const caseStudies = getAllCaseStudies();

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
            Discover how we help clean energy companies achieve market breakthroughs, 
            technology upgrades, and business growth in the competitive renewable energy sector.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy) => (
            <CaseStudyCard
              key={caseStudy.slug}
              slug={caseStudy.slug}
              company={caseStudy.company}
              industry={caseStudy.industry}
              challenge={caseStudy.challenge}
              solution={caseStudy.solution}
              results={caseStudy.results}
              timeline={caseStudy.timeline}
              image={caseStudy.image}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-200 cursor-pointer"
          >
            View More Case Studies
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const CaseStudyCard = ({
  slug,
  company,
  industry,
  challenge,
  solution,
  results,
  timeline,
  image,
}: {
  slug: string;
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
      <Link href={`/case-studies/${slug}`}>
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
              Solution
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
              View Case Study
              <ArrowUpRight className="h-3 w-3" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};