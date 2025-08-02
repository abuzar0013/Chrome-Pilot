"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const ChevronDown = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const ChevronUp = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
  </svg>
);

const faqData: FAQItem[] = [
  {
    question: "What is Chrome Pilot?",
    answer: "Chrome Pilot is an intelligent browser automation tool that helps you streamline repetitive tasks, automate workflows, and enhance your browsing productivity with AI-powered assistance."
  },
  {
    question: "How do I install Chrome Pilot?",
    answer: "You can install Chrome Pilot directly from the Chrome Web Store. Simply search for 'Chrome Pilot' or visit our extension page and click 'Add to Chrome'. The installation takes just a few seconds."
  },
  {
    question: "Is Chrome Pilot free to use?",
    answer: "Yes, Chrome Pilot offers a free tier with essential automation features. We also provide premium plans with advanced capabilities for power users and businesses."
  },
  {
    question: "What kind of tasks can Chrome Pilot automate?",
    answer: "Chrome Pilot can automate form filling, data extraction, repetitive clicking, screenshot capture, tab management, and much more. It&apos;s designed to handle any browser-based workflow you can imagine."
  },
  {
    question: "Is my data secure with Chrome Pilot?",
    answer: "Absolutely. Chrome Pilot processes all data locally on your device and follows strict privacy guidelines. We never store or transmit your personal browsing data to external servers."
  },
  {
    question: "Can I use Chrome Pilot for business purposes?",
    answer: "Yes, Chrome Pilot is perfect for business automation. Many companies use it for lead generation, data collection, testing, and workflow optimization. We offer enterprise plans with additional features and support."
  }
];

export function Faqs() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="w-full px-4 py-16 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Everything you need to know about Chrome Pilot. Can&apos;t find the answer you&apos;re looking for? 
            <span className="text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white cursor-pointer font-medium"> Reach out to our support team</span>.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="backdrop-blur-lg bg-white/80 dark:bg-neutral-950/80 rounded-2xl shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] border border-white/20 dark:border-neutral-800/50 hover:shadow-[0_0_32px_rgba(34,_42,_53,_0.12)] transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 dark:hover:bg-neutral-900/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-transparent rounded-2xl"
                aria-expanded={openItems.has(index)}
              >
                <span className="font-semibold text-black dark:text-white text-lg pr-4">
                  {faq.question}
                </span>
                <div className="text-neutral-600 dark:text-neutral-400 flex-shrink-0">
                  {openItems.has(index) ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openItems.has(index)
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-neutral-200/50 dark:border-neutral-700/50">
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}