"use client";

import { useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function BannerCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<CarouselApi | undefined>(undefined);

  const banners = [
    {
      id: 1,
      image: "/images/sona-uwa.webp",
      title: [
        "MS in Data Science",
        "Start in India, Complete in the USA",
      ],
      subtitle:
        "A structured 1+1 international pathway designed for future professionals in Data Science, Artificial Intelligence, Machine Learning, Analytics, and emerging technologies.",
      buttonText: "Know More",
      buttonLink: "https://scaleindia.in/sona-uwa",
    },
    {
      id: 2,
      image: "/images/home-banner.webp",
      title: [
        "By the Industry",
        "For the Industry",
        "To the Industry"
      ],
      subtitle:
        "Tomorrow's technology today — Shaping innovators who will transform the world",
      buttonText: "",
      buttonLink: "",
    },
  ];

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      if (apiRef.current) {
        const currentIndex = apiRef.current.selectedScrollSnap();
        const nextIndex = (currentIndex + 1) % banners.length;
        apiRef.current.scrollTo(nextIndex);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div ref={carouselRef} className="w-full mx-auto relative">
      <Carousel 
        className="w-full"
        setApi={(api) => {
          apiRef.current = api;
        }}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id} className="basis-full">
              <div className="relative w-full h-[543px]">
                <Image
                  src={banner.image}
                  alt={Array.isArray(banner.title) ? banner.title.join(" ") : banner.title}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 max-w-[1362px] mx-auto flex flex-col justify-center items-start px-6 sm:px-10 md:px-14 text-left text-white z-10">
                  <h1 className="font-roboto leading-none font-bold max-w-6xl text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] space-y-1">
                    {banner.title.map((line, i) => {
                      const isLast = i === banner.title.length - 1;
                      
                      // Handle "Start in India, Complete in the USA" with yellow color
                      if (banner.id === 1 && line === "Start in India, Complete in the USA") {
                        return (
                          <div key={i} className="text-yellow-400">
                            <span className="inline-block break-words whitespace-normal">
                              Start in India, Complete in the USA
                            </span>
                          </div>
                        );
                      }
                      
                      if (!isLast) {
                        return <div key={i} className="whitespace-nowrap">{line}</div>;
                      }

                      if (banner.id === 2 && line.includes("To the Industry")) {
                        return (
                          <div key={i}>
                            <span className="text-yellow-400 whitespace-nowrap">To the Industry</span>
                          </div>
                        );
                      }

                      return <div key={i} className="whitespace-nowrap">{line}</div>;
                    })}
                  </h1>

                  {banner.subtitle && (
                    <div className="mt-4 leading-tight">
                      {(() => {
                        const [top, bottom] = banner.subtitle.split(" — ");

                        return (
                          <>
                            <p className="font-bold text-[20px] sm:text-[30px]">{top}</p>
                            {bottom && <p className="text-[18px] sm:text-[24px] mt-1">{bottom}</p>}
                          </>
                        );
                      })()}
                    </div>
                  )}

                  {banner.buttonText && (
                    <Link
                      href={banner.buttonLink}
                      target={banner.buttonLink.startsWith("http") ? "_blank" : "_self"}
                      className="mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300 text-base sm:text-lg"
                    >
                      {banner.buttonText}
                    </Link>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {banners.length > 1 && (
          <>
            {/* Mobile arrows - always visible and clickable */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 md:hidden z-50 px-4">
              <CarouselPrevious className="relative !static bg-black/60 text-white size-10 rounded-full hover:bg-black/80 transition-all" />
              <CarouselNext className="relative !static bg-black/60 text-white size-10 rounded-full hover:bg-black/80 transition-all" />
            </div>

            {/* Desktop arrows */}
            <CarouselPrevious
              className="hidden md:flex left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white z-50 rounded-full size-10 hover:bg-black/70 transition-all"
            />

            <CarouselNext
              className="hidden md:flex right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white z-50 rounded-full size-10 hover:bg-black/70 transition-all"
            />
          </>
        )}
      </Carousel>
    </div>
  );
}