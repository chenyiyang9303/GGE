"use client";
import React, { useRef } from "react";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
import { WorldMapDemo } from "./world-map-demo";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  const calConfig = useCalEmbed();
  
  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-neutral-50 dark:bg-neutral-900"
    >

      <div className="text-balance relative z-20 mx-auto mb-4 mt-4 max-w-4xl text-center text-2xl sm:text-3xl font-semibold tracking-tight text-gray-700 dark:text-neutral-300 md:text-7xl px-4">
        <h1>
          <Balancer>Leading Clean Energy Market Innovation</Balancer>
        </h1>
      </div>
      <p className="relative z-20 mx-auto mt-4 max-w-lg px-4 text-center text-sm sm:text-base/6 text-gray-600 dark:text-gray-200">
Expert consulting for solar, wind, storage, and hydrogen companies to achieve 
        technology breakthroughs, market expansion, and sustainable growth.
      </p>
      <div className="mb-10 mt-8 flex w-full flex-col items-center justify-center gap-4 px-8 sm:flex-row md:mb-20 relative z-20">
        <button
          data-cal-namespace={calConfig.namespace}
          data-cal-link={calConfig.link}
          data-cal-config={`{"layout":"${calConfig.layout}"}`}
          className="w-full sm:w-auto px-8 h-12 text-center text-sm sm:text-base font-semibold rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:-translate-y-0.5 transition duration-200 cursor-pointer"
        >
          Book Free Call
        </button>

        <button
          onClick={() => {
            console.log('Hero button clicked - View Case Studies');
            window.location.href = '/#case-studies';
          }}
          className="w-full sm:w-auto px-8 h-12 text-center text-sm sm:text-base font-semibold rounded-md bg-transparent text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:-translate-y-0.5 transition duration-200 cursor-pointer"
        >
          View Case Studies
        </button>
      </div>
      <div className="absolute inset-0 z-10 opacity-40 sm:opacity-30">
        <WorldMapDemo />
      </div>
    </div>
  );
}

