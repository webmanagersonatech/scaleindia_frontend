import { Hammer, MessagesSquare, BookOpenText, Rocket } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader.component";

const OPPORTUNITIES = [
  {
    icon: Hammer,
    title: "Build",
    description:
      "Bring hands-on expertise to design and deliver real-world projects that shape the built environment.",
  },
  {
    icon: MessagesSquare,
    title: "Consult",
    description:
      "Advise organizations and students with domain knowledge earned over years in the field.",
  },
  {
    icon: BookOpenText,
    title: "Teach",
    description:
      "Mentor and train industry-ready talent, passing on practical, real-world know-how to the next generation.",
  },
  {
    icon: Rocket,
    title: "Incubate",
    description:
      "Help nurture new ideas, programs, and ventures within the growing Sona ecosystem.",
  },
];

export default function CareersOpportunitiesSection() {
  return (
    <section className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-6 md:px-8">
        <SectionHeader
          titlePrefix="If you want to"
          titleHighlight="Build, Consult, Teach, or Incubate"
        />
        <p className="mt-4 text-center text-white/70 max-w-2xl mx-auto text-base md:text-lg">
          There could be an opportunity for you within the Sona ecosystem.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OPPORTUNITIES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex h-full flex-col items-center gap-4 rounded-3xl bg-white/5 p-7 text-center backdrop-blur-sm transition hover:bg-white/10 border border-white/10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 text-slate-900">
                <Icon size={26} />
              </span>
              <h3 className="text-xl font-semibold text-amber-400">{title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
