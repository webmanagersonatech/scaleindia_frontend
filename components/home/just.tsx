"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShortsSection() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;

        const cardWidth = scrollRef.current.offsetWidth;

        scrollRef.current.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };


    const shorts = [
        "9VHcNAYMeLA",
        "_r76vroiI14",
        "5V-VPd-xkSE",
        "fG_pUIHUlKQ",
    ];

    return (
        <section className="relative bg-gradient-to-br from-[#2143b5] via-[#1a2f80] to-gray-900 text-white py-24 overflow-hidden">

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div>
                    {/* Badge + Faces */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full shadow-lg">

                            500+ Masters
                        </span>

                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((id) => (
                                <Image
                                    key={id}
                                    src={`/images/face-${id}.webp`}
                                    alt="Master"
                                    width={40}
                                    height={40}
                                    className="rounded-full border-2 border-black object-cover"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Built by Scholars, Led by Industry —{" "}
                        <span className="text-yellow-400 italic drop-shadow-lg">

                            Meet the Masters
                        </span>
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-200/80 max-w-lg mb-8 leading-relaxed">

                        At Masters Union, your classroom is powered by Ivy League academics
                        and global business leaders. Our Masters don’t just teach the
                        playbook. They wrote it.
                    </p>

                    {/* Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"

                        >
                            <ChevronLeft />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition duration-300 shadow-md"

                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>


                {/* RIGHT SIDE - RESPONSIVE SLIDER */}
                <div className="relative overflow-hidden">

                    <div
                        ref={scrollRef}
                        className="
      flex gap-6 
      overflow-x-auto 
      scroll-smooth 
      no-scrollbar
    "
                    >
                        {shorts.map((id, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setActiveVideo(id)}
                                className="
         relative 
  min-w-full
  sm:min-w-[48%]
  lg:min-w-[31%]
  flex-shrink-0 
  h-[420px] 
  rounded-3xl 
  overflow-hidden 
  bg-gray-800/40
  backdrop-blur-md
  border border-white/10
  shadow-xl 
  group 
  cursor-pointer
        "
                            >

                                <Image
                                    src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                                    alt="Short Thumbnail"
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-700 ease-out"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#2143b5]/90 via-black/40 to-transparent"></div>


                                <div className="absolute bottom-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                                    <Play className="text-white" />
                                </div>

                            </motion.div>
                        ))}
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-[350px] h-[600px] bg-black rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveVideo(null)}
                                className="absolute top-3 right-3 z-10 bg-white/20 p-2 rounded-full hover:bg-white hover:text-black transition"
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
