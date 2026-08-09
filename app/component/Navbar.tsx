
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cta, navLinks } from "../lib/data/mock-data";
import Image from "next/image";
import Button from "./ui/atoms/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header aria-label="Header" className="sticky top-0 z-1024  bg-white/50 shadow-sm backdrop-blur-sm py-3">
            <div className="maxContainer">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/images/logo.svg"
                            width={107}
                            height={70}
                            alt="Noline Notary"
                            className="w-full h-auto object-contain"
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`body16 text-[var(--neutral-deep-black)] underline-offset-8 transition-colors hover:text-primary-yellow ${isActive
                                            ? "underline decoration-black decoration-2"
                                            : ""
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <Button variant="primary" size="md">
                            <Link href={cta.href}>{cta.label}</Link>
                        </Button>
                    </nav>

                    {/* Hamburger button */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        className="relative flex h-9 w-9 flex-col items-center justify-center gap-[6px] md:hidden"
                    >
                        <span
                            className={`block h-0.5 w-7 rounded bg-[var(--neutral-deep-black)] transition-all duration-300 ease-in-out ${isOpen ? "translate-y-[8px] rotate-45" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-7 rounded bg-[var(--neutral-deep-black)] transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-7 rounded bg-[var(--neutral-deep-black)] transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-[8px] -rotate-45" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isOpen
                            ? "max-h-60 opacity-100"
                            : "max-h-0 opacity-0"
                        }`}
                >
                    <nav className="flex flex-col gap-4 pb-4 pt-8">
                        {navLinks.map((link) => {
                            const isActive =
                                pathname === link.href ||
                                (link.href !== "/" &&
                                    pathname.startsWith(`${link.href}/`));

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`body16 text-[var(--neutral-deep-black)] transition-colors ${isActive
                                            ? "underline decoration-black decoration-2 underline-offset-8"
                                            : ""
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        <Button variant="primary" size="md">
                            <Link
                                href={cta.href}
                                onClick={() => setIsOpen(false)}
                            >
                                {cta.label}
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}