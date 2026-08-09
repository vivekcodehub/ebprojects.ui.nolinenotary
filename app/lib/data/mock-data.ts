import Trust1 from "@/app/component/svg-icons/Trust1";
import Trust2 from "@/app/component/svg-icons/Trust2";
import Trust4 from "@/app/component/svg-icons/Trust4";
import { ComponentType, SVGProps } from "react";

// Navbar
export interface NavLink {
  label: string;
  href: string;
}

export interface CtaButton {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

export const cta: CtaButton = {
  label: "BOOK NOW",
  href: "#BookAppointmentSection",
};

// Hero Banner
export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroBadge {
  label: string;
  value: string;
}

export interface HeroContent {
  tag: string;
  title: string;
  description: string;
  primaryCta: HeroCta;
  image: {
    src: string;
    alt: string;
  };
  badge: HeroBadge;
}

export const HERO: HeroContent = {
  tag: "What we do",
  title: "Professional Notarial Services at Your Fingertips.",
  description:
    "Fast, reliable, and legally compliant notary services tailored for the modern world. Whether you need an in-person signing or a remote session, we handle your documents with absolute precision.",
  primaryCta: { label: "Get Started", href: "#BookAppointmentSection" },
  image: {
    src: "/images/hero.png",
    alt: "Notary signing documents beside a Lady Justice statue",
  },
  badge: {
    label: "Availability",
    value: "24/7 Remote Access",
  },
};

// How it Works

export interface HowItsWorks {
  step: string;
  title: string;
  text: string;
}

export const HOW_ITS_WORKS = [
  {
    step: "1",
    title: "BOOK AN APPOINTMENT",
    text: "Fill out the form and upload  documents to start.",
  },
  {
    step: "2",
    title: "WE WILL CONTACT YOU",
    text: "We will review your documents and confirm your appointment",
  },
  {
    step: "3",
    title: "MAKE A CONNECTION",
    text: "We will send you a secure video link via email",
  },
  {
    step: "4",
    title: "RETURN DOCUMENTS",
    text: "We will return your notarized documents Email, or Download, or Pickup, or Regular Mail",
  },
];

// Pricing Card
export interface Pricing {
  title: string;
  price: string;
  priceText: string;
  description: string;
  listItem: string[];
  bgColor?: "light" | "dark";
}

export const PRICING_DATA: Pricing[] = [
  {
    title: "Virtual",
    price: "$15",
    priceText: "per signature",
    description: "Includes standard document verification and electronic seal.",
    listItem: [
      "Single signature notarization",
      "Standard document verification",
      "Digital seal & record keeping",
      "Secure identity verification",
    ],
  },
  {
    title: "Mobile",
    price: "$25",
    priceText: "per session",
    description:
      "Includes secure video link, identity verification (KBA), and digital storage.",
    listItem: [
      "Everything in General Notarization",
      "Remote video signing session",
      "Multi-state compliance",
      "KBA & ID credential analysis",
      "Digital audio/video storage",
    ],
    bgColor: "dark",
  },
  {
    title: "In Person",
    price: "$125",
    priceText: "starting at",
    description: "Includes standard document verification and electronic seal.",
    listItem: [
      "Single signature notarization",
      "Standard document verification",
      "Digital seal & record keeping",
      "Secure identity verification",
    ],
  },
];

// Trust Section
export interface TrustList {
  listItem: string[];
}

export const TRUSTLIST_DATA: TrustList = {
  listItem: [
    "No hidden fees or travel surcharges",
    "Secure document archiving for 7 years",
    "Multi-factor identity authentication",
  ],
};

// Trust Cards
export interface TrustCard {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
}

export const TRUSTCARD_DATA: TrustCard[] = [
  {
    icon: Trust1,
    title: "CERTIFIED",
    text: "Fully bonded and insured signing agents.",
  },
  {
    icon: Trust2,
    title: "EFFICIENT",
    text: "Average turnaround time of under 15 minutes.",
  },
  {
    icon: Trust1,
    title: "SECURE",
    text: "SOC2 Type II compliant digital infrastructure.",
  },
  {
    icon: Trust4,
    title: "COVERAGE",
    text: "Serving all metropolitan and remote areas.",
  },
];

// Testimonials
export interface Testimonial {
  rating: number;
  review: string;
  name: string;
  designation: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    rating: 5,
    review:
      "The fastest notary service I have ever used. The remote platform was incredibly intuitive and I had my loan docs signed in 10 minutes.",
    name: "ALEX R.",
    designation: "Real Estate Developer",
  },
  {
    rating: 5,
    review:
      "Professional and reliable. They handled our complex legal documents with care and arrived exactly on time for the mobile signing.",
    name: "SARAH M.",
    designation: "Corporate Legal Counsel",
  },
  {
    rating: 5,
    review:
      "Security was my main concern. No Line Notary's encryption and identity verification put my mind at ease immediately.",
    name: "JAMES T.",
    designation: "Private Client",
  },
];

