"use client";

import { SimpleBlogWithGrid } from "@/components/1";
import { BlogWithSearch } from "@/components/2";

export function FeaturedContent() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      {/* Featured Articles */}
      <div className="pb-8">
        <SimpleBlogWithGrid />
      </div>

      {/* Featured Reports */}
      <div className="pt-8">
        <BlogWithSearch />
      </div>
    </section>
  );
}