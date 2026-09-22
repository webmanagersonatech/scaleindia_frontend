import type { Metadata } from "next";
import LegalPageLayout, {
  LegalSection,
} from "@/components/legal/LegalPageLayout.component";
import { FOOTER_CONTACT_INFO } from "@/constants/navigation.constants";

export const metadata: Metadata = {
  title: "SCALE | Terms of Service",
  description:
    "Read the Terms of Service governing your use of scaleindia.in and SCALE's programs, content, and services.",
  openGraph: {
    title: "SCALE | Terms of Service",
    description:
      "The terms and conditions governing your use of SCALE's website and services.",
    type: "website",
    url: "https://scaleindia.in/terms-of-service",
    siteName: "SCALE",
  },
};

const LAST_UPDATED = "22 September 2026";

const sections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: (
      <p>
        These Terms of Service (&quot;Terms&quot;) govern your access to and
        use of scaleindia.in and any related content, features, programs, or
        services offered by SCALE, a part of Sona Valliappa Group
        (&quot;SCALE&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;). By accessing or using our website, you agree to be
        bound by these Terms. If you do not agree, please do not use our
        Services.
      </p>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    content: (
      <p>
        Our Services are intended for individuals who are legally able to
        enter into binding agreements, including prospective students,
        parents or guardians on behalf of minors, industry partners,
        institutions, and job applicants. If you are using the Services on
        behalf of an organisation, you confirm you have the authority to
        bind that organisation to these Terms.
      </p>
    ),
  },
  {
    id: "use-of-website",
    title: "Use of the Website",
    content: (
      <>
        <p>You agree to use our website only for lawful purposes. You must not:</p>
        <ul>
          <li>
            Use the website in any way that violates applicable local,
            national, or international law or regulation;
          </li>
          <li>
            Attempt to gain unauthorised access to our systems, servers, or
            networks;
          </li>
          <li>
            Upload or transmit viruses, malware, or any code of a destructive
            nature;
          </li>
          <li>
            Submit false, misleading, or fraudulent information through our
            forms, including admissions, careers, or contact enquiries; or
          </li>
          <li>
            Scrape, copy, or reproduce content from the website for
            commercial purposes without our written consent.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "accounts-submissions",
    title: "Enquiries, Applications, and Submissions",
    content: (
      <p>
        When you submit information through our contact, admissions, career,
        or partnership forms, or post comments on our blog, you are
        responsible for ensuring the accuracy of the information you provide.
        Submitting an enquiry or application does not guarantee admission,
        placement, employment, or partnership with SCALE or any of its
        institutions; all such decisions remain at our sole discretion and
        are subject to our respective selection and eligibility processes.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: (
      <p>
        All content on this website, including text, graphics, logos, images,
        videos, course material, and the overall design, is the property of
        SCALE, Sona Valliappa Group, or its licensors, and is protected by
        applicable intellectual property laws. You may view and download
        content for personal, non-commercial use only. Any other use,
        including reproduction, modification, distribution, or republication,
        requires our prior written permission.
      </p>
    ),
  },
  {
    id: "third-party-content",
    title: "Third-Party Links and Institutions",
    content: (
      <p>
        Our website may reference or link to third-party websites, including
        group institutions such as Sona GCC, Sona Finishing School, Sona Tech
        School, AI Consultancy, and Sona Flexi Staffing, some of which may
        operate under their own terms and policies. We are not responsible
        for the content, accuracy, or practices of third-party websites, and
        inclusion of a link does not imply endorsement.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    content: (
      <p>
        Our Services, including all content and information on this website,
        are provided on an &quot;as is&quot; and &quot;as available&quot;
        basis without warranties of any kind, whether express or implied. We
        do not warrant that the website will be uninterrupted, error-free, or
        completely secure, or that any information published (including
        program details, fees, or placement statistics) is free from
        inadvertent error. Please verify important details directly with our
        team before relying on them.
      </p>
    ),
  },
  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: (
      <p>
        To the fullest extent permitted by law, SCALE and Sona Valliappa
        Group shall not be liable for any indirect, incidental, special, or
        consequential damages arising out of or in connection with your use
        of, or inability to use, our website or Services, even if we have
        been advised of the possibility of such damages.
      </p>
    ),
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: (
      <p>
        You agree to indemnify and hold harmless SCALE, Sona Valliappa Group,
        and our respective officers, employees, and affiliates from any
        claims, damages, liabilities, or expenses arising from your misuse of
        the website or violation of these Terms.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <p>
        We reserve the right to suspend or restrict your access to the
        website, without notice, if we reasonably believe you have violated
        these Terms or engaged in conduct that may harm SCALE, other users,
        or third parties.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the
        laws of India. Any disputes arising out of or relating to these Terms
        or your use of the Services shall be subject to the exclusive
        jurisdiction of the courts in Bengaluru, Karnataka.
      </p>
    ),
  },
  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    content: (
      <p>
        We may revise these Terms from time to time. Updated Terms will be
        posted on this page with a revised &quot;Last updated&quot; date.
        Your continued use of the website after changes are posted
        constitutes your acceptance of the revised Terms.
      </p>
    ),
  },
  {
    id: "contact-us",
    title: "Contact Us",
    content: (
      <p>
        If you have questions about these Terms of Service, please contact us
        at{" "}
        <a href={`mailto:${FOOTER_CONTACT_INFO.email}`}>
          {FOOTER_CONTACT_INFO.email}
        </a>{" "}
        or at {FOOTER_CONTACT_INFO.address}
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms of Service"
      description="The terms and conditions that govern your access to and use of scaleindia.in and SCALE's programs and services."
      lastUpdated={LAST_UPDATED}
      sections={sections}
    />
  );
}
