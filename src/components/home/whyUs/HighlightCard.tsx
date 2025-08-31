import React from 'react';
import { cn } from '@/lib/utils'; // Ensure this utility is defined or imported correctly
import { Dot, Star } from 'lucide-react';

interface HighlightCardProps {
    index: number;
    title?: string;
    details?: string;
    classes?: string;
    botText?: string;
    style?: React.CSSProperties;
}

function HighlightCard({ title = "title", details = "details", classes, style, botText = "144+", index = 0 }: HighlightCardProps) {
    return (
        <div
            style={style}
            className={cn(
                " rounded-xl border-l overflow-hidden grid grid-rows-[1.6fr_1fr] uppercase w-[350px] md:w-[450px] max-w-full min-h-[500px] h-full",
                classes
            )}
        >
            <div
                style={{
                    background: "linear-gradient(180deg, rgba(30, 41, 59, 0.2), rgba(15, 23, 42, 0.8))",
                }}
                className="p-4 grid grid-rows-[auto_1fr]">
                <div className='grid'>
                    <h1
                        style={{
                            lineHeight: "4vw"
                        }}
                        className="text-[#C2FF3F] text-3xl md:text-[4vw] font-semibold">{title}</h1>
                    <span className=' text-white/80 text-xl md:text-[2vw]'>trijon</span>
                </div>
                <div className=' text-white flex flex-col gap-2 text-xs'>
                    <span className='text-[#C2FF3F] text-lg'>{`[0${index + 1}]`}</span>
                    <div className='flex justify-center items-center h-full'>
                        <Dot className=' text-[#C2FF3F]' />
                        <p className='flex '>
                            {details}
                        </p>
                    </div>

                </div>
            </div>
            <div className="bg-[#C2FF3F] text-slate-900 grid grid-rows-[auto_1fr]">
                <p className="text-center p-4 grid place-content-center">
                    <Star />
                </p>
                <p className=' bg-slate-200 p-4 text-center text-2xl md:text-[2vw] font-semibold grid place-content-center'>{botText}</p>
            </div>
        </div>
    );
};

export default HighlightCard;
