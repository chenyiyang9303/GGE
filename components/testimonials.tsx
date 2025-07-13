"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <div
      id="testimonials"
      className="w-full mx-auto bg-neutral-50 dark:bg-neutral-900 py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what startup founders say about 
            working with our consulting team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="Sarah Chen"
            title="CEO, TechFlow AI"
            image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            testimonial="The strategic guidance we received was game-changing. They helped us pivot our business model and secure our Series A funding. Our revenue grew 10x in 8 months."
            rating={5}
            delay={0}
          />
          
          <TestimonialCard
            name="Marcus Rodriguez"
            title="Founder, GreenCart"
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            testimonial="Their technical expertise saved us months of development time. The architecture they designed scaled beautifully as we grew from 5K to 50K users."
            rating={5}
            delay={0.2}
          />
          
          <TestimonialCard
            name="Dr. Priya Patel"
            title="CEO, HealthLink"
            image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
            testimonial="Navigating healthcare regulations was daunting. Their compliance expertise and investor connections were invaluable. We're now HIPAA certified and funded."
            rating={5}
            delay={0.4}
          />
          
          <TestimonialCard
            name="Alex Thompson"
            title="Co-founder, EduNext"
            image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
            testimonial="They didn't just give us advice—they worked alongside us. The product-market fit strategies they implemented increased our retention from 40% to 85%."
            rating={5}
            delay={0.6}
          />
          
          <TestimonialCard
            name="Lisa Wang"
            title="Founder, FinFlow"
            image="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80"
            testimonial="The pitch deck they helped us create was phenomenal. We secured our seed round in just 6 weeks. Their investor network opened doors we couldn't access alone."
            rating={5}
            delay={0.8}
          />
          
          <TestimonialCard
            name="David Kim"
            title="CEO, LogiTech"
            image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
            testimonial="Their team became an extension of ours. The technical architecture and business strategy guidance helped us avoid costly mistakes and scale efficiently."
            rating={5}
            delay={1.0}
          />
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="inline-flex flex-col items-center gap-4"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-lg font-medium text-neutral-800 dark:text-neutral-100">
              4.9/5 average rating from 50+ startup founders
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              Join the founders who've successfully scaled their startups with our guidance
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const TestimonialCard = ({
  name,
  title,
  image,
  testimonial,
  rating,
  delay,
}: {
  name: string;
  title: string;
  image: string;
  testimonial: string;
  rating: number;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-neutral-700"
    >
      {/* Quote Icon */}
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
        <Quote className="h-4 w-4 text-white" />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial */}
      <blockquote className="text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed italic">
        "{testimonial}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-100">
            {name}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  );
};