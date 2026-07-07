// components/institute/InstitutionEvents.component.tsx

'use client';

import { SectionHeader } from "../common/SectionHeader.component";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface InstitutionEventsProps {
  titlePrefix?: string;
  titleHighlight?: string;
}

export function InstitutionEvents({
  titlePrefix = "",
}: InstitutionEventsProps) {

  const event = {
    id: '1',
    title: 'Transforming Education. Empowering Talent. Building Future Leaders – SCALE Bengaluru Convocation Ceremony 2026',
    date: '2026-07-03',
    time: '10:00 AM - 2:00 PM',
    location: 'SCALE Bengaluru Campus',
    description: 'Join us for the prestigious SCALE Bengaluru Convocation Ceremony 2026 celebrating our graduates\' achievements.',
    image: 'https://admin.scaleindia.in/uploads/finishing_school_11_04c8d2ed52.jpeg',
    slug: 'transforming-education-empowering-talent-building-future-leaders-scale-bengaluru-convocation-ceremony-2026'
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  // Check if event is upcoming
  const isUpcoming = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const eventDate = new Date(event.date);
    return eventDate >= today;
  };

  return (
    <section className='w-full bg-gray-50 px-4 py-8 sm:px-6 sm:py-10 md:px-8 lg:px-12'>
      <div className='mx-auto max-w-7xl'>
        <SectionHeader
          titlePrefix={titlePrefix}
          align='center'
        />

        <div className='mt-8 flex justify-center'>
          <div className='w-full max-w-6xl'>
            <div className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 group flex flex-col md:flex-row'>
              {/* Event Image - Left Side */}
              <div className='relative h-64 md:h-auto md:w-2/5 bg-gray-200 flex-shrink-0'>
                {event.image ? (
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className='object-cover'
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100'>
                    <Calendar className='w-16 h-16 text-blue-300' />
                  </div>
                )}

                {/* Upcoming Badge */}
                {isUpcoming() && (
                  <div className='absolute top-3 right-3'>
                    <span className='bg-green-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg'>
                      Upcoming
                    </span>
                  </div>
                )}
              </div>

              {/* Content - Right Side */}
              <div className='p-6 md:p-8 flex-1 flex flex-col justify-center'>
                {/* Event Title */}
                <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors'>
                  {event.title}
                </h3>

                {/* Event Description */}
                <p className='text-gray-600 text-sm md:text-base mb-4'>
                  {event.description}
                </p>

                {/* Event Details - Date and Location */}
                <div className='space-y-2 mb-5'>
                  <div className='flex items-center gap-2.5 text-sm text-gray-500'>
                    <Calendar className='w-4 h-4 text-blue-600 flex-shrink-0' />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className='flex items-center gap-2.5 text-sm text-gray-500'>
                    <MapPin className='w-4 h-4 text-blue-600 flex-shrink-0' />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Link
                  href={`/events/${event.slug}`}
                  className='md:self-start flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium group/btn'
                >
                  <span>View Details</span>
                  <ArrowRight className='w-4 h-4 group-hover/btn:translate-x-1 transition-transform' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}