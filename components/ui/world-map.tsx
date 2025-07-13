"use client";

import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number };
    end: { lat: number; lng: number };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const { theme } = useTheme();
  const [svgMap, setSvgMap] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    setIsLoading(true);
    
    // 使用requestAnimationFrame来避免阻塞UI
    const generateMap = () => {
      // 根据屏幕大小调整地图密度
      const isMobile = window.innerWidth < 768;
      const map = new DottedMap({ 
        height: isMobile ? 80 : 100, 
        grid: "diagonal" 
      });
      const svgString = map.getSVG({
        radius: isMobile ? 0.3 : 0.22,
        color: theme === "dark" ? "#FFFFFF80" : "#00000080",
        shape: "circle",
        backgroundColor: theme === "dark" ? "#000000" : "#FFFFFF",
      });
      setSvgMap(svgString);
      setIsLoading(false);
    };

    requestAnimationFrame(generateMap);
  }, [theme, mounted]);

  const createCurvedPath = (start: { lat: number; lng: number }, end: { lat: number; lng: number }) => {
    const startX = ((start.lng + 180) / 360) * 800;
    const startY = ((90 - start.lat) / 180) * 400;
    const endX = ((end.lng + 180) / 360) * 800;
    const endY = ((90 - end.lat) / 180) * 400;

    const midX = (startX + endX) / 2;
    const midY = Math.min(startY, endY) - 50;

    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
  };

  return (
    <div className="w-full aspect-[2/1] md:aspect-[2/1] bg-white dark:bg-black rounded-lg overflow-hidden transition-colors duration-300">
      <div className="w-full h-full relative">
        {!mounted ? (
          <div className="w-full h-full bg-neutral-100 dark:bg-neutral-800 animate-pulse" />
        ) : (
          <>
            {svgMap && (
              <Image
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
                alt="world map"
                height={495}
                width={1056}
                priority
              />
            )}
            {isLoading && (
              <div className="absolute inset-0 bg-white dark:bg-black transition-colors duration-300" />
            )}
          </>
        )}
        <svg
          className="w-full h-full absolute inset-0 pointer-events-none"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={lineColor} stopOpacity="0" />
              <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
              <stop offset="100%" stopColor={lineColor} stopOpacity="0" />
            </linearGradient>
          </defs>
          {dots.map((dot, index) => {
            const pathD = createCurvedPath(dot.start, dot.end);
            const startX = ((dot.start.lng + 180) / 360) * 800;
            const startY = ((90 - dot.start.lat) / 180) * 400;
            const endX = ((dot.end.lng + 180) / 360) * 800;
            const endY = ((90 - dot.end.lat) / 180) * 400;
            
            return (
              <g key={index} className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
                {/* Animated path */}
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#path-gradient)"
                  strokeWidth="1"
                  className="opacity-50"
                  strokeDasharray="5,5"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;10"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                
                {/* Start dot with pulse animation - 简化移动端动画 */}
                <circle
                  cx={startX}
                  cy={startY}
                  r="2"
                  fill={lineColor}
                  className="transition-all duration-300 sm:animate-pulse"
                />
                
                {/* End dot with pulse animation - 简化移动端动画 */}
                <circle
                  cx={endX}
                  cy={endY}
                  r="2"
                  fill={lineColor}
                  className="transition-all duration-300 sm:animate-pulse"
                />
                
                {/* Moving dot along the path - 仅在桌面端显示 */}
                <circle r="1.5" fill={lineColor} opacity="0.8" className="hidden sm:block">
                  <animateMotion
                    dur={`${6 + index}s`}
                    repeatCount="indefinite"
                    path={pathD}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur={`${6 + index}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}