// Faqs
export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  list?: string[];
  note?: string;
}

export const FAQS_DATA: ServiceItem[] = [
  {
    id: 1,
    title: "Notarization",
    description: "Notarizing a document means any of the following:",
    list: [
      "Where the notary notarizes your signature on an original document.",
      "Where the notary certifies your document as original.",
      "Where the notary makes a notarized true copy of your original document.",
    ],
    note: "If you are seeking a true copy of an original document, you must bring the original document with you. The notary will then notarize and seal the copy.",
  },
  {
    id: 2,
    title: "Notarization and witnessing of a signature",
    description:
      "The notary will review your identification and witness you sign the document. This can be any document, and can even be in a foreign language. You will be asked to print your name in English beside your signature. It is very important that the person having their signature notarized appear and sign in front of a notary, there will be no exceptions.",
  },
  {
    id: 3,
    title: "Notarization of a will",
    description:
      "They will require two witnesses. The notary can be one of the two witnesses but a second will have to be available for signature. Often we have additional witnesses available in our office. However, you may wish to bring a witness with you. The second witness should not be an executor, a beneficiary or a spouse of a beneficiary to the will.",
  },
  {
    id: 4,
    title: "Notarization of a criminal record check",
    description: "Notarizing a document means any of the following:",
    list: [
      "Where the notary notarizes your signature on an original document.",
      "Where the notary certifies your document as original.",
      "Where the notary makes a notarized true copy of your original document.",
    ],
    note: "If you are seeking a true copy of an original document, you must bring the original document with you. The notary will then notarize and seal the copy.",
  },
  {
    id: 5,
    title: "Commissioning documents",
    description:
      "Commissioning a document means taking votes or declarations from the person who signed an affidavit or statutory declaration. Only certain individuals designated as commissioners are authorized by the province of Ontario to do this. To commission an affidavit, the lawyer or Commissioner First verifies the identity of the person giving the oath. Once identity has been established, the lawyer or commissioner will ask the deponent to swear or solemnly affirm and declare the truth of the contents of the document.",
  },
  {
    id: 6,
    title: "Powers of attorney",
    description:
      "A power of attorney is a document in which you appoint somebody to act on your behalf. We witness and can commission and notarize these documents. Powers of attorney in Canada require two witnesses.",
  },
  {
    id: 7,
    title: "Property documents",
    description:
      "Should you be selling a property, you may require some of your signatures to be commissioned as well as others to be witnessed. Note that this does not include legal advice. you will be required to provide identification.",
  },
  {
    id: 8,
    title: "Affidavits of execution",
    description:
      "An affidavit is a document in which you swear something to be true. Oftentimes the document requires a witness to swear and clear that they were present and saw another person sign a document. In Canada, this is most often used with wills.",
  },
  {
    id: 9,
    title: "Passports",
    description:
      'Canadian passport applications require you to have a guarantor sign that has known you for a minimum of two years. If you can\'t find such a person, you may use the "in lieu of guarantor" form. A notary required commission of this form.',
  },
  {
    id: 10,
    title: "Consents to travel documents",
    description:
      "When a child is not travelling with both parents, a notarized consent to travel document may be required. Each person giving consent for the child to travel must sign in front of a notary. The person travelling with the child does not need to appear.",
  },
  {
    id: 11,
    title: "Translating documents",
    description:
      "Included in the translation package whereby an original document has been translated, a certified true copy of the original document is usually included.",
  },
  {
    id: 12,
    title: "Invitation letters",
    description:
      "Letters of invitation are used in support of an application for a visitor to visit Canada and receive a visa for doing so. If more than one person is signing the letter, each person must do so in front of the notary.",
  },
  {
    id: 13,
    title: "Electronic document certification",
    description:
      "If the original document is only an electronica document, we can certify the electronica document as original.",
  },
  {
    id: 14,
    title: "Certifying copies of documents",
    description:
      "A notary will certify a copy of an original document. certification can be done for both domestic and international documents. Please bring the originals with you as the notary must see them.",
  },
];

