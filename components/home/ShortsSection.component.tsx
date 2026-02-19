"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";


import { motion, AnimatePresence } from "framer-motion";
import { getShortsall } from "@/services/server/shorts.server";
import { IShort } from "@/types/shorts.types";


export default function ShortsSection() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [shorts, setShorts] = useState<IShort[]>([]);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const firstCard = scrollRef.current.querySelector(
            ".short-card"
        ) as HTMLElement;

        if (!firstCard) return;

        const cardWidth = firstCard.offsetWidth;
        const gap = 24; // gap-6 = 24px

        scrollRef.current.scrollBy({
            left: direction === "left"
                ? -(cardWidth + gap)
                : cardWidth + gap,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        async function fetchData() {
            const data = await getShortsall();
            console.log(data, "shorts data");
            setShorts(data);
        }
        fetchData();
    }, []);

    // const shortse = [
    //     "9VHcNAYMeLA",
    //     "_r76vroiI14",
    //     "5V-VPd-xkSE",
    //     "fG_pUIHUlKQ",
    // ];
    if (!shorts || shorts.filter((item) => item.isActive).length === 0) {
        return null;
    }

    const baseUrl = (process.env.NEXT_PUBLIC_STRAPI_URL || "https://admin.scaleindia.in").replace(/\/$/, "");
    return (
        <section className="relative bg-gray-100 text-gray-900 py-24 overflow-hidden">

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none 
    bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),
    linear-gradient(to_bottom,#00000010_1px,transparent_1px)] 
    bg-[size:40px_40px]"
            />

            <div className="relative container mx-auto px-6 
      grid gap-12 items-center
      lg:grid-cols-[2fr_3fr]">

                {/* LEFT SIDE (2/5) */}
                <div className="max-w-xl">

                    {/* Badge + Faces */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-gray-900 text-white text-sm font-semibold px-4 py-1 rounded-full shadow">
                            500+ Industry Experts
                        </span>



                        <div className="flex -space-x-3">
                            {shorts
                                ?.filter((item) => item.isActive)
                                .slice(0, 4)
                                .map((item) => {
                                    // Use Strapi thumbnail if exists, fallback to YouTube
                                    const strapiThumbnail =
                                        item.thumbnail?.[0]?.formats?.thumbnail?.url || item.thumbnail?.[0]?.url;

                                    const thumbnailUrl = strapiThumbnail
                                        ? `${baseUrl}${strapiThumbnail.startsWith("/") ? "" : "/"}${strapiThumbnail}`
                                        : `https://img.youtube.com/vi/${item.youtubeId}/default.jpg`;

                                    return (
                                        <div
                                            key={item.id}
                                            className="w-16 h-16 rounded-full overflow-hidden border-2 border-white"
                                        >
                                            <Image
                                                src={thumbnailUrl}
                                                alt={item.title || "Short Thumbnail"}
                                                width={64} // matches w-16
                                                height={64} // matches h-16
                                                className="object-cover"
                                                unoptimized
                                            />
                                        </div>
                                    );
                                })}
                        </div>



                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        Created by Industry Experts —{" "}
                        <span className="text-blue-600 italic">
                            Learn from the Best
                        </span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Our Shorts bring insights directly from seasoned professionals shaping the industry.
                        Bite-sized videos to keep you ahead with real-world knowledge, trends, and strategies.
                    </p>


                    {/* Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full bg-white border border-gray-300 text-gray-700 
          flex items-center justify-center hover:bg-gray-900 hover:text-white 
          transition shadow-sm"
                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full bg-white border border-gray-300 text-gray-700 
          flex items-center justify-center hover:bg-gray-900 hover:text-white 
          transition shadow-sm"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE (3/5) */}
                <div className="relative overflow-hidden">
                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
                    >
                        {shorts
                            ?.filter((item: IShort) => item.isActive)
                            .map((item) => {
                                // Use only YouTube thumbnail
                                const thumbnailUrl = `https://img.youtube.com/vi/${item.youtubeId}/hq720.jpg`;

                                return (
                                    <motion.div
                                        key={item.id}
                                        onClick={() => setActiveVideo(item.youtubeId)}
                                        className="
short-card
relative
min-w-full
sm:min-w-[48%]
lg:min-w-[31%]
flex-shrink-0
aspect-[9/16]
rounded-3xl
overflow-hidden
bg-black
shadow-lg
hover:shadow-xl
transition
cursor-pointer
group
"

                                    >
                                        <Image
                                            src={thumbnailUrl}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />

                                        {/* Gradient Overlay */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t 
              from-[#2143b5]/90 via-black/40 to-transparent"
                                        />

                                        {/* Play Button */}
                                        <div
                                            className="absolute bottom-6 left-6 w-14 h-14 
              bg-white/90 backdrop-blur rounded-full 
              flex items-center justify-center shadow-md 
              group-hover:scale-110 transition duration-300"
                                        >
                                            <Play className="text-gray-900" />
                                        </div>
                                    </motion.div>
                                );
                            })}
                    </div>
                </div>

            </div>

            {/* MODAL */}
            <AnimatePresence>
                {activeVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm 
        flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[350px] h-[600px] 
          bg-black rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-3 right-3 z-10 
            bg-white/20 p-2 rounded-full 
            hover:bg-white hover:text-black transition"
                            >
                                <X className="text-white" />
                            </button>

                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                                title="YouTube Shorts"
                                allow="autoplay"
                                allowFullScreen
                                className="rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>

    );
}
