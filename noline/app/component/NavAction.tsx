
import { navLinks } from "../lib/data/mock-data";
import Link from "next/link";



const NavAction = () => {

    return (
        <div>
            {navLinks.map((link, i) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`body16 text-[var(--neutral-deep-black)] underline-offset-8 transition-colors hover:text-primary-yellow ${i === 0 ? "underline decoration-black decoration-2" : ""
                        }`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}

export default NavAction