import { GraduationCap, Users } from "lucide-react";


export default function CareersIntroSection() {
  return (
    <section className="pt-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* About SCALE */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <GraduationCap size={26} />
              </span>
              <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
                Sona SCALE — Tech &amp; Finishing School
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Build Careers, Not Just <span className="text-amber-500">Jobs</span>
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Focused on creating industry-ready talent through technology and practical learning in areas including Autodesk, BIM, Revit, MEP, and modern construction technologies.
            </p>
          </div>

          {/* Who we're looking for */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white">
                <Users size={22} />
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
      </div>
    </section>
  );
}
