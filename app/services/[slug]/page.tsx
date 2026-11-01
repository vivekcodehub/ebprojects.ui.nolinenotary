
import Navbar from "@/app/component/Navbar";
import ServicesHero from "@/app/component/services/ServicesHeroSection";
import ImageTextContent from "@/app/component/services/ImageTextContentSection";
import HowItWorksSection from "@/app/component/services/HowItsWorkSection";
import DocumentsCommissionSection from "@/app/component/services/DocumentCommissionSection";
import OnlineAffidavitSection from "@/app/component/services/OnlineAffidavitSection";
import OnlineStatutoryDeclarationSection from "@/app/component/services/OnlineStatutoryDeclarationSection";
import OsapAffidavitSection from "@/app/component/services/OsapAffidavitSection";
import OntarioCourtDocumentsSection from "@/app/component/services/OntarioCourtDocumentsSection";
import CommissionerVsNotarySection from "@/app/component/services/CommissionerVsNotarySection";
import AppointmentRequirementsSection from "@/app/component/services/AppointmentRequirementsSection";
import OntarioLocationsSection from "@/app/component/services/OntarioLocationsSection";
import WhyChooseUsSection from "@/app/component/services/WhyChooseUsSection";
import FaqsSection from "@/app/component/contact/FaqsSection";
import PricingCTASection from "@/app/component/services/PricingCTASection";
import Footer from "@/app/component/Footer";
import { getServiceBySlug, servicePages } from "@/app/lib/data/services";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/component/Breadcrumb";
import type { Metadata } from "next";
import { SITE_URL } from "@/app/lib/data/mock-data";
import DoNotSignYourAppointmentSection from "@/app/component/services/DoNotSignYourAppointmentSection";
import PricingCTaList from "@/app/component/services/PricingCtaListSection";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const page = getServiceBySlug(slug);

    if (!page) return {};

    const url = `${SITE_URL}/services/${page.slug}`;
    const image = page.meta.ogImage ?? "/images/contact.png";

    return {
        title: page.meta.title,
        description: page.meta.description,
        keywords: page.meta.keywords,
        alternates: { canonical: url },
        openGraph: {
            title: page.meta.title,
            description: page.meta.description,
            url,
            siteName: "No Line Notary",
            images: [{ url: image, width: 1200, height: 630 }],
            type: "website",
        },
    };
}

export default async function ServicesPage({ params }: ServicePageProps) {
    const { slug } = await params;
    const page = getServiceBySlug(slug);

    if (!page) notFound();
    return (
        <>
            <Navbar />
            <main>
                <Breadcrumb
                    labels={{
                        services: "Services",
                        [page.slug]: page.breadcrumbLabel,
                    }}
                />
                {page.hero && <ServicesHero data={page.hero} />}
                {page.imageTextLeft && <ImageTextContent data={page.imageTextLeft} />}
                {page.imageTextRight && <ImageTextContent data={page.imageTextRight} />}
                {page.howItWorks && <HowItWorksSection data={page.howItWorks} />}
                {page.documentsCommission && <DocumentsCommissionSection data={page.documentsCommission} />}
                {page.onlineAffidavit && <OnlineAffidavitSection data={page.onlineAffidavit} />}
                {page.statutoryDeclaration && <OnlineStatutoryDeclarationSection data={page.statutoryDeclaration} />}
                {page.pricingCtaList && <PricingCTaList data={page.pricingCtaList} />}
                {page.osapAffidavit && <OsapAffidavitSection data={page.osapAffidavit} />}
                {page.courtDocuments && <OntarioCourtDocumentsSection data={page.courtDocuments} />}
                {page.commissionerVsNotary && <CommissionerVsNotarySection data={page.commissionerVsNotary} />}
                {page.DoNotSignYourAppointment && <DoNotSignYourAppointmentSection data={page.DoNotSignYourAppointment} />}
                {page.appointmentRequirements && <AppointmentRequirementsSection data={page.appointmentRequirements} />}
                {page.locations && <OntarioLocationsSection data={page.locations} />}
                {page.whyChooseUs && <WhyChooseUsSection data={page.whyChooseUs} />}
                {page.faq && <FaqsSection title={page.faq.title} items={page.faq.items} />}
                {page.pricingCTA && <PricingCTASection data={page.pricingCTA} />}
            </main>
            <Footer />
        </>
    );
}