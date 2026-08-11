import { GraduationCap, Users } from "lucide-react";

export default function CareersIntroSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - About SCALE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <GraduationCap size={20} />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                Sona SCALE — Tech & Finishing School
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Build Careers, Not Just <span className="text-amber-500">Jobs</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Focused on creating industry-ready talent through technology and practical learning in areas including:
            </p>

            {/* Bold list of technologies */}
            <ul className="mt-3 space-y-2 text-slate-700 text-base md:text-lg font-semibold">
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✦</span> Autodesk
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✦</span> BIM (Building Information Modeling)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✦</span> Revit
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✦</span> MEP (Mechanical, Electrical, Plumbing)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500">✦</span> Modern Construction Technologies
              </li>
            </ul>
          </div>

          {/* Right Column - Who We're Looking For */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
                <Users size={18} />
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                Who We&apos;re Looking For
              </h3>
            </div>
            <p className="text-slate-600 text-base leading-relaxed">
              We are looking for professionals with a strong combination of industry and teaching experience, preferably with <span className="font-semibold text-amber-600">10+ years of experience</span>.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-slate-200 mt-12" />
      </div>
    </section>
  );
}