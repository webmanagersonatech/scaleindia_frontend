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
    <section className="bg-white pb-12">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <SectionHeader
          titlePrefix="Our"
          titleHighlight="Compensation Philosophy"
        />
        <p className="mt-3 text-center text-slate-600 max-w-3xl mx-auto text-sm md:text-base">
          Our compensation includes fixed + variable pay, with performance-linked incentives
          connected to:
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Left Column - Performance Metrics */}
          <div className="bg-slate-50  p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-4">
              Performance-Linked Incentives
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {PERFORMANCE_LINKS.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <Icon size={16} className="text-amber-500 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">
                    {label}
        </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Philosophy Pillars */}
          <div className="bg-slate-50  p-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4">
              Our Philosophy
            </h3>

            <div className="space-y-2.5">
              {PHILOSOPHY_PILLARS.map(({ icon: Icon, prefix, suffix }) => (
                <div key={prefix} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <Icon size={16} className="text-amber-500 flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-800 tracking-wide">
                      {prefix}
                    </span>
                    <span className="text-slate-600 ml-1">
                      {suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    
      </div>
    </section>
  );
}