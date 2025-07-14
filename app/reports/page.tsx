"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, Download, FileText, Filter, Star, Tag, User } from "lucide-react";
import { getAllReports, getFeaturedReports, getReportsByCategory, reportCategories, Report } from "@/lib/reports-data";
import { ReportCover } from "@/components/report-cover-designs";

export default function ReportsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const allReports = getAllReports();
  const featuredReports = getFeaturedReports();
  
  const filteredReports = allReports.filter(report => {
    const matchesCategory = selectedCategory === 'all' || report.category === selectedCategory;
    const matchesSearch = report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
            
            {/* Search and Filter */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            >
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search reports..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {Object.entries(reportCategories).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Reports */}
      {featuredReports.length > 0 && (
        <section className="py-16 bg-white dark:bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <Star className="h-6 w-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
                Featured Reports
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {featuredReports.slice(0, 2).map((report, index) => (
                <motion.div
                  key={report.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FeaturedReportCard report={report} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Reports */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100">
              All Reports
            </h2>
            <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
              <Filter className="h-4 w-4" />
              {filteredReports.length} report{filteredReports.length !== 1 ? 's' : ''}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ReportCard report={report} />
              </motion.div>
            ))}
          </div>
          
          {filteredReports.length === 0 && (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-600 dark:text-neutral-400 mb-2">
                No reports found
              </h3>
              <p className="text-neutral-500 dark:text-neutral-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function FeaturedReportCard({ report }: { report: Report }) {
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
    <div className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 relative h-64 lg:h-auto">
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
        
        <div className="lg:w-1/2 p-6 lg:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
              {reportCategories[report.category]}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-blue-600 transition-colors">
            <Link href={`/reports/${report.id}`}>
              {report.title}
            </Link>
          </h3>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
            {report.excerpt}
          </p>
          
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
          
          <Link
            href={`/reports/${report.id}`}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            <Download className="h-4 w-4" />
            View Report
          </Link>
        </div>
      </div>
    </div>
  );
}

function ReportCard({ report }: { report: Report }) {
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
    <div className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
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
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-blue-600 transition-colors">
          <Link href={`/reports/${report.id}`}>
            {report.title}
          </Link>
        </h3>
        
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
          {report.excerpt}
        </p>
        
        <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            {report.author.name}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(report.publishDate).toLocaleDateString()}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {report.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded">
              {tag}
            </span>
          ))}
          {report.tags.length > 3 && (
            <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 text-xs rounded">
              +{report.tags.length - 3} more
            </span>
          )}
        </div>
        
        <Link
          href={`/reports/${report.id}`}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-3 transition-all duration-200"
        >
          View Report
          <Download className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}