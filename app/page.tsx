import AppointmentRequirementsSection from "./component/AppointmentRequirementsSection";
import BookAppointmentSection from "./component/BookAppointmentSection";
import CommissioningVsNotarizationSection from "./component/CommissioningVsNotarizationSection";
import DocumentsCommissioned from "./component/DocumentsCommissioned";
import FaqsSection from "./component/FaqsSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import HowItsWorkSection from "./component/HowItsWorkSection";
import InPersonNotarySection from "./component/InPersonNotarySection";
import Navbar from "./component/Navbar";
import OnlineCommissioningSection from "./component/OnlineCommissioningSection";
import OntarioCoverageSection from "./component/OntarioCoverageSection";
import PricingSection from "./component/PricingSection";
import ReadyToStartSection from "./component/ReadyToStartSection";
import TestimonialsSection from "./component/TestimonialsSection";
import TrustSection from "./component/TrustSection";
import WhyNoLineNotarySection from "./component/WhyNolineNotarySection";
import {
  COMMISSIONING_POINTS,
  HOW_ITS_WORKS,
  PRICING_DATA,
  TESTIMONIALS,
  TRUSTCARD_DATA,
  TRUSTLIST_DATA
} from "./lib/data/mock-data";


export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PricingSection data={PRICING_DATA} />
        <BookAppointmentSection />
        <OnlineCommissioningSection data={COMMISSIONING_POINTS} />
        <DocumentsCommissioned />
        <HowItsWorkSection data={HOW_ITS_WORKS} />
        <WhyNoLineNotarySection />
        <OntarioCoverageSection />
        <InPersonNotarySection />
        <CommissioningVsNotarizationSection />
        <AppointmentRequirementsSection />
        <TrustSection data={TRUSTLIST_DATA} card={TRUSTCARD_DATA} />
        <TestimonialsSection testimonial={TESTIMONIALS} />
        <FaqsSection />
        <ReadyToStartSection
          title="Need a Commissioner of Oaths Online?"
          description="Avoid the commute and complete your eligible affidavit or statutory declaration from home.
          Upload your document, meet with an Ontario Commissioner by secure video and receive your completed document electronically where appropriate."
          buttonShow={false}
        />
      </main>
      <Footer />
    </>
  );
}
