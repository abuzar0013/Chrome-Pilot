import React from "react";
import Image from 'next/image';
import { CompareDemo } from "@/components/Compare"



export function Services() {
  return (
    <section className="w-full py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-start mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900  dark:text-neutral-100 mb-4">
            Learn key ideas through<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-customYellow to-yellow-300">
              problem-solving
            </span>
          </h2>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-neutral-100">Visual Interactive Learning</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
              Our immersive visual learning platform engages students with interactive content and real-time feedback, enhancing comprehension and retention far beyond traditional methods.
            </p>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <CompareDemo />
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="h-0.5 bg-slate-300 mx-auto mb-8"></div>
        <br />
        <br />
        <div className="grid mt-10 items-center gap-12 lg:grid-cols-2 lg:flex-row-reverse">
          <div className="flex justify-center">
            <Image
              id="footer-how-logo"
              src="/analytics.svg"
              alt="footer"
              width={150}
              height={50}
            />
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-neutral-100">Daily Reading Analytics</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
              Our intuitive analytics tool tracks your daily reading progress in minutes, providing insightful data to help you set goals, monitor improvements, and cultivate consistent learning habits.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="h-0.5 bg-slate-300 mx-auto mb-8"></div>
        <br />
        <br />
        <br />
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-neutral-100">Intelligent Topic Assistant</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
            Our AI-powered chatbot provides instant, personalized support to clarify complex topics, answer questions, and guide your learning journey with 24/7 availability and adaptive explanations.
            </p>
          </div>

          <div className="flex justify-center order-1 lg:order-2">
            <Image
              id="footer-how-logo"
              src="/robo.svg"
              alt="footer"
              width={150}
              height={50}
            />
          </div>
        </div>


      </div>
    </section>
  );
}
