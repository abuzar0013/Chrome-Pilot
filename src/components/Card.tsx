"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utlis";
export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Sarah Johnson",
    designation: "High School Science Teacher",
    content: (
      <p>
        These <Highlight>interactive lessons</Highlight> have transformed my classroom. 
        The students are more engaged and I have seen a significant 
        <Highlight>improvement in their understanding</Highlight> of complex concepts.
      </p>
    ),
  },
  {
    id: 1,
    name: "Michael Chen",
    designation: "College Freshman",
    content: (
      <p>
        I struggled with calculus in high school, but the 
        <Highlight>step-by-step tutorials</Highlight> on this platform made it click for me. 
        Now i am <Highlight>excelling in my university math courses</Highlight>.
      </p>
    ),
  },
  {
    id: 2,
    name: "Dr. Emily Patel",
    designation: "Education Researcher",
    content: (
      <p>
        The <Highlight>adaptive learning algorithms</Highlight> used in this platform are impressive. 
        Our studies show they lead to <Highlight>faster skill acquisition</Highlight> and 
        better long-term retention of knowledge.
      </p>
    ),
  },
];
