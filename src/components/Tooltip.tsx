"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
    {
        id: 1,
        name: "Abuzar Akhtar",
        designation: "Software Engineer",
        image: "https://avatars.githubusercontent.com/u/93653709?v=4",
    },
    {
        id: 2,
        name: "Dayam Nadeem",
        designation: "Android Develpoer",
        image:
            "https://avatars.githubusercontent.com/u/101959904?v=4",
    },
    {
        id: 3,
        name: "Ashad Nausad",
        designation: "Android developer",
        image:
            "https://avatars.githubusercontent.com/u/74297355?v=4",
    },
    {
        id: 4,
        name: "Arhan Arif",
        designation: "UX Designer",
        image:
            "https://avatars.githubusercontent.com/u/170247405?v=4",
    },
    {
        id: 5,
        name: "Ameen Ur Rehman",
        designation: "Ai/Ml Developer",
        image:
            "https://avatars.githubusercontent.com/u/83868776?v=4",
    },
 
];

export function AnimatedTooltipPreview() {
    return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people} />
        </div>
    );
}
