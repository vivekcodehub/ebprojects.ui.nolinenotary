import Navbar from "../component/Navbar"
import { ContactForm } from "../component/contact/contact-form";
import HeroSection from "../component/contact/HeroSection";
import Phone from "../component/svg-icons/Phone";
import Mail from "../component/svg-icons/Phone";
import Image from "next/image";
import FaqsSection from "../component/contact/FaqsSection";
import ReadyToStartSection from "../component/ReadyToStartSection";
import Footer from "../component/Footer";

export default function ContactUsPage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <section className="py-12 md:py-20">
                    <div className="maxContainer">
                        <div className="grid lg:grid-cols-[1fr_534px] grid-cols-1 gap-6">
                            <ContactForm />
                            <div>
                                <div className="bg-neutral-off-white border border-neutral-30 p-6">
                                    <h4 className="body14 text-secondary-black mb-6">DIRECT COMMUNICATION</h4>
                                    <ul>
                                        <li className="flex gap-4 border-b border-primary-black mb-6 pb-6">
                                            <div className="bg-primary-yellow w-[44px] h-[44px] flex items-center justify-center">
                                                <Phone className="w-[1.125rem] h-[1.125rem]" />
                                            </div>

                                            <div>
                                                <p className="body12 text-secondary-black">PHONE</p>
                                                <p className="title24 text-primar-black">1-416-840-6943</p>
                                            </div>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="bg-primary-yellow w-[44px] h-[44px] flex items-center justify-center">
                                                <Mail className="w-[1.125rem] h-[1.125rem]" />
                                            </div>
                                            <div>
                                                <p className="body12 text-secondary-black">OFFICIAL EMAIL</p>
                                                <p className="title24 text-primar-black">info@nolinenotary.com</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="relative mt-8">
                                    <Image
                                        src={'/images/map.png'}
                                        width={534}
                                        height={300}
                                        alt="Map"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 bg-primary-yellow p-4 max-w-[218px]">
                                        <h5 className="body14 !font-medium text-neutral-deep-black mb-2">HQ LOCATION</h5>
                                        <p className="body14 text-neutral-deep-black">1200 Federal Plaza, Suite
                                            400
                                            Metro City, MC 90210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FaqsSection />

                <ReadyToStartSection
                    title="Ready to secure your legal documents?"
                    buttonShow={true}
                />
            </main>
