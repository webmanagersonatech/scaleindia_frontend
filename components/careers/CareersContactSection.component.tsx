import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export default function CareersContactSection() {
  return (
    <section className="relative py-16 bg-yellow-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20" />

      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Join the Sona Ecosystem?</h2>
        <p className="text-sm md:text-lg mb-10 opacity-90 max-w-2xl mx-auto">
          Reach out to our HR team to explore current openings and future opportunities to Build,
          Consult, Teach, or Incubate with us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="mailto:hr2@sonastar.com"
            className="flex items-center gap-3 bg-white text-yellow-700 font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition"
          >
            <Mail size={20} />
            hr2@sonastar.com
          </Link>

          <Link
            href="tel:+919442592132"
            className="flex items-center gap-3 border border-white text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 hover:bg-white hover:text-black"
          >
            <Phone size={20} />
            94425 92132
          </Link>
        </div>
      </div>
    </section>
  );
}
