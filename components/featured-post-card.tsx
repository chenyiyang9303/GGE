"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Star } from "lucide-react";
import { BlogPost, blogCategories } from "@/lib/blog-data";

interface FeaturedPostCardProps {
  post: BlogPost;
}

export function FeaturedPostCard({ post }: FeaturedPostCardProps) {
  return (
    <div className="group bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-1/2 relative h-48 lg:h-64">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
              <Star className="h-3 w-3" />
              Featured
            </span>
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
              {blogCategories[post.category]}
            </span>
          </div>
        </div>
        
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            
            <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
          </div>
          
          <div>
            <div className="flex items-center gap-4 text-sm text-neutral-500 dark:text-neutral-500 mb-4">
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.publishDate).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-200"
            >
              Read Article
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}