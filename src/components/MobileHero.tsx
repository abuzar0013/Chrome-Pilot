"use client";
import React from "react";
import { cn } from "@/utlis/cn";

export function MobileHero({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0B0B0F] py-12", className)}>
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 dark:text-neutral-200">
          Chrome-pilot
        </h1>
        <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Make your browser effortless and easy.
        </p>
        <a
          href="#"
          className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
        >
          Get Started
        </a>
      </div>
        <div className="w-full max-w-3xl p-3 m-4 md:m-10 border rounded-3xl  bg-neutral-100  border-neutral-200 ">
            <iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/htfIU4bIFmE?si=95dIMIicD5f54C_h" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen ></iframe>
        </div>
    </div>
  );
}
