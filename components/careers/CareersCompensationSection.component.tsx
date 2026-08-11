import {
  Target,
  ShieldCheck,
  Wallet,
  Clock,
  Users,
  ClipboardList,
  Cog,
  PenTool,
  Crown,
} from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader.component";

const PERFORMANCE_LINKS = [
  { icon: Target, label: "Project Outcomes" },
  { icon: ShieldCheck, label: "Quality" },
  { icon: Wallet, label: "Cost-effectiveness" },
  { icon: Clock, label: "Timely Delivery" },
];

const PHILOSOPHY_PILLARS = [
  { icon: Users, prefix: "QUALITY", suffix: "through Quality People" },
  { icon: ClipboardList, prefix: "DELIVERY", suffix: "through Detailed Planning" },
  { icon: Cog, prefix: "OPERATIONS", suffix: "through Process & Technology" },
  { icon: PenTool, prefix: "DESIGN", suffix: "through Design Engineers" },
  { icon: Crown, prefix: "LEADERSHIP", suffix: "through Experience & Example" },
];

export default function CareersCompensationSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeader
          titlePrefix="Our"
          titleHighlight="Compensation Philosophy"
        />
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto text-base md:text-lg">
          Our compensation includes fixed + variable pay, with performance-linked incentives
          connected to:
        </p>

        {/* Performance-linked incentives */}
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {PERFORMANCE_LINKS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Icon size={22} />
              </span>
              <p className="font-semibold text-slate-900">{label}</p>
            </div>
          ))}
        </div>

        {/* Philosophy statement */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 uppercase tracking-wide text-sm font-semibold">
            Built on a strong foundation and a rich history, our philosophy remains simple
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PHILOSOPHY_PILLARS.map(({ icon: Icon, prefix, suffix }) => (
            <div
              key={prefix}
              className="flex flex-col items-center gap-3 rounded-2xl bg-slate-900 p-6 text-center"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 text-slate-900">
                <Icon size={22} />
              </span>
              <p className="font-bold text-amber-400 tracking-wide">{prefix}</p>
              <p className="text-sm text-white/80 leading-relaxed">{suffix}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
