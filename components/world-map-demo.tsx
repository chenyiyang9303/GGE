"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className="w-full h-full">
      <WorldMap
        dots={[
          {
            start: { lat: 37.7749, lng: -122.4194 }, // San Francisco
            end: { lat: 40.7128, lng: -74.0060 }, // New York
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
          },
          {
            start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
            end: { lat: 37.7749, lng: -122.4194 }, // San Francisco
          },
          {
            start: { lat: 40.7128, lng: -74.0060 }, // New York
            end: { lat: 52.5200, lng: 13.4050 }, // Berlin
          },
          {
            start: { lat: -33.8688, lng: 151.2093 }, // Sydney
            end: { lat: 1.3521, lng: 103.8198 }, // Singapore
          },
          {
            start: { lat: 22.3193, lng: 114.1694 }, // Hong Kong
            end: { lat: 19.0760, lng: 72.8777 }, // Mumbai
          },
        ]}
      />
    </div>
  );
}