import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Download, FileText, User, Eye, Share2, BookOpen, Target, Database, Users, Star } from "lucide-react";
import { getReportById, getAllReports, getRelatedReports, reportCategories } from "@/lib/reports-data";
import { ReportCover } from "@/components/report-cover-designs";
import { RelatedReportCard } from "@/components/report-card";
import { formatDate } from "@/lib/utils";

interface ReportPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const reports = getAllReports();
  return reports.map((report) => ({
    id: report.id,
  }));
}

export default function ReportDetailPage({ params }: ReportPageProps) {
  const report = getReportById(params.id);

  if (!report) {
    notFound();
  }

  const relatedReports = getRelatedReports(params.id);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/reports"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Reports
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  {reportCategories[report.category]}
                </span>
                {report.featured && (
                  <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                {report.title}
              </h1>
              
              <h2 className="text-xl text-neutral-600 dark:text-neutral-300 mb-6">
                {report.subtitle}
              </h2>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                {report.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400 mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Published {formatDate(report.publishDate)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {report.readTime} read
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  {report.fileSize}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {report.previewPages} preview pages
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  <Download className="h-5 w-5" />
                  Download Full Report
                </button>
                <button className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-6 py-3 rounded-lg font-medium transition-colors">
                  <Share2 className="h-5 w-5" />
                  Share Report
                </button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <ReportCover
                  title={report.title}
                  subtitle={report.subtitle}
                  category={reportCategories[report.category]}
                  publishDate={report.publishDate}
                  variant="organic"
                  gradient="from-blue-600 to-green-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Executive Summary */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Executive Summary
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">
                {report.excerpt}
              </p>
            </section>

            {/* Key Findings */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-3">
                <Target className="h-6 w-6 text-blue-600" />
                Key Findings
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {report.keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {finding}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Table of Contents */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-green-600" />
                Table of Contents
              </h2>
              <div className="bg-neutral-50 dark:bg-neutral-800 rounded-xl p-6">
                <div className="space-y-3">
                  {report.tableOfContents.map((section, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-200 dark:border-neutral-700 last:border-b-0">
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">
                        {section.section}
                      </span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        Page {section.page}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Methodology */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-3">
                <Database className="h-6 w-6 text-purple-600" />
                Methodology
              </h2>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                  {report.methodology}
                </p>
                <div className="border-t border-purple-200 dark:border-purple-800 pt-4">
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-2">
                    Data Sources:
                  </h4>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {report.dataSource}
                  </p>
                </div>
              </div>
            </section>

            {/* Author Information */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-blue-600" />
                About the Author
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {report.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">
                    {report.author.name}
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                    {report.author.title}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500">
                    Expert in clean energy markets with 10+ years of industry research experience.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Download Actions */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Download Options
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                  <Download className="h-4 w-4" />
                  Full Report PDF
                </button>
                <button className="w-full flex items-center gap-3 bg-neutral-200 dark:bg-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-600 text-neutral-800 dark:text-neutral-200 px-4 py-3 rounded-lg font-medium transition-colors">
                  <Eye className="h-4 w-4" />
                  Preview (First {report.previewPages} pages)
                </button>
              </div>
            </div>

            {/* Report Tags */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Topics Covered
              </h3>
              <div className="flex flex-wrap gap-2">
                {report.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Report Details */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Report Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Category:</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {reportCategories[report.category]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">File Size:</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    {report.fileSize}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Pages:</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    ~50 pages
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Format:</span>
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">
                    PDF
                  </span>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
              <h3 className="text-lg font-semibold mb-3">
                Need Custom Research?
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Get tailored market analysis and strategic insights for your specific business needs.
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Reports */}
      {relatedReports.length > 0 && (
        <section className="bg-neutral-50 dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
              Related Reports
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedReports.map((relatedReport) => (
                <RelatedReportCard key={relatedReport.id} report={relatedReport} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}