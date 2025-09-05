"use client";
import React, { useRef } from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
import Prism from "./Prism/Prism";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  const calConfig = useCalEmbed();
  
  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-white dark:bg-gray-900"
    >
      <div className="absolute inset-0 opacity-60">
        <Prism 
          animationType="3drotate"
          timeScale={1}
          scale={2.9}
          height={3.5}
          baseWidth={4.8}
          noise={0.6}
          glow={1.2}
          hueShift={0.16}
          colorFrequency={1.7}
          transparent={true}
          suspendWhenOffscreen={true}
        />
      </div>

      <div className="relative z-20 mx-auto max-w-5xl text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800/30 mb-8">
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
              Trusted by 20+ Clean Energy Leaders
            </span>
          </div>
        </div>
        
        <h1 className="font-display text-display-lg md:text-display-xl text-accent-900 dark:text-white mb-8 animate-fade-in">
          <Balancer>Transform Clean Energy Ideas into Market Opportunities</Balancer>
        </h1>
        
        <p className="text-xl text-accent-600 dark:text-accent-300 max-w-3xl mx-auto mb-12 animate-slide-up">
          Comprehensive consulting services for solar, wind, storage, and hydrogen companies — from breakthrough technologies to market expansion.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <button
            data-cal-namespace={calConfig.namespace}
            data-cal-link={calConfig.link}
            data-cal-config={`{"layout":"${calConfig.layout}"}`}
            className="group flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 min-w-[200px]"
          >
            Get Strategic Assessment
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            onClick={() => {
              console.log('Hero button clicked - View Case Studies');
              window.location.href = '/#case-studies';
            }}
            className="group flex items-center justify-center px-8 py-4 bg-white dark:bg-accent-800 border border-accent-200 dark:border-accent-700 text-accent-900 dark:text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 min-w-[200px]"
          >
            View Our Results
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">$5M+</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Client Value Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">200+</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">50+</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">3x</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Faster Growth</div>
          </div>
        </div>
      </div>
    </div>
  );
}

