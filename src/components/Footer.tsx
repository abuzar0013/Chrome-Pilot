"use client";
import React from "react";
import Image from "next/image";

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-black dark:bg-grid-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="md:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-1 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 rounded-lg">
                  <Image
                    src="/favicon.png"
                    alt="Chrome Pilot Logo"
                    width={36}
                    height={36}
                    className="rounded-md"
                  />
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                  ChromePilot
                </h2>
              </div>
              <p className="text-neutral-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
                Intelligent browser automation that streamlines your workflow and boosts productivity.
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-gray-100 transition-all duration-200 hover:scale-105"
                  aria-label="Twitter"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-gray-100 transition-all duration-200 hover:scale-105"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-gray-400 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-800 dark:hover:text-gray-100 transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-neutral-800 dark:text-gray-100 text-sm uppercase tracking-wider">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#features" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#reviews" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    Reviews
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-neutral-800 dark:text-gray-100 text-sm uppercase tracking-wider">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-neutral-800 dark:text-gray-100 text-sm uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a 
                    href="#" 
                    className="text-neutral-600 dark:text-gray-400 hover:text-neutral-800 dark:hover:text-gray-100 transition-colors duration-200 text-sm hover:translate-x-1 transform inline-block"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-700">
            <div className="text-center">
              <p className="text-neutral-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} Chrome Pilot. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}