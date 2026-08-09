import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="bg-neutral-off-white lg:pt-0 pt-10">
            <div className="maxContainer ">
                <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
                    <div className="max-w-[660px] w-full">
                        <span className="tag">CONNECT WITH US</span>
                        <h2 className="title56 text-primary-black my-3">Get in Touch</h2>
                        <p className="title18 text-primary-black text-pretty">Professional notarial services delivered with institutional precision. Reach out for
                            mobile signing, document verification, or corporate legal assistance.</p>
                    </div>

                    <div className="max-w-[597px] lg:ml-auto mx-auto relative lg:-right-[4.125rem]">
                        <Image
                            src={'/images/contact.png'}
                            width={597}
                            height={333}
                            alt="Contact"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}