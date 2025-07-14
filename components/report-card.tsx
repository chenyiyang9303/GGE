"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Download, FileText, User, Star } from "lucide-react";
import { Report, reportCategories } from "@/lib/reports-data";
import { ReportCover } from "@/components/report-cover-designs";

interface ReportCardProps {
  report: Report;
  variant?: 'standard' | 'featured' | 'related';
  showExcerpt?: boolean;
  className?: string;
}

export function ReportCard({ 
  report, 
  variant = 'standard', 
  showExcerpt = true, 
  className = '' 
}: ReportCardProps) {
  const coverVariants = ['hexagon', 'wave', 'circle', 'diamond', 'organic'] as const;
  const gradients = [
    'from-blue-500 to-green-500',
    'from-purple-500 to-blue-500', 
    'from-green-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500'
  ];
  
  const variantIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % coverVariants.length;
  const gradientIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length;

  if (variant === 'featured') {
    return <FeaturedReportCard report={report} className={className} />;
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <Link href={`/reports/${report.id}`}>
        {/* Fixed aspect ratio cover - wider format */}
        <div className="relative w-full aspect-[4/3]">
          <ReportCover
            title={report.title}
            subtitle={report.subtitle}
            category={reportCategories[report.category]}
            publishDate={report.publishDate}
            variant={coverVariants[variantIndex]}
            gradient={gradients[gradientIndex]}
          />
          {report.featured && (
            <div className="absolute top-3 right-3">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
            </div>
          )}
        </div>
        
        {/* Content area */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {report.title}
          </h3>
          
          {showExcerpt && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
              {report.excerpt}
            </p>
          )}
          
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500 mb-3">
            <div className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {report.author.name}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(report.publishDate).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              {report.fileSize}
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-3">
            {report.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded">
                {tag}
              </span>
            ))}
            {report.tags.length > 3 && (
              <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded">
                +{report.tags.length - 3}
              </span>
            )}
          </div>
          
          {/* Action */}
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-3 transition-all duration-200">
            View Report
            <Download className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function FeaturedReportCard({ report, className }: { report: Report; className?: string }) {
  const coverVariants = ['hexagon', 'wave', 'circle', 'diamond', 'organic'] as const;
  const gradients = [
    'from-blue-600 to-green-600',
    'from-purple-600 to-blue-600', 
    'from-green-600 to-teal-600',
    'from-orange-600 to-red-600',
    'from-indigo-600 to-purple-600'
  ];
  
  const variantIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % coverVariants.length;
  const gradientIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full ${className}`}
    >
      <Link href={`/reports/${report.id}`}>
        <div className="flex flex-col lg:flex-row h-full">
          {/* Fixed aspect ratio cover - maintains wider ratio */}
          <div className="lg:w-1/2 relative w-full aspect-[4/3] lg:aspect-[4/3]">
            <ReportCover
              title={report.title}
              subtitle={report.subtitle}
              category={reportCategories[report.category]}
              publishDate={report.publishDate}
              variant={coverVariants[variantIndex]}
              gradient={gradients[gradientIndex]}
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                <Star className="h-3 w-3" />
                Featured
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
                  {reportCategories[report.category]}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-blue-600 transition-colors">
                {report.title}
              </h3>
              
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
                {report.excerpt}
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(report.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {report.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {report.fileSize}
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                <Download className="h-4 w-4" />
                View Report
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// 专门用于相关报告的紧凑版本
export function RelatedReportCard({ report }: { report: Report }) {
  const coverVariants = ['hexagon', 'wave', 'circle', 'diamond', 'organic'] as const;
  const gradients = [
    'from-blue-500 to-green-500',
    'from-purple-500 to-blue-500', 
    'from-green-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500'
  ];
  
  const variantIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % coverVariants.length;
  const gradientIndex = Math.abs(report.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % gradients.length;

  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.3 }}
      className="group bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <Link href={`/reports/${report.id}`}>
        {/* Fixed aspect ratio cover - wider format */}
        <div className="relative w-full aspect-[4/3]">
          <ReportCover
            title={report.title}
            subtitle={report.subtitle}
            category={reportCategories[report.category]}
            publishDate={report.publishDate}
            variant={coverVariants[variantIndex]}
            gradient={gradients[gradientIndex]}
          />
        </div>
        
        <div className="p-4">
          <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded mb-2 inline-block">
            {reportCategories[report.category]}
          </span>
          <h3 className="font-bold text-neutral-800 dark:text-neutral-100 mb-2 line-clamp-2">
            {report.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 line-clamp-2">
            {report.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500 mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(report.publishDate).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {report.readTime}
            </div>
          </div>
          <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-3 transition-all duration-200">
            View Report
            <Download className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}