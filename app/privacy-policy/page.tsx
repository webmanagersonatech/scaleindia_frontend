import type { Metadata } from "next";
import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout.component";
import { FOOTER_CONTACT_INFO } from "@/constants/navigation.constants";

export const metadata: Metadata = {
  title: "SCALE | Privacy Policy",
  description:
    "Read the SCALE (Sona Valliappa Group) Privacy Policy to understand how we collect, use, and protect your personal information.",
  openGraph: {
    title: "SCALE | Privacy Policy",
    description:
      "How SCALE collects, uses, and protects your personal information.",
    type: "website",
    url: "https://scaleindia.in/privacy-policy",
    siteName: "SCALE",
  },
};

const LAST_UPDATED = "22 September 2026";

const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          SCALE, operated by Sona Valliappa Group (&quot;SCALE&quot;,
          &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), respects your
          privacy and is committed to protecting the personal information you
          share with us through scaleindia.in and our related institutions,
          programs, and services (collectively, the &quot;Services&quot;).
        </p>
        <p>
          This Privacy Policy explains what information we collect, how we
          use and share it, and the choices available to you. By using our
          Services, you agree to the practices described in this policy.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Information you provide directly</strong> — such as your
            name, email address, phone number, organisation, and message
            content when you fill out a contact, admission, career, or
            partnership enquiry form, subscribe to updates, or post a comment
            on our blog.
          </li>
          <li>
            <strong>Application and academic information</strong> — for
            students and institutions engaging with our programs, such as
            educational history, qualifications, and documents submitted as
            part of an admission or placement process.
          </li>
          <li>
            <strong>Usage and device data</strong> — such as your IP address,
            browser type, device information, pages visited, and referring
            URLs, collected automatically through cookies and analytics tools
            (see our{" "}
            <a href="/cookie-policy">Cookie Policy</a> for details).
          </li>
          <li>
            <strong>Communications</strong> — records of correspondence when
            you contact us by email, phone, or through our website forms.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How We Use Your Information",
    content: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Respond to enquiries and provide the Services you request;</li>
          <li>
            Process applications for admissions, placements, careers, or
            industry collaborations;
          </li>
          <li>
            Send updates about events, programs, blogs, and other content you
            may find relevant;
          </li>
          <li>Improve our website, programs, and overall user experience;</li>
          <li>
            Maintain the security of our Services and prevent fraudulent or
            unauthorised activity; and
          </li>
          <li>Comply with applicable legal and regulatory obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing-of-information",
    title: "How We Share Information",
    content: (
      <>
        <p>
          We do not sell your personal information. We may share information
          in the following limited circumstances:
        </p>
        <ul>
          <li>
            With group institutions under Sona Valliappa Group (such as Sona
            GCC, Sona Finishing School, Sona Tech School, and Sona Flexi
            Staffing) to fulfil the purpose for which you shared the
            information;
          </li>
          <li>
            With trusted service providers who help us operate our website,
            send communications, or process applications, under
            confidentiality obligations;
          </li>
          <li>
            With industry and placement partners, where you have applied for
            or expressed interest in placement, internship, or collaboration
            opportunities; and
          </li>
          <li>
            When required by law, regulation, legal process, or to protect
            the rights, property, or safety of SCALE, our users, or others.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and Tracking Technologies",
    content: (
      <p>
        We use cookies and similar technologies, including Google Analytics,
        to understand how visitors use our website and to improve our
        Services. You can control or disable cookies through your browser
        settings. For more detail, please see our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>
    ),
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: (
      <p>
        We retain personal information for as long as necessary to fulfil the
        purposes described in this policy, including to meet legal,
        accounting, or reporting requirements. When information is no longer
        needed, we take reasonable steps to delete or anonymise it.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "Data Security",
    content: (
      <p>
        We implement reasonable technical and organisational measures to
        protect personal information against unauthorised access, loss,
        misuse, or alteration. However, no method of transmission over the
        internet or electronic storage is completely secure, and we cannot
        guarantee absolute security.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights and Choices",
    content: (
      <>
        <p>Depending on applicable law, you may have the right to:</p>
        <ul>
          <li>Request access to the personal information we hold about you;</li>
          <li>Request correction of inaccurate or incomplete information;</li>
          <li>
            Request deletion of your personal information, subject to legal
            or contractual limitations;
          </li>
          <li>Withdraw consent for marketing communications at any time; and</li>
          <li>Object to certain processing of your personal information.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the
          details in the &quot;Contact Us&quot; section below.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    title: "Children's Privacy",
    content: (
      <p>
        Some of our Services relate to educational programs that may involve
        interaction with minors through parents, guardians, or partner
        institutions. Where we knowingly collect information relating to a
        minor, we do so with appropriate consent from a parent or guardian
        and in accordance with applicable law.
      </p>
    ),
  },
  {
    id: "third-party-links",
    title: "Third-Party Links",
    content: (
      <p>
        Our website may contain links to third-party websites, including
        partner institutions and social media platforms. We are not
        responsible for the privacy practices or content of those third-party
        sites, and we encourage you to review their privacy policies
        separately.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time to reflect
        changes in our practices or for legal or operational reasons. We will
        post the updated policy on this page with a revised &quot;Last
        updated&quot; date. We encourage you to review this page
        periodically.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <p>
        If you have questions about this Privacy Policy or how we handle your
        personal information, please contact us at{" "}
        <a href={`mailto:${FOOTER_CONTACT_INFO.email}`}>
          {FOOTER_CONTACT_INFO.email}
        </a>{" "}
        or at {FOOTER_CONTACT_INFO.address}
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      description="How SCALE collects, uses, shares, and protects your personal information across our website, programs, and services."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
