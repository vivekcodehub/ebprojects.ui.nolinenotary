import Image from "next/image";
import Link from "next/link";
import { footerContacts, footerLinks } from "../lib/data/mock-data";

export default function Footer() {
    return (
        <footer className="bg-white lg:py-16 py-10">
            <div className="maxContainer">
                <div className="flex md:flex-row flex-col justify-between">
                    <div>
                        <Link href={"#"}>
                            <Image
                                src={'images/logo.svg'}
                                width={107}
                                height={70}
                                alt="Noline Notary"
                                className="w-[107px] h-[70px] object-cover"
                            />
                        </Link>
                        <p className="body16 text-neutral-10 mt-2 mb-6 max-w-[370px]">Professional, secure, and fast notarial services for the modern digital era.</p>
                        <p className="body14 text-neutral-10 md:block hidden">© 2026 No Line Notary. Professional Notarial Services. All Rights Reserved.</p>
                    </div>

                    <div className="flex md:flex-row flex-col gap-8">
                        <div className="flex flex-col md:gap-8 gap-4">
                            <h4 className="body16 text-primary-black">LINKS</h4>
                            <ul>
                                {footerLinks.map((item, index) => (
                                    <li key={index} className="body16 text-neutral-10 md:mb-4 mb-2 last:mb-0 hover:text-primary-yellow transition-colors">
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col md:gap-8 gap-4">
                            <h4 className="body16 text-primary-black">CONTACT</h4>
                            <ul>
                                {footerContacts.map((item, index) => (
                                    <li key={index} className="body16 text-neutral-10 md:mb-4 mb-2 last:mb-0 hover:text-primary-yellow transition-colors">
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="body14 text-neutral-10 md:hidden block mt-8">© 2026 No Line Notary. Professional Notarial Services. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
