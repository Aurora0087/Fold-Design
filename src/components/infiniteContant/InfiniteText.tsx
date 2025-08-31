"use client";

import React from "react";
import { InfiniteMovingTexts } from "./InfiniteScrollText";
import { cn } from "@/lib/utils";

export function InfiniteText({texts=testimonials,classes}:{texts?:string[],classes?:string}) {
    return (
        <div className={cn("h-[20vh] rotate-3 rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden",
            classes
        )}>
            <InfiniteMovingTexts
                items={texts}
            />
        </div>
    );
}

const testimonials = [
    "It  the season of Darkness, it was the sprir of despair.",
    "To be, or ngeous fortules, And by opposing end them: to die, to sleep.",
    "Itortune, must be in want ",
    "Camoney in my purse, and nothing partsail about a little and see the watery part of the world.",
];
