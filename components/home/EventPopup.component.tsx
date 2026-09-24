"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

interface EventPopupProps {
  delay?: number;
  href?: string;
}

export default function EventPopup({
  delay = 800,
  href = "https://scaleindia.in/events/u-s-master-s-degree-spot-admissions-now-open-salem-and-bangalore",
}: EventPopupProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup until end of 8th October 2026 (IST)
    const expiryDate = new Date("2026-10-09T00:00:00+05:30");

    // If expired, never open
    if (new Date() >= expiryDate) return;

    const timer = setTimeout(() => setOpen(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          aria-label="Close popup"
          className="absolute -top-3 -right-3 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg ring-1 ring-black/10 transition hover:bg-gray-100 hover:scale-105"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          {/* Image */}
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="block"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/images/sona-uwa-reg.webp"
                alt="Earn a U.S. Master's Degree in MS in Data Science"
                fill
                className="object-cover"
                priority
              />
            </div>
          </Link>

          {/* Content */}
          <div className="p-5 sm:p-6 text-center">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
              U.S. Master&apos;s Degree Spot Admissions — Salem on 6th October
              &amp; Bangalore on 8th October!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Meet the Dean from the University of West Alabama, USA. Secure
              your spot for MS in Data Science — limited seats available.
            </p>

            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-300 px-7 py-3 text-sm font-semibold text-black shadow-md transition-all duration-200 hover:bg-yellow-400 hover:shadow-lg active:scale-95"
            >
              Know More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}