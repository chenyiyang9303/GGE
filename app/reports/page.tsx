"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Filter, FileText } from "lucide-react";
import { ReportsWithSearch } from "@/components/reports-with-search";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6"
            >
              Industry Reports & Research
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-600 dark:text-neutral-300 mb-8"
            >
              In-depth analysis and insights on clean energy markets, technologies, and policies
              to guide your strategic decisions.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Reports with Search */}
      <section className="bg-white dark:bg-neutral-900">
        <ReportsWithSearch />
      </section>

      {/* Featured Articles CTA */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Stay Informed with Expert Insights
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
              Read our latest analysis and expert commentary on clean energy trends and market developments.
            </p>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Read Articles
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

