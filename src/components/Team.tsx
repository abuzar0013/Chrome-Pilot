import React from 'react'
import { AnimatedTooltipPreview } from "@/components/Tooltip"


export default function Team() {
    return (
        <div className="p-3 m-8 border rounded-3xl dark:bg-neutral-600 bg-neutral-100  border-neutral-200 dark:border-neutral-800">
            <div className="text-center max-w-[600px] mx-auto px-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-gray-100 whitespace-nowrap">
                    Our Contributors
                </h1>
                <br />
                <AnimatedTooltipPreview />
            </div>
        </div>
    )
}