// Footer
export interface FooterLink {
  href: string;
  label: string;
}

export const footerLinks: FooterLink[] = [
  {
    href: "/privacy-policy",
    label: "Privary Policy",
  },
  {
    href: "/terms-of-service",
    label: "Terms of Service",
  },
];

export interface FooterContact {
  href: string;
  label: string;
}

export const footerContacts: FooterContact[] = [
  {
    href: "mailto:support@noline.notary",
    label: "support@noline.notary",
  },
  {
    href: "1-800-NOTARY-NL",
    label: "1-800-NOTARY-NL",
  },
];

// Contact us page
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 1,
    question: "What is online notarization?",
    answer:
      "Online notarization allows eligible legal documents to be signed and witnessed through a secure live video appointment rather than requiring you to attend an office in person. After your identity is verified and the document is signed during the video conference, the completed document is returned to you electronically.",
  },
  {
    id: 2,
    question: "Do you provide mobile services after hours?",
    answer:
      "Yes. We offer mobile notary appointments outside normal business hours by prior appointment.",
  },
  {
    id: 3,
    question: "Can you notarize documents in digital format?",
    answer:
      "Yes. We can notarize eligible digital documents using our secure remote online notarization platform where applicable.",
  },
];

// Hygine pages

export interface LegalSection {
  title: string;
  content: string[];
}

// PRIVACY_POLICY
export const PRIVACY_POLICY: LegalSection[] = [
  {
    title: "Information We Collect",
    content: [
      "We collect the personal information you voluntarily provide when contacting us, scheduling appointments, or requesting notary services.",
      "This information may include your name, email address, phone number, mailing address, and any information required to complete the requested service.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "To provide and manage our notary services.",
      "To communicate regarding appointments and service updates.",
      "To comply with applicable legal and regulatory obligations.",
      "To improve our website and customer experience.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We use industry-standard security measures to protect your personal information against unauthorized access, disclosure, or alteration.",
      "While no method of transmission is completely secure, we continually review and improve our security practices.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "We may use trusted third-party providers for scheduling, payment processing, and communication services.",
      "These providers only receive information necessary to perform their services.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "You may request access, correction, or deletion of your personal information where permitted by law.",
      "Requests can be submitted through our contact information listed on this website.",
    ],
  },
];

// TERMS_OF_SERVICE
export const TERMS_OF_SERVICE: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    content: [
      "By accessing this website or using our services, you agree to these Terms of Service.",
      "If you do not agree with these terms, please discontinue use of the website.",
    ],
  },
  {
    title: "Services",
    content: [
      "We provide professional notary and document authentication services in accordance with applicable laws.",
      "Availability of services may vary depending on jurisdiction and appointment availability.",
    ],
  },
  {
    title: "User Responsibilities",
    content: [
      "You are responsible for providing accurate information.",
      "You must present valid identification during appointments when required.",
      "You agree not to misuse our website or services.",
    ],
  },
  {
    title: "Payments",
    content: [
      "Fees for services will be communicated before the appointment.",
      "Payment is due upon completion of the requested service unless otherwise agreed.",
    ],
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from the use of our services.",
    ],
  },
  {
    title: "Changes to These Terms",
    content: [
      "We reserve the right to modify these Terms of Service at any time.",
      "Updated versions will be posted on this page with a revised effective date.",
    ],
  },
];
