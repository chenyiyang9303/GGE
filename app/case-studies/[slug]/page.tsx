import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Users, Target, Lightbulb, TrendingUp, Quote } from "lucide-react";
import { getCaseStudyBySlug, getAllCaseStudies } from "@/lib/case-studies-data";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const caseStudies = getAllCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <Image
          src={caseStudy.image}
          alt={caseStudy.company}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <Link
              href="/#case-studies"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                  {caseStudy.industry}
                </span>
                <div className="flex items-center gap-1 text-white/80">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{caseStudy.timeline}</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {caseStudy.company}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Client Background */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Client Background
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {caseStudy.clientBackground}
              </p>
            </section>

            {/* Detailed Challenge */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-3">
                <Target className="h-6 w-6 text-red-600" />
                Challenge
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {caseStudy.detailedChallenge}
              </p>
            </section>

            {/* Approach */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                Solution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudy.approach.map((item, index) => (
                  <div key={index} className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="font-medium text-neutral-800 dark:text-neutral-100">
                        {item}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Implementation Process
              </h2>
              <div className="space-y-8">
                {caseStudy.implementation.map((phase, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-6">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
                        {phase.phase}
                      </h3>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded">
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
                          <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Project Outcomes
              </h2>
              <div className="space-y-8">
                {caseStudy.outcomes.map((outcome, index) => (
                  <div key={index} className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-3">
                      {outcome.category}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      {outcome.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {outcome.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
                          <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                            {metric.metric}
                          </div>
                          <div className="text-xs text-neutral-400 dark:text-neutral-500 mb-2">
                            {metric.before} → {metric.after}
                          </div>
                          <div className="text-lg font-bold text-green-600">
                            +{metric.improvement}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonial */}
            <section className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              <blockquote className="text-lg text-neutral-700 dark:text-neutral-300 italic mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div>
                  <div className="font-semibold text-neutral-800 dark:text-neutral-100">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    {caseStudy.testimonial.position}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Key Metrics
              </h3>
              <div className="space-y-4">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-b border-neutral-200 dark:border-neutral-700 pb-3 last:border-b-0">
                    <div className="text-sm text-neutral-600 dark:text-neutral-400 mb-1">
                      {result.metric}
                    </div>
                    <div className="font-bold text-neutral-800 dark:text-neutral-100">
                      {result.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                Services Provided
              </h3>
              <div className="space-y-2">
                {caseStudy.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps */}
            {caseStudy.nextSteps && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                  Next Steps
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {caseStudy.nextSteps}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-neutral-900 dark:bg-neutral-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Capture Clean Energy Market Opportunities?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your clean energy company achieve market breakthroughs and business growth
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Free Market Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}