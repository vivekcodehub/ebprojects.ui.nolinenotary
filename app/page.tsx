import BookAppointmentSection from "./component/BookAppointmentSection";
import FaqsSection from "./component/FaqsSection";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import HowItsWorkSection from "./component/HowItsWorkSection";
import Navbar from "./component/Navbar";
import PricingSection from "./component/PricingSection";
import ReadyToStartSection from "./component/ReadyToStartSection";
import TestimonialsSection from "./component/TestimonialsSection";
import TrustSection from "./component/TrustSection";
import {
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
        <HowItsWorkSection data={HOW_ITS_WORKS} />
        <BookAppointmentSection/>
        <PricingSection data={PRICING_DATA} />
        <TrustSection data={TRUSTLIST_DATA} card={TRUSTCARD_DATA} />
        <TestimonialsSection testimonial={TESTIMONIALS} />
        <FaqsSection />
        <ReadyToStartSection
          title="Ready to Start?"
          description="Join thousands of professionals who trust No Line Notary for their critical document
          needs. Secure your appointment in seconds."
          buttonShow={false}
        />
      </main>
      <Footer />
    </>
  );
}
