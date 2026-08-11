import type { Metadata } from "next";
import MainBanner from "@/components/common/MainBannerSection.component";
import CareersIntroSection from "@/components/careers/CareersIntroSection.component";
import CareersCompensationSection from "@/components/careers/CareersCompensationSection.component";
import CareersContactSection from "@/components/careers/CareersContactSection.component";

export const metadata: Metadata = {
  title: "SCALE | Careers",
  description:
    "Join Sona SCALE — Tech & Finishing School. We're hiring industry and teaching professionals to Build, Consult, Teach, or Incubate within the Sona ecosystem.",
  openGraph: {
    title: "SCALE | Careers",
    description:
      "Explore career opportunities at Sona SCALE — Tech & Finishing School. Build, Consult, Teach, or Incubate with us.",
    type: "website",
    url: "https://sona.edu.in/careers",
    siteName: "SCALE",
    images: [
      {
        url: "/images/banner-2.webp",
        width: 1200,
        height: 630,
        alt: "Careers at SCALE",
      },
    ],
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <MainBanner
        title="Careers at SCALE"
        highlight="SCALE"
        description="Industry-ready talent starts with industry-ready mentors. Explore job openings and build your career within the Sona ecosystem."
        backgroundImage="/images/banner-2.webp"
      />

      {/* About SCALE & Who we're looking for */}
      <CareersIntroSection />



      {/* Compensation Philosophy */}
      <CareersCompensationSection />

      {/* Contact HR */}
      <CareersContactSection />
    </div>
  );
}
