import {
  GraduationCap,
  Users,
  Wrench,
  ChefHat,
  Boxes,

  Waves,
  Building2,
  ShoppingBag,
} from "lucide-react";

/* ---------- Section 1: Current Openings (from the hiring poster) ---------- */

function CurrentOpeningsSection() {
  const roles = [
    {
      icon: Wrench,
      title: "MEP Team Leader",
      experience: "Minimum 7 years of experience",
      description:
        "Lead MEP planning, coordination, execution and commissioning for large scale projects.",
    },
    {
      icon: ChefHat,
      title: "BOH Team Leader",
      experience: "Minimum 7 years of experience",
      description:
        "Lead Back-of-House planning, operations, SOPs and team development.",
  
    },

     {
      icon: ChefHat,
      title: "Back of House (BoH) Consultant",
      experience: "Minimum 7 years of experience",
      description:
        "Provide strategic consulting on BoH design, operations, standards and optimization.",
    
    },
    {
      icon: Boxes,
      title: "BIM Team Leader",
      experience: "Minimum 7 years of experience",
      description:
        "Lead BIM coordination, modelling, implementation and project integration.",
    },
  ];

  const sectors = [
    { icon: Waves, label: "Resorts" },
    { icon: Building2, label: "Healthcare" },
    { icon: ShoppingBag, label: "Shopping Malls" },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Users size={20} />
          </span>
          <span className="text-sm font-semibold uppercase tracking-wide text-amber-600">
            Current Openings
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          We Are Hiring <span className="text-amber-500">Experienced Engineers</span> / Team Leaders / Consultants
        </h2>

        <p className="text-slate-600 text-base md:text-lg leading-relaxed ">
          Join us to lead and build high-performing teams delivering large scale projects with
          excellence, innovation and impact. Based on servicing large projects across{" "}
          <span className="font-semibold text-slate-800">Tamil Nadu</span> and{" "}
          <span className="font-semibold text-slate-800">Karnataka</span> in Resorts, Healthcare
          and Shopping Malls.
        </p>

        {/* Sectors */}
        <div className="flex flex-wrap gap-6 mt-6">
          {sectors.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-slate-700 font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                <Icon size={16} />
              </span>
              {label}
            </div>
          ))}
        </div>

        {/* Team Leader roles */}
        <div className="mt-10">
          <div className="mb-6">
            <span className="inline-block rounded-full bg-amber-500 px-4 py-1.5 text-sm md:text-base font-bold text-white">
              Team Leaders — MEP | BOH | BIM
            </span>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {roles.map(({ icon: Icon, title, experience, description,  }) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 p-6 flex flex-col gap-3"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Icon size={20} />
                </span>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="text-sm font-semibold text-amber-600">{experience}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>

             
              </div>
            ))}
          </div>
        </div>

           <hr className="border-slate-200 mt-12" />
      </div>
    </section>
  );
}

/* ---------- Section 2: Sona SCALE — Tech & Finishing School (original) ---------- */

function CareersIntroSection() {
  return (
    <section className="pb-10 bg-white">
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

/* ---------- Full Careers Page ---------- */

export default function CareersPage() {
  return (
    <>
      <CurrentOpeningsSection />
      <CareersIntroSection />
    </>
  );
}