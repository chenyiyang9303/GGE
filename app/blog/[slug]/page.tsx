import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Tag, Eye, BookOpen } from "lucide-react";
import { getBlogPostBySlug, getAllBlogPosts, getRelatedBlogPosts, blogCategories } from "@/lib/blog-data";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(params.slug);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-blue-900/20 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                {blogCategories[post.category]}
              </span>
              <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.publishDate).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {/* Author and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 dark:text-neutral-100">
                    {post.author.name}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {post.author.title}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-4 py-2 rounded-lg font-medium transition-colors">
                  <Share2 className="h-4 w-4" />
                  Share
                </button>
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  <BookOpen className="h-4 w-4" />
                  Save Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg dark:prose-invert max-w-none">
              <div 
                className="text-neutral-700 dark:text-neutral-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />').replace(/#{1,6}\s/g, (match) => {
                    const level = match.trim().length;
                    return `<h${level} class="text-${4-level}xl font-bold text-neutral-800 dark:text-neutral-100 mt-8 mb-4">`;
                  }).replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-neutral-800 dark:text-neutral-100">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                    .replace(/`(.*?)`/g, '<code class="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded text-sm">$1</code>')
                }}
              />
            </article>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-700">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                    About {post.author.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                    {post.author.title}
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Table of Contents */}
              <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                  In This Article
                </h3>
                <nav className="space-y-2">
                  {/* This would be dynamically generated based on headings */}
                  <a href="#overview" className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Technology Overview
                  </a>
                  <a href="#applications" className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Industrial Applications
                  </a>
                  <a href="#market" className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Market Development
                  </a>
                  <a href="#future" className="block text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Future Outlook
                  </a>
                </nav>
              </div>

              {/* Share Article */}
              <div className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-xl">
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-4">
                  Share Article
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Share2 className="h-4 w-4" />
                    LinkedIn
                  </button>
                  <button className="w-full flex items-center gap-3 bg-neutral-700 hover:bg-neutral-800 text-white px-4 py-2 rounded-lg transition-colors">
                    <Share2 className="h-4 w-4" />
                    Twitter
                  </button>
                  <button className="w-full flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Share2 className="h-4 w-4" />
                    WhatsApp
                  </button>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-xl text-white">
                <h3 className="font-semibold mb-3">
                  Stay Updated
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Get weekly clean energy insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 rounded-lg text-neutral-800 text-sm focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <button className="w-full bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-neutral-50 dark:bg-neutral-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.slug} className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded mb-3 inline-block">
                      {blogCategories[relatedPost.category]}
                    </span>
                    <h3 className="font-bold text-neutral-800 dark:text-neutral-100 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(relatedPost.publishDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${relatedPost.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium text-sm hover:gap-3 transition-all duration-200"
                    >
                      Read Article
                      <Eye className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}