"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col bg-custom-svg overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-neutral-100">
              Discover by doing!<br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                House-of-Wisdom
              </span>
            </h1>
          </>
        }>
        <Image
          src={`/front.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top hidden md:block"
          draggable={false}
        />
        <Image
          src={`/ph.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top block md:hidden"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
