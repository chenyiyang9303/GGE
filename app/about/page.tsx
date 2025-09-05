"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Target, Award, Globe, Lightbulb, TrendingUp, Heart, CheckCircle, ArrowRight, Mail } from "lucide-react";

// Generate avatar URLs for team members using local avatar files
const getAvatarUrl = (name: string, index: number) => {
  const avatarFiles = [
    '/avatars/dai-rongrong.svg',     // 戴蓉蓉 (Dai Rongrong) - CEO
    '/avatars/lin-zhihua.svg',       // 林志华 (Lin Zhihua) - Energy Storage Director
    '/avatars/wang-yaqi.svg',        // 王雅琪 (Wang Yaqi) - Wind Energy Lead
    '/avatars/zhang-wenbo.svg',      // 张文博 (Zhang Wenbo) - Hydrogen Director
    '/avatars/li-siyi.svg',          // 李思怡 (Li Siyi) - Policy Manager
    '/avatars/chen-jiayin.svg'       // 陈佳音 (Chen Jiayin) - Market Lead
  ];
  
  return avatarFiles[index] || '/avatars/dai-rongrong.svg';
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6"
            >
              Accelerating the Clean Energy Transition
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed"
            >
              We are a leading clean energy consulting firm dedicated to helping companies navigate 
              the rapidly evolving renewable energy landscape and achieve their sustainability goals.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Work With Us
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/#case-studies"
                className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-8 py-3 rounded-lg font-medium transition-colors"
              >
                View Our Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                To accelerate the global transition to clean energy by providing strategic guidance, 
                market intelligence, and technical expertise that empowers our clients to make 
                informed decisions in the renewable energy sector.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Target className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                      Strategic Focus
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Data-driven insights for optimal decision making
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-1">
                      Global Impact
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Contributing to worldwide sustainability goals
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&auto=format"
                alt="Clean energy mission and vision"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Embracing cutting-edge technologies and creative solutions to complex energy challenges."
              },
              {
                icon: CheckCircle,
                title: "Integrity",
                description: "Providing honest, transparent, and unbiased advice based on rigorous analysis."
              },
              {
                icon: TrendingUp,
                title: "Excellence",
                description: "Delivering exceptional quality in every project and exceeding client expectations."
              },
              {
                icon: Heart,
                title: "Sustainability",
                description: "Committed to creating a positive environmental impact through our work and operations."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-sm"
              >
                <value.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Our Expert Team
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our diverse team combines deep industry expertise with fresh perspectives 
              to deliver innovative solutions for the clean energy sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "戴蓉蓉 (Dai Rongrong)",
                role: "Founder & CEO",
                expertise: "Clean Energy Strategy & Market Development",
                bio: "15+ years leading renewable energy projects and sustainable business development initiatives",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&auto=format",
                email: "rongrong.dai@ggeconsulting.net"
              },
              {
                name: "林志华 (Lin Zhihua)",
                role: "Energy Storage Director",
                expertise: "Battery Technology & Grid Integration",
                bio: "Former energy systems engineer at leading automotive company with deep battery storage expertise",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
                email: "zhihua.lin@ggeconsulting.net"
              },
              {
                name: "王雅琪 (Wang Yaqi)",
                role: "Wind Energy Lead",
                expertise: "Offshore Wind & Technology Innovation",
                bio: "Marine engineering background with 12+ years experience in major offshore wind projects",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format",
                email: "yaqi.wang@ggeconsulting.net"
              },
              {
                name: "张文博 (Zhang Wenbo)",
                role: "Hydrogen Technology Director",
                expertise: "Green Hydrogen & Industrial Applications",
                bio: "Chemical engineering PhD from prestigious university, specializing in hydrogen production systems",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
                email: "wenbo.zhang@ggeconsulting.net"
              },
              {
                name: "李思怡 (Li Siyi)",
                role: "Policy Research Manager",
                expertise: "Energy Policy & Regulatory Analysis",
                bio: "Former policy analyst at national energy development agency with expertise in clean energy regulations",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&auto=format",
                email: "siyi.li@ggeconsulting.net"
              },
              {
                name: "陈佳音 (Chen Jiayin)",
                role: "Market Intelligence Lead",
                expertise: "Market Analysis & Investment Strategy",
                bio: "Former consultant at top-tier consulting firm specializing in clean energy market analysis and strategy",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&auto=format",
                email: "jiayin.chen@ggeconsulting.net"
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-800 rounded-xl overflow-hidden"
              >
                <div className="relative h-56 flex items-center justify-center bg-gray-50 dark:bg-gray-800 p-4">
                  <div className="relative w-40 h-40">
                    <Image
                      src={getAvatarUrl(member.name, index)}
                      alt={`${member.name} avatar`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                    {member.expertise}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
                    {member.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-1 text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Delivering measurable results for clients across the clean energy value chain.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: CheckCircle },
              { number: "50GW", label: "Renewable Capacity Analyzed", icon: TrendingUp },
              { number: "$5M", label: "Investment Decisions Supported", icon: Award },
              { number: "30+", label: "Countries Served", icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-blue-200 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
              Recognition & Certifications
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Our expertise and commitment to excellence have been recognized by leading industry organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "ISO 14001 Environmental Management",
              "IRENA Technology Collaborator",
              "Clean Energy Ministerial Partner",
              "B Corp Certified",
              "Top Clean Energy Consultant 2024",
              "Sustainability Excellence Award",
              "Innovation in Energy Award",
              "Client Choice Award 2023"
            ].map((certification, index) => (
              <motion.div
                key={certification}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl text-center"
              >
                <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 text-sm">
                  {certification}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 dark:bg-neutral-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Accelerate Your Clean Energy Journey?
          </h2>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-lg">
            Partner with our expert team to navigate the clean energy transition 
            and unlock new opportunities for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 bg-neutral-700 hover:bg-neutral-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Our Research
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}