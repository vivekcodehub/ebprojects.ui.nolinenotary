import { FAQItem } from "../mock-data";

export interface ImageText {
  image: string;
  imageAlt: string;
  title: string;
  paragraphs: string[];
  listContent?: string[];
  ctaUrl?: string;
  ctaLabel?: string;
  imagePosition?: "left" | "right";
}

export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
}

export interface HowItWorksData {
  tag: string;
  title: string;
  buttonText: string;
  buttonHref: string;
  steps: HowItWorksStep[];
}

export interface DocumentCard {
  id: number;
  title: string;
  description?: string[];
  listTitle?: string;
  features?: string[];
  footer?: string[];
  button?: {
    label: string;
    href: string;
  };
  variant?: "light" | "dark";
}

export interface DocumentsCommissionData {
  title: string;
  description: string[];
  cards: DocumentCard[];
  notice?: string;
  contactMessage?: string;
}

export interface OnlineAffidavitData {
  title: string;
  description: string[];
  items: string[];
  footer: string[];
}

export interface StatutoryDeclarationData {
  title: string;
  description: string[];
}

export interface DoNotSignYourAppointmentData {
  title: string;
  description: string[];
}

export interface OsapAffidavitData {
  tag: string;
  title: string;
  buttonText: string;
  buttonHref: string;
  description: string[];
  items: string[];
}

export interface CourtDocumentsData {
  title: string;
  description: string[];
  documents: {
    id: number;
    title: string;
  }[];
  footer: string[];
}

export interface CommissionerVsNotaryData {
  title: string;
  description: string[];
  notice: string;
}

export interface AppointmentRequirementsData {
  tag: string;
  title: string;
  intro: string;
  requirements: string[];
  notice: string;
}

export interface OntarioLocationsData {
  tag: string;
  title: string;
  description: string[];
  mapImage: string;
  mapAlt: string;
  locations: string[];
  footer: string[];
}

export interface WhyChooseUsData {
  tag: string;
  title: string;
  description: string[];
  benefits: {
    id: number;
    title: string;
    description: string;
  }[];
}

export interface PriceItem {
  label: string;
  price: string;
}

export interface PricingCTAData {
  title: string;
  description: string[];
  card: {
    title: string;
    startingLabel: string;
    startingPrice: string;
    items: PriceItem[];
    ctaLabel: string;
    ctaHref: string;
  };
}

export interface ServicesHeroData {
  tag: string;
  title: string;
  description: string[];
  backgroundImage: string;
  backgroundImageAlt: string;
  card: {
    title: string;
    price: string;
    items: PriceItem[];
    ctaLabel: string;
    ctaHref: string;
  };
}

export interface ServicesMetaData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
}

// Pricing CTA List Section
export interface PricingTier {
  id: number;
  title: string;
  description: string;
}

export interface PricingCtaListData {
  title: string;
  intro: string;
  tiers: PricingTier[];
  note: string;
  card: {
    title: string;
    items: PriceItem[];
    ctaLabel: string;
    ctaHref: string;
  };
}

export interface ServicePageData {
  slug: string;
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
  };
  breadcrumbLabel: string;
  hero: ServicesHeroData;
  imageTextLeft?: ImageText;
  imageTextRight?: ImageText;
  howItWorks?: HowItWorksData;
  documentsCommission?: DocumentsCommissionData;
  onlineAffidavit?: OnlineAffidavitData;
  statutoryDeclaration?: StatutoryDeclarationData;
  DoNotSignYourAppointment?: DoNotSignYourAppointmentData;
  osapAffidavit?: OsapAffidavitData;
  courtDocuments?: CourtDocumentsData;
  commissionerVsNotary?: CommissionerVsNotaryData;
  appointmentRequirements?: AppointmentRequirementsData;
  locations?: OntarioLocationsData;
  whyChooseUs?: WhyChooseUsData;
  pricingCtaList?: PricingCtaListData;
  faq?: {
    title: string;
    items: FAQItem[];
  };
  pricingCTA?: PricingCTAData;
}
