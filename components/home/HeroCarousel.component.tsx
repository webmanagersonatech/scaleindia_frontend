"use client";

import { useEffect, useRef, useCallback, useState } from "react";
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
  const [api, setApi] = useState<CarouselApi>(); // Use state instead of ref
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

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
      buttonText: "Learn More",
      buttonLink: "https://scaleindia.in/sona-uwa",
    },
    {
      id: 2,
      image: "/images/home-banner.webp",
      title: [
        "By the Industry",
        "For the Industry",
        "To the Industry",
      ],
      subtitle:
        "Tomorrow's technology today — Shaping innovators who will transform the world",
      buttonText: "",
      buttonLink: "",
    },
  ];

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();

    if (!api || banners.length <= 1) return;

    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, 8000);
  }, [api, banners.length, stopAutoplay]);

  // Set up autoplay when API becomes available
  useEffect(() => {
    if (!api || banners.length <= 1) return;

    startAutoplay();

    const handleSelect = () => {
      // Reset autoplay timer on manual navigation
      if (api && banners.length > 1) {
        startAutoplay();
      }
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
      stopAutoplay();
    };
  }, [api, banners.length, startAutoplay, stopAutoplay]);

  return (
    <div className="w-full mx-auto relative">
      <Carousel
        className="w-full"
        setApi={setApi} // Use setApi directly
        opts={{
          loop: true,
          align: "start",
        }}
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative w-full h-[543px]">
                <Image
                  src={banner.image}
                  alt={banner.title.join(" ")}
                  fill
                  priority
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 max-w-[1362px] mx-auto flex flex-col justify-center items-start px-6 sm:px-10 md:px-14 text-white z-10">
                  <h1 className="font-roboto font-bold leading-none max-w-6xl text-[28px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[72px] space-y-1">
                    {banner.title.map((line, index) => {
                      if (
                        banner.id === 1 &&
                        line === "Start in India, Complete in the USA"
                      ) {
                        return (
                          <div
                            key={index}
                            className="text-yellow-400 text-[22px] sm:text-[30px] md:text-[38px] lg:text-[45px] xl:text-[54px]"
                          >
                            {line}
                          </div>
                        );
                      }

                      if (
                        banner.id === 2 &&
                        line === "To the Industry"
                      ) {
                        return (
                          <div key={index} className="text-yellow-400">
                            {line}
                          </div>
                        );
                      }

                      return (
                        <div key={index}>
                          {line}
                        </div>
                      );
                    })}
                  </h1>

                  {banner.subtitle && (
                    <div className="mt-4 leading-tight">
                      {banner.subtitle.includes(" — ") ? (
                        <>
                          <p className="font-bold text-[20px] sm:text-[30px]">
                            {banner.subtitle.split(" — ")[0]}
                          </p>
                          <p className="text-[18px] sm:text-[24px] mt-1">
                            {banner.subtitle.split(" — ")[1]}
                          </p>
                        </>
                      ) : (
                        <p className="max-w-4xl text-base sm:text-lg md:text-xl">
                          {banner.subtitle}
                        </p>
                      )}
                    </div>
                  )}

                  {banner.buttonText && (
                    <Link
                      href={banner.buttonLink}
                      target="_blank"
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
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 md:hidden z-50">
              <CarouselPrevious className="relative !static bg-black/60 text-white size-10 rounded-full hover:bg-black/80" />
              <CarouselNext className="relative !static bg-black/60 text-white size-10 rounded-full hover:bg-black/80" />
            </div>

            <CarouselPrevious className="hidden md:flex left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white z-50 rounded-full size-10 hover:bg-black/70" />

            <CarouselNext className="hidden md:flex right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white z-50 rounded-full size-10 hover:bg-black/70" />
          </>
        )}
      </Carousel>
    </div>
  );
}