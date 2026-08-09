import Footer from "../component/Footer";
import LegalContentSection from "../component/legal/LegalContentSection";
import Navbar from "../component/Navbar"
import { PRIVACY_POLICY } from "../lib/data/mock-data";


export default function PrivacyPolicyPage() {
    return (
        <>
            <Navbar />
            <main>
                <LegalContentSection
                    title="Privacy Policy"
                    description="This Privacy Policy explains how we collect, use, and safeguard your personal information when you use our website and services."
                    sections={PRIVACY_POLICY}
                />
            </main>
            <Footer />
        </>
    );
}