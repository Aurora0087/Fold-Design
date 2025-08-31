"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingTexts = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: string[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "160s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "320s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-screen-md md:max-w-7xl overflow-hidde [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, i) => (
                    <li
                        className=" max-w-full relative uppercase overflow-hidden border-t flex-shrink-0 border-slate-700 px-8 py-6 w-fit"
                        key={i}
                    >
                        <blockquote className=" flex justify-center items-center w-fit">
                            <span className=" relative z-20 text-[4vw] text-white font-normal text-nowrap">
                                {item}
                            </span>
                            <span className=" text-[#C2FF3F] w-[4vw] h-[4vw] ml-6">
                                <Star className=" w-full h-full"/>
                            </span>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
