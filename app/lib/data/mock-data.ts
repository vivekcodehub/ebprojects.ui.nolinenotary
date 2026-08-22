import Trust1 from "@/app/component/svg-icons/Trust1";
import Trust2 from "@/app/component/svg-icons/Trust2";
import Trust4 from "@/app/component/svg-icons/Trust4";
import BadgeIcon from "@/app/component/svg-icons/BadgeIcon";
import LockIcon from "@/app/component/svg-icons/LockIcon";
import ClockIcon from "@/app/component/svg-icons/ClockIcon";
import MapIcon from "@/app/component/svg-icons/MapIcon";
import BoltIcon from "@/app/component/svg-icons/BoltIocn";
import { ComponentType, ReactNode, SVGProps } from "react";

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
  { label: "Pricing", href: "#prcing" },
  { label: "Contact", href: "/contact" },
];

export const cta: CtaButton = {
  label: "Book an Online Appointment",
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
}

export const HERO: HeroContent = {
  tag: "Online Notary & Commissioner of Oaths Services in Ontario",
  title: "Get Your Affidavit or Statutory Declaration Commissioned Online",
  description: `No Line Notary provides fast and convenient online commissioning services across Ontario. Meet with an authorized Commissioner for Taking Affidavits by secure video conference and complete eligible affidavits, statutory declarations, oaths and declarations without travelling to an office.
Appointments are available online, allowing clients throughout Ontario to complete eligible documents from home, work or virtually anywhere with an internet connection.`,
  primaryCta: {
    label: "Book an Online Appointment",
    href: "#BookAppointmentSection",
  },
  image: {
    src: "/images/hero.png",
    alt: "Notary signing documents beside a Lady Justice statue",
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
    title: " Book Your Appointment",
    text: "Choose an available appointment time and provide your contact information.",
  },
  {
    step: "2",
    title: "Upload Your Unsigned Document",
    text: "Upload the document you need commissioned. Unless instructed otherwise, do not sign the document before your appointment.",
  },
  {
    step: "3",
    title: "Meet Your Commissioner Online",
    text: "Join your secure video appointment from your computer, tablet or smartphone. The Commissioner must be able to see, hear and communicate with you in real time throughout the commissioning process.",
  },
  {
    step: "4",
    title: "Verify Your Identity",
    text: "You will be asked to provide acceptable identification so that the Commissioner can confirm your identity.",
  },
  {
    step: "5",
    title: "Swear, Affirm or Make Your Declaration",
    text: "The Commissioner will administer the required oath, affirmation or declaration. You will sign the document as instructed during the appointment.",
  },
  {
    step: "6",
    title: "Receive Your Completed Document",
    text: "Once the commissioning process has been completed, your document will be returned to you electronically where appropriate.",
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
    href: "mailto:info@nolinenotary.com",
    label: "info@nolinenotary.com",
  },
  {
    href: "1-416-840-6943",
    label: "1-416-840-6943",
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
    question: "Is online notarization legal in Ontario?",
    answer: `Ontario distinguishes between remote commissioning and formal notarization.
Remote commissioning of eligible affidavits, statutory declarations, oaths and declarations is permitted where the requirements of Ontario Regulation 431/20 are satisfied.
Formal notarial acts under the Notaries Act cannot currently be performed remotely because the necessary regulation authorizing remote notarization has not been enacted.`,
  },
  {
    id: 2,
    question: "Can I commission an affidavit online in Ontario?",
    answer:
      "Yes. Ontario Regulation 431/20 permits an oath or declaration to be administered remotely when its requirements are satisfied. The Commissioner and the person making the affidavit or declaration must be able to see, hear and communicate with each other in real time throughout the transaction.",
  },
  {
    id: 3,
    question: "Can I get an OSAP affidavit commissioned online?",
    answer:
      "Many OSAP affidavits can be commissioned remotely. The particular requirements depend upon the document requested by OSAP or your financial aid office.",
  },

  {
    id: 4,
    question: "Can I sign my affidavit before the appointment?",
    answer:
      "Generally, no. If your signature must be sworn or affirmed before the Commissioner, wait until your appointment and follow the Commissioner's instructions.",
  },

  {
    id: 5,
    question: "What identification do I need?",
    answer:
      "You will need appropriate identification that allows the Commissioner to confirm your identity. We will provide identification instructions before your appointment.",
  },

  {
    id: 6,
    question: "Do I have to be in Toronto?",
    answer:
      "No. Eligible documents can be remotely commissioned from locations throughout Ontario, subject to the requirements applicable to the particular document.",
  },

  {
    id: 7,
    question:
      "Will every organization accept an electronically or remotely commissioned document?",
    answer: `Not necessarily. Ontario law permits remote commissioning, but that does not require every court, government agency, foreign authority, bank, business or other recipient to accept a remotely commissioned document.
If you are uncertain, confirm the receiving organization's requirements before your appointment.`,
  },

  {
    id: 8,
    question: "Can you certify a true copy online?",
    answer:
      "A certified true copy generally requires the Notary Public to compare the copy against the original document. Where the required notarial act cannot lawfully be performed remotely, an in-person appointment will be required.",
  },

  {
    id: 9,
    question: "Can documents for use outside Canada be completed online?",
    answer:
      "It depends upon the document and the requirements of the destination country. Documents intended for international use may require notarization, an apostille or authentication/legalization. These requirements should be determined before completing the document.",
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

// Online Commissioning
export type CommissioningPoint = {
  id: string;
  text: string;
  bold?: string;
};

export const COMMISSIONING_POINTS: CommissioningPoint[] = [
  {
    id: "remote-law",
    text: "Ontario law permits certain oaths, affidavits and statutory declarations to be commissioned remotely using real-time audio-video technology.",
  },
  {
    id: "compliance",
    text: "Our remote commissioning process is designed to comply with the",
    bold: "Commissioners for Taking Affidavits Act and Ontario Regulation 431/20 – Administering Oath or Declaration Remotely.",
  },
  {
    id: "process",
    text: "You and the Commissioner meet by live video. Your identity is confirmed, the document is reviewed for commissioning purposes, and you swear, affirm or make the required declaration before the Commissioner.",
  },
  {
    id: "convenience",
    text: "No driving. No waiting room. No standing in line.",
  },
];

// DocumentsCommissioned
export type TabContent = {
  id: string;
  label: string;
  heading: string;
  intro?: string;
  items: string[];
  outro?: string;
};

export const TABS: TabContent[] = [
  {
    id: "affidavits",
    label: "Affidavits",
    heading: "Affidavits",
    intro:
      "We provide online commissioning for many types of affidavits, including:",
    items: [
      "Affidavits of Identity",
      "Affidavits of Service",
      "Affidavits of Income",
      "General Affidavits",
      "Court-related Affidavits",
      "Divorce Affidavits",
      "OSAP Affidavits",
      "Affidavits relating to lost or missing documents",
    ],
  },
  {
    id: "statutory-declarations",
    label: "Statutory Declarations",
    heading: "Statutory Declarations",
    intro:
      "Eligible statutory declarations may also be completed through an online appointment, including:",
    items: [
      "Statutory Declarations of Common-Law Status",
      "Statutory Declarations of Marital Status",
      "Statutory Declarations of Identity",
      "Name Change Declarations",
      "Insurance Declarations",
      "Government and administrative declarations",
      "Custodianship Declarations",
      "Progress Payment Declarations",
    ],
  },
  {
    id: "osap-affidavits",
    label: "OSAP Affidavits",
    heading: "Need an OSAP affidavit commissioned online?",
    intro:
      "Ontario students may be required to provide an affidavit to establish or confirm information relating to their OSAP application. Depending upon the requirement, an OSAP affidavit may address matters such as:",
    items: [
      "common-law status",
      "marital or family circumstances",
      "income",
      "financial information",
      "parental information",
      "other circumstances affecting an OSAP application",
    ],
    outro:
      "Book an online appointment and complete your eligible OSAP affidavit by video with an Ontario Commissioner for Taking Affidavits.",
  },
  {
    id: "vehicle-declarations",
    label: "Ontario Vehicle Declarations",
    heading: "Ontario Vehicle Declarations",
    intro:
      "Certain sworn statements and declarations involving Ontario vehicles may be eligible for remote commissioning, including documents relating to:",
    items: [
      "family gifts of used vehicles",
      "transfers of used vehicles",
      "vehicle ownership",
      "related sworn statements",
    ],
    outro:
      "Always confirm the current requirements of ServiceOntario or the receiving organization before completing your document remotely.",
  },
  {
    id: "immigration-documents",
    label: "Immigration & Invitation Documents",
    heading: "Immigration and Invitation Documents",
    intro:
      "We can commission eligible affidavits and statutory declarations relating to immigration and travel matters. Services may include:",
    items: [
      "invitation letters",
      "declarations of identity",
      "declarations concerning family relationships",
      "custodianship declarations",
      "other eligible sworn documents",
    ],
    outro:
      "Whether a particular document can be completed remotely depends upon the nature of the document and the requirements of the organization receiving it.",
  },
];

// Why use Noline Notart
export type BenefitCard = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  span: string;
};

export const BENEFITS: BenefitCard[] = [
  {
    id: "convenient",
    title: "Convenient",
    description:
      "Complete eligible affidavits and statutory declarations without travelling to an office.",
    icon: ClockIcon,
    span: "lg:col-span-4 lg:row-span-1",
  },
  {
    id: "fast",
    title: "Fast",
    description:
      "Book online and complete your commissioning appointment by secure video conference.",
    icon: BoltIcon,
    span: "lg:col-span-2",
  },
  {
    id: "ontario-wide",
    title: "Ontario-Wide",
    description:
      "Our online commissioning service is available to clients throughout Ontario.",
    icon: MapIcon,
    span: "lg:col-span-3",
  },
  {
    id: "professional",
    title: "Professional",
    description:
      "Your appointment is conducted by an authorized professional familiar with Ontario's commissioning requirements.",
    icon: BadgeIcon,
    span: "lg:col-span-3",
  },
  {
    id: "secure",
    title: "Secure",
    description:
      "Documents and identification are handled using secure electronic processes designed to protect confidential information.",
    icon: LockIcon,
    span: "lg:col-span-4",
  },
];

// Ontario Coverage

export type CityGroup = {
  region: string;
  cities: string[];
};

export const CITY_GROUPS: CityGroup[] = [
  {
    region: "Greater Toronto Area",
    cities: [
      "Toronto",
      "Mississauga",
      "Brampton",
      "Markham",
      "Vaughan",
      "Richmond Hill",
      "Oakville",
      "Burlington",
      "Oshawa",
      "Whitby",
      "Pickering",
      "Ajax",
    ],
  },
  {
    region: "Southwestern & Central Ontario",
    cities: [
      "Hamilton",
      "London",
      "Kitchener",
      "Waterloo",
      "Cambridge",
      "Guelph",
      "Windsor",
      "Niagara Falls",
      "St. Catharines",
      "Barrie",
    ],
  },
  {
    region: "Eastern & Northern Ontario",
    cities: [
      "Ottawa",
      "Kingston",
      "Peterborough",
      "Sudbury",
      "Thunder Bay",
      "North Bay",
    ],
  },
];

// In Person Section
export const IN_PERSON_REASONS: string[] = [
  "certify a true copy of an original document;",
  "perform a formal notarial act;",
  "notarize a signature where physical presence is legally required;",
  "inspect an original document;",
  "prepare documents for authentication or apostille purposes where original notarization is required; or",
  "satisfy a receiving organization that specifically requires in-person notarization.",
];

// Commissioning VS Section
export type ComparisonCard = {
  id: string;
  label: string;
  status: "Available Online" | "Not Available Remotely";
  points: string[];
};

export const COMPARISON: ComparisonCard[] = [
  {
    id: "commissioning",
    label: "Online Commissioning",
    status: "Available Online",
    points: [
      "Ontario permits remote commissioning of eligible oaths and declarations when the requirements of Ontario Regulation 431/20 are satisfied.",
      "Remote commissioning can therefore be used for many affidavits, statutory declarations and other sworn documents.",
    ],
  },
  {
    id: "notarization",
    label: "Online Notarization",
    status: "Not Available Remotely",
    points: [
      "Formal notarial acts under Ontario's Notaries Act cannot currently be performed remotely because the regulation required to authorize remote or virtual notarization under that Act has not been enacted.",
      "Accordingly, No Line Notary does not perform formal notarial acts remotely where Ontario law requires the person to be physically present before a Notary Public.",
    ],
  },
];

// Appointment Requirements Section

export const REQUIREMENTS: string[] = [
  "the document requiring commissioning;",
  "valid identification;",
  "a computer, smartphone or tablet with a camera and microphone;",
  "a reliable internet connection; and",
  "access to your email.",
];
