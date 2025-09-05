"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies-data";

export function CaseStudies() {
  const caseStudies = getAllCaseStudies();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
      setTimeout(checkScrollability, 300);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
      setTimeout(checkScrollability, 300);
    }
  };

  React.useEffect(() => {
    checkScrollability();
    const handleResize = () => checkScrollability();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      id="case-studies"
      className="w-full mx-auto bg-gray-50 dark:bg-gray-800 py-24 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-display-md md:text-display-lg font-bold text-accent-900 dark:text-white mb-4">
            $5M+ in Client Value Created
          </h2>
          <p className="text-lg text-accent-600 dark:text-accent-300 max-w-3xl mx-auto">
            Real results from real companies. See how our strategic consulting has delivered transformational growth, market leadership, and breakthrough innovations for clean energy leaders worldwide.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={cn(
              "absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-accent-800 shadow-lg border border-accent-200 dark:border-accent-700 flex items-center justify-center transition-all duration-200",
              canScrollLeft 
                ? "hover:bg-accent-50 dark:hover:bg-accent-700 text-accent-900 dark:text-white cursor-pointer" 
                : "opacity-50 cursor-not-allowed text-accent-400"
            )}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={cn(
              "absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white dark:bg-accent-800 shadow-lg border border-accent-200 dark:border-accent-700 flex items-center justify-center transition-all duration-200",
              canScrollRight 
                ? "hover:bg-accent-50 dark:hover:bg-accent-700 text-accent-900 dark:text-white cursor-pointer" 
                : "opacity-50 cursor-not-allowed text-accent-400"
            )}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Cards Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4"
            style={{ scrollSnapType: 'x-mandatory' }}
            onScroll={checkScrollability}
          >
            {caseStudies.map((caseStudy, index) => (
              <div 
                key={caseStudy.slug} 
                className="flex-shrink-0 w-80 md:w-96" 
                style={{ scrollSnapAlign: 'start' }}
              >
                <CaseStudyCard
                  slug={caseStudy.slug}
                  company={caseStudy.company}
                  industry={caseStudy.industry}
                  challenge={caseStudy.challenge}
                  solution={caseStudy.solution}
                  results={caseStudy.results}
                  timeline={caseStudy.timeline}
                  image={caseStudy.image}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all duration-200 cursor-pointer text-lg"
          >
            Explore All Success Stories
            <ArrowUpRight className="h-5 w-5" />
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
  index,
}: {
  slug: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string }[];
  timeline: string;
  image: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white dark:bg-accent-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-accent-100 dark:border-accent-700/50 hover:border-primary-200 dark:hover:border-primary-600 h-full"
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
            <h4 className="font-semibold text-accent-900 dark:text-white mb-2 text-sm uppercase tracking-wide">
              Challenge
            </h4>
            <p className="text-sm text-accent-600 dark:text-accent-300 leading-relaxed">
              {challenge}
            </p>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold text-accent-900 dark:text-white mb-2 text-sm uppercase tracking-wide">
              Results
            </h4>
            <p className="text-sm text-accent-600 dark:text-accent-300 leading-relaxed">
              {solution}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 mb-6">
            {results.slice(0, 3).map((result, idx) => (
              <div key={idx} className="flex justify-between items-center py-2 px-3 bg-accent-50 dark:bg-accent-700/30 rounded-lg">
                <span className="text-xs text-accent-600 dark:text-accent-400 font-medium">
                  {result.metric}
                </span>
                <span className="font-bold text-accent-900 dark:text-white text-sm">
                  {result.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-sm mt-auto">
            <span className="text-accent-500 dark:text-accent-400 font-medium">
              {timeline}
            </span>
            <motion.div
              whileHover={{ x: 2 }}
              className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold cursor-pointer"
            >
              View Details
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};