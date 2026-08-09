import Footer from "../component/Footer";
import LegalContentSection from "../component/legal/LegalContentSection";
import Navbar from "../component/Navbar"
import { TERMS_OF_SERVICE } from "../lib/data/mock-data";


export default function TermsOfServicePage() {
    return (
        <>
            <Navbar />
            <main>
                <LegalContentSection
                    title="Terms of Service"
                    description="These Terms of Service govern your access to and use of our website and professional notary services."
                    sections={TERMS_OF_SERVICE}
                />
            </main>
            <Footer />
        </>
    );
}