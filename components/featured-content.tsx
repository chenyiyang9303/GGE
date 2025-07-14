"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, BookOpen, FileText } from "lucide-react";
import { getFeaturedBlogPosts } from "@/lib/blog-data";
import { getFeaturedReports } from "@/lib/reports-data";
import { FeaturedPostCard } from "@/components/featured-post-card";
import { ReportCard } from "@/components/report-card";

export function FeaturedContent() {
  const featuredPosts = getFeaturedBlogPosts().slice(0, 2);
  const featuredReports = getFeaturedReports().slice(0, 2);

  return (
    <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4">
        {/* Featured Articles */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  Featured Articles
                </h2>
              </div>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-200"
              >
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <FeaturedPostCard post={post} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Reports */}
        {featuredReports.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                  Featured Reports
                </h2>
              </div>
              <Link 
                href="/reports" 
                className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-medium hover:gap-3 transition-all duration-200"
              >
                View All Reports
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredReports.map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <ReportCard report={report} variant="featured" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}