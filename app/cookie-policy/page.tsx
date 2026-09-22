import type { Metadata } from "next";
import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout.component";
import { FOOTER_CONTACT_INFO } from "@/constants/navigation.constants";

export const metadata: Metadata = {
  title: "SCALE | Cookie Policy",
  description:
    "Learn how SCALE uses cookies and similar technologies on scaleindia.in and how you can manage your preferences.",
  openGraph: {
    title: "SCALE | Cookie Policy",
    description:
      "How SCALE uses cookies and similar tracking technologies, and how to manage them.",
    type: "website",
    url: "https://scaleindia.in/cookie-policy",
    siteName: "SCALE",
  },
};

const LAST_UPDATED = "22 September 2026";

function CookieTable() {
  const rows = [
    {
      type: "Strictly Necessary",
      purpose:
        "Required for core website functionality, such as navigation, security, and form submission. The website cannot function properly without these.",
      canDisable: "No",
    },
    {
      type: "Analytics & Performance",
      purpose:
        "Help us understand how visitors interact with our website (e.g. Google Analytics) so we can improve content and user experience.",
      canDisable: "Yes",
    },
    {
      type: "Functional",
      purpose:
        "Remember choices you make (such as language or region) to provide a more personalised experience.",
      canDisable: "Yes",
    },
    {
      type: "Marketing",
      purpose:
        "Used to deliver relevant content and measure the effectiveness of our outreach, where applicable.",
      canDisable: "Yes",
    },
  ];

  return (
    <div className="not-prose overflow-x-auto rounded-xl border border-blue-100">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead className="bg-blue-50 text-[#1a36a2]">
          <tr>
            <th className="px-4 py-3 font-semibold">Cookie Type</th>
            <th className="px-4 py-3 font-semibold">Purpose</th>
            <th className="px-4 py-3 font-semibold">Can be disabled?</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.type} className="border-t border-blue-100">
              <td className="px-4 py-3 align-top font-medium text-slate-800">
                {row.type}
              </td>
              <td className="px-4 py-3 align-top text-slate-600">
                {row.purpose}
              </td>
              <td className="px-4 py-3 align-top text-slate-600">
                {row.canDisable}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <p>
        This Cookie Policy explains how SCALE, a part of Sona Valliappa Group
        (&quot;SCALE&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;), uses cookies and similar tracking technologies on
        scaleindia.in (the &quot;Website&quot;), and the choices available to
        you. This policy should be read together with our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    ),
  },
  {
    id: "what-are-cookies",
    title: "What Are Cookies?",
    content: (
      <p>
        Cookies are small text files placed on your device when you visit a
        website. They are widely used to make websites work efficiently, as
        well as to provide information to the website owner. Similar
        technologies, such as pixels, tags, and local storage, may be used
        alongside cookies for comparable purposes.
      </p>
    ),
  },
  {
    id: "types-of-cookies",
    title: "Types of Cookies We Use",
    content: (
      <>
        <p>
          We use the following categories of cookies on our Website,
          including cookies set through Google Analytics for site
          measurement:
        </p>
        <CookieTable />
      </>
    ),
  },
  {
    id: "how-we-use-cookies",
    title: "How We Use Cookies",
    content: (
      <>
        <p>Specifically, we use cookies to:</p>
        <ul>
          <li>Keep our Website secure and functioning correctly;</li>
          <li>
            Understand which pages, programs, and content are most useful to
            our visitors;
          </li>
          <li>
            Measure traffic sources and campaign performance for our events,
            blogs, and outreach; and
          </li>
          <li>
            Improve the overall speed, layout, and usability of the Website.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Cookies",
    content: (
      <p>
        Some cookies on our Website are placed by third-party services we
        use, such as Google Analytics, which help us analyse how visitors use
        the site. These third parties may collect information about your
        online activities over time and across different websites when you
        use our Website. We do not control these third-party cookies, and we
        recommend reviewing the relevant provider&apos;s own privacy and
        cookie policies for more information.
      </p>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing Your Cookie Preferences",
    content: (
      <>
        <p>
          Most web browsers allow you to control cookies through their
          settings. You can typically:
        </p>
        <ul>
          <li>View what cookies are stored on your device and delete them;</li>
          <li>Block cookies from specific or all websites; and</li>
          <li>Set your browser to notify you when a cookie is being set.</li>
        </ul>
        <p>
          Please note that blocking or deleting certain cookies, particularly
          strictly necessary cookies, may affect the functionality of our
          Website and limit your ability to use some features.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Cookie Policy",
    content: (
      <p>
        We may update this Cookie Policy from time to time to reflect
        changes in the cookies we use or for other operational, legal, or
        regulatory reasons. We encourage you to revisit this page
        periodically to stay informed.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <p>
        If you have any questions about our use of cookies, please contact us
        at{" "}
        <a href={`mailto:${FOOTER_CONTACT_INFO.email}`}>
          {FOOTER_CONTACT_INFO.email}
        </a>{" "}
        or at {FOOTER_CONTACT_INFO.address}
      </p>
    ),
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Cookie Policy"
      description="How SCALE uses cookies and similar tracking technologies on scaleindia.in, and how you can manage your preferences."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
