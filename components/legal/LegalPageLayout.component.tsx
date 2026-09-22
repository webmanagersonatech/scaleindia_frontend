import Link from "next/link";
import { FOOTER_CONTACT_INFO } from "@/constants/navigation.constants";

export interface LegalSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
}

function    LegalHero({
  eyebrow,
  title,
  description,
  lastUpdated,
}: {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#1a36a2]">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20 text-center">
       
        <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-blue-100 sm:text-base">
          {description}
        </p>
        <p className="mt-6 text-xs font-medium text-blue-200">
          Last updated: {lastUpdated}
        </p>
      </div>
    </section>
  );
}

function LegalTableOfContents({ sections }: { sections: LegalSection[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-blue-100 bg-blue-50/60 p-5 lg:sticky lg:top-24"
    >
      <h2 className="text-xs font-semibold uppercase tracking-wide text-[#1a36a2]">
        On this page
      </h2>
      <ol className="mt-3 flex flex-col gap-2">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="flex items-start gap-2 text-sm text-slate-600 transition hover:text-[#1a36a2]"
            >
              <span className="mt-0.5 text-xs font-semibold text-amber-500">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function LegalContactCard() {
  return (
    <div className="rounded-2xl bg-[#1a36a2] p-6 text-white">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-amber-300">
        Questions about this policy?
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-blue-100">
        Reach out to the SCALE team and we&apos;ll be happy to help.
      </p>
      <div className="mt-4 flex flex-col gap-2 text-sm text-blue-100">
      <a
  href={`mailto:${FOOTER_CONTACT_INFO.email}`}
  className="flex items-center gap-2 transition hover:text-white"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6.75A2.25 2.25 0 0 1 5.25 4.5h13.5A2.25 2.25 0 0 1 21 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 17.25V6.75Z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 6 7.004 5.253a2 2 0 0 0 2.492 0L20.25 6"
    />
  </svg>

  <span>{FOOTER_CONTACT_INFO.email}</span>
</a>

<a
  href={`tel:${FOOTER_CONTACT_INFO.phone.replace(/\s+/g, "")}`}
  className="flex items-center gap-2 transition hover:text-white"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-4 w-4 shrink-0"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h2.372c.957 0 1.8.605 2.11 1.51l1.04 3.03a2.25 2.25 0 0 1-.548 2.31l-1.31 1.31a15.74 15.74 0 0 0 5.176 5.176l1.31-1.31a2.25 2.25 0 0 1 2.31-.548l3.03 1.04a2.25 2.25 0 0 1 1.51 2.11V19.5a2.25 2.25 0 0 1-2.25 2.25h-.75C10.235 21.75 2.25 13.765 2.25 3.5v3.25Z"
    />
  </svg>

  <span>{FOOTER_CONTACT_INFO.phone}</span>
</a>
       
        <p className="leading-relaxed text-blue-200">
          {FOOTER_CONTACT_INFO.address}
        </p>
      </div>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-[#1a36a2] transition hover:bg-amber-200"
      >
        Contact Us
      </Link>
    </div>
  );
}

export default function LegalPageLayout({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      <LegalHero
        eyebrow={eyebrow}
        title={title}
        description={description}
        lastUpdated={lastUpdated}
      />

      <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="flex flex-col gap-6 lg:order-1">
            <LegalTableOfContents sections={sections} />
            <div className="hidden lg:block">
              <LegalContactCard />
            </div>
          </aside>

          <div className="flex flex-col gap-12 lg:order-2">
            {sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28">
                <h2 className="flex items-center gap-3 text-xl font-bold text-[#1a36a2] sm:text-2xl">
                  <span className="h-6 w-1.5 rounded-full bg-amber-300" />
                  {section.title}
                </h2>
                <div className="prose prose-slate mt-4 max-w-none prose-p:leading-relaxed prose-li:leading-relaxed prose-a:text-[#1a36a2]">
                  {section.content}
                </div>
              </section>
            ))}

            <div className="lg:hidden">
              <LegalContactCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
