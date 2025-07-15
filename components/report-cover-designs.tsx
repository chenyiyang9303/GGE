"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { formatDate } from "@/lib/utils";

interface ReportCoverProps {
  title: string;
  subtitle?: string;
  category: string;
  publishDate: string;
  variant?: 'hexagon' | 'wave' | 'circle' | 'diamond' | 'organic';
  gradient?: string;
}

export function ReportCover({ 
  title, 
  subtitle, 
  category, 
  publishDate, 
  variant = 'hexagon',
  gradient = 'from-blue-500 to-green-500'
}: ReportCoverProps) {
  const variants = {
    hexagon: HexagonCover,
    wave: WaveCover,
    circle: CircleCover,
    diamond: DiamondCover,
    organic: OrganicCover
  };

  const CoverComponent = variants[variant];

  return (
    <CoverComponent
      title={title}
      subtitle={subtitle}
      category={category}
      publishDate={publishDate}
      gradient={gradient}
    />
  );
}

function HexagonCover({ title, subtitle, category, publishDate, gradient }: Omit<ReportCoverProps, 'variant'>) {
  return (
    <div className={`relative w-full h-96 bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden`}>
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="scale-150">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
              <polygon points="30,2 50,17 50,37 30,52 10,37 10,17" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>
      
      {/* Large Hexagon Shape with Logo */}
      <div className="absolute top-8 right-8">
        <div className="relative w-20 h-20">
          <svg width="80" height="80" viewBox="0 0 80 80" className="absolute inset-0">
            <polygon 
              points="40,5 65,22.5 65,57.5 40,75 15,57.5 15,22.5" 
              fill="rgba(255,255,255,0.2)" 
              stroke="rgba(255,255,255,0.4)" 
              strokeWidth="2"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Clean Energy Logo"
              width={24}
              height={24}
              className="filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            {category}
          </div>
        </div>
        
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-sm mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-white/80 text-sm">
            {formatDate(publishDate)}
          </p>
        </div>
      </div>
    </div>
  );
}

function WaveCover({ title, subtitle, category, publishDate, gradient }: Omit<ReportCoverProps, 'variant'>) {
  return (
    <div className={`relative w-full h-96 bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden`}>
      {/* Wave Pattern Background */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="opacity-20">
          <defs>
            <pattern id="waves" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="white" strokeWidth="2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#waves)" />
        </svg>
      </div>

      {/* Floating Logo with Wave Effect */}
      <motion.div 
        className="absolute top-12 right-12"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Clean Energy Logo"
            width={20}
            height={20}
            className="filter brightness-0 invert"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            {category}
          </div>
        </div>
        
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-sm mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-white/80 text-sm">
            {formatDate(publishDate)}
          </p>
        </div>
      </div>
    </div>
  );
}

function CircleCover({ title, subtitle, category, publishDate, gradient }: Omit<ReportCoverProps, 'variant'>) {
  return (
    <div className={`relative w-full h-96 bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden`}>
      {/* Circular Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern id="circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="15" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circles)" />
        </svg>
      </div>

      {/* Large Logo Circle */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="Clean Energy Logo"
          width={32}
          height={32}
          className="filter brightness-0 invert"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            {category}
          </div>
        </div>
        
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-sm mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-white/80 text-sm">
            {formatDate(publishDate)}
          </p>
        </div>
      </div>
    </div>
  );
}

function DiamondCover({ title, subtitle, category, publishDate, gradient }: Omit<ReportCoverProps, 'variant'>) {
  return (
    <div className={`relative w-full h-96 bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden`}>
      {/* Diamond Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 400 400">
          <defs>
            <pattern id="diamonds" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <polygon points="20,5 35,20 20,35 5,20" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diamonds)" />
        </svg>
      </div>

      {/* Diamond Logo Container */}
      <div className="absolute top-8 right-8">
        <div className="relative w-16 h-16 rotate-45 bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <div className="-rotate-45">
            <Image
              src="/logo.png"
              alt="Clean Energy Logo"
              width={20}
              height={20}
              className="filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            {category}
          </div>
        </div>
        
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-sm mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-white/80 text-sm">
            {formatDate(publishDate)}
          </p>
        </div>
      </div>
    </div>
  );
}

function OrganicCover({ title, subtitle, category, publishDate, gradient }: Omit<ReportCoverProps, 'variant'>) {
  return (
    <div className={`relative w-full h-96 bg-gradient-to-br ${gradient} rounded-2xl overflow-hidden`}>
      {/* Organic Blob Shapes */}
      <div className="absolute inset-0">
        <svg width="100%" height="100%" viewBox="0 0 400 400" className="opacity-20">
          <path 
            d="M100,50 C150,20 200,80 250,50 C300,20 350,80 350,150 C350,220 300,280 250,250 C200,220 150,280 100,250 C50,220 50,80 100,50 Z" 
            fill="white"
          />
          <path 
            d="M200,150 C230,130 280,170 300,200 C320,230 280,270 250,250 C220,230 170,270 150,240 C130,210 170,170 200,150 Z" 
            fill="white"
          />
        </svg>
      </div>

      {/* Organic Logo Container */}
      <div className="absolute top-6 right-6">
        <div className="relative">
          <svg width="60" height="60" viewBox="0 0 60 60">
            <path 
              d="M30,5 C40,5 50,15 50,25 C50,35 45,45 35,50 C25,55 15,50 10,40 C5,30 10,20 20,15 C25,10 30,5 30,5 Z" 
              fill="rgba(255,255,255,0.2)"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Clean Energy Logo"
              width={20}
              height={20}
              className="filter brightness-0 invert"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8">
        <div>
          <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            {category}
          </div>
        </div>
        
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/90 text-sm mb-4">
              {subtitle}
            </p>
          )}
          <p className="text-white/80 text-sm">
            {formatDate(publishDate)}
          </p>
        </div>
      </div>
    </div>
  );
}