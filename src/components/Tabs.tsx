"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tab";

export function TabsDemo() {
  const tabs = [
    {
      title: "Mathematcs",
      value: "product",
      content: (
        <div className="p-3 m-10 border rounded-3xl  bg-neutral-100  border-neutral-200 ">
          <Image
            src="/maths.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="border rounded-2xl"
          />
        </div>
      ),
    },
    {
      title: "Physics",
      value: "services",
      content: (
        <div className="p-3 m-10 border rounded-3xl  bg-neutral-100  border-neutral-200 ">
          <Image
            src="/datas.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="border rounded-2xl"
          />
        </div>
      ),
    },
    {
      title: "Data Science",
      value: "content",
      content: (
        <div className="p-3 m-10 border rounded-3xl  bg-neutral-100  border-neutral-200 ">
          <Image
            src="/screens.png"
            alt="dummy image"
            width="1000"
            height="1000"
            className="border rounded-2xl"
          />
        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}


