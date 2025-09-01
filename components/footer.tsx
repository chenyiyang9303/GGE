import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export function Footer() {
  const pages = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Services",
      href: "/#services",
    },
    {
      title: "Case Studies",
      href: "/#case-studies",
    },
    {
      title: "Reports",
      href: "/reports",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/#contact",
    },
  ];

  const legals = [
    {
      title: "Privacy Policy",
      href: "/privacy",
    },
    {
      title: "Terms of Service",
      href: "/terms",
    },
    {
      title: "Cookie Policy",
      href: "/cookies",
    },
  ];

  const services = [
    {
      title: "Business Strategy",
      href: "/#services",
    },
    {
      title: "Technical Architecture",
      href: "/#services",
    },
    {
      title: "Funding Support",
      href: "/#services",
    },
    {
      title: "Free Consultation",
      href: "/#contact",
    },
  ];

  const contact = [
    {
      title: "Email Us",
      href: "mailto:hello@greengiantenergy.com",
    },
    {
      title: "Schedule Consultation",
      href: "/#contact",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-black">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-green-500/5 dark:from-transparent dark:via-blue-400/10 dark:to-green-400/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/20 via-transparent to-green-500/20" />
      
      <div className="relative border-t border-neutral-200/50 dark:border-white/[0.08] px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <Logo />
              </div>
              
              {/* Updated tagline */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 dark:from-blue-400 dark:via-green-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Transform Clean Energy Ideas into $10B Market Opportunities
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md">
                  Turning breakthrough insights into billion-dollar market realities. We bridge the gap between innovative clean energy concepts and scalable business success.
                </p>
              </div>

              {/* Contact info */}
              <div className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
                <p>Green Giant Energy Texas Inc</p>
                <p>Accelerating the Clean Energy Future</p>
              </div>
            </div>

            {/* Navigation sections */}
            <div className="space-y-6">
              <h4 className="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">
                Navigate
              </h4>
              <ul className="space-y-3">
                {pages.map((page, idx) => (
                  <li key={"pages" + idx}>
                    <Link
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      href={page.href}
                    >
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, idx) => (
                  <li key={"service" + idx}>
                    <Link
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                      href={service.href}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-bold text-neutral-900 dark:text-white text-sm uppercase tracking-wide">
                Connect
              </h4>
              <ul className="space-y-3">
                {contact.map((item, idx) => (
                  <li key={"contact" + idx}>
                    <Link
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <h5 className="font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wide mb-3">
                  Legal
                </h5>
                <ul className="space-y-2">
                  {legals.map((legal, idx) => (
                    <li key={"legal" + idx}>
                      <Link
                        className="text-xs text-neutral-500 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200"
                        href={legal.href}
                      >
                        {legal.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="pt-8 border-t border-neutral-200/50 dark:border-white/[0.08]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-xs text-neutral-500 dark:text-neutral-400">
                &copy; 2025 Green Giant Energy Texas Inc. All rights reserved.
              </div>
              
              <div className="flex items-center gap-6 text-xs text-neutral-500 dark:text-neutral-400">
                <span>Built for the Clean Energy Revolution</span>
                <span className="w-1 h-1 rounded-full bg-green-500" />
                <span>Powered by Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
