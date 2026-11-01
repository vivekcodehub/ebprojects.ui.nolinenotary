"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cta, NavLink, navLinks } from "../lib/data/mock-data";
import Image from "next/image";
import Button from "./ui/atoms/Button";

const ITEMS_PER_COLUMN = 5;

const chunk = <T,>(arr: T[], size: number): T[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

function Chevron({ open }: { open: boolean }) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const pathname = usePathname();

    const isLinkActive = (link: NavLink): boolean =>
        pathname === link.href ||
        (link.href !== "/" && pathname.startsWith(`${link.href}/`)) ||
        !!link.children?.some(isLinkActive);

    const openDropdown = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setIsDropdownOpen(true);
    };

    const closeDropdown = () => {
        closeTimer.current = setTimeout(() => setIsDropdownOpen(false), 150);
    };

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
                    <nav className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link);

                            if (link.children?.length) {
                                return (
                                    <div
                                        key={link.href}
                                        onMouseEnter={openDropdown}
                                        onMouseLeave={closeDropdown}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                                            aria-expanded={isDropdownOpen}
                                            aria-haspopup="true"
                                            className={`cursor-pointer body16 flex items-center gap-1.5 text-[var(--neutral-deep-black)] underline-offset-8 transition-colors hover:text-primary-yellow ${isActive
                                                ? "underline decoration-black decoration-2"
                                                : ""
                                                }`}
                                        >
                                            {link.label}
                                            <Chevron open={isDropdownOpen} />
                                        </button>

                                        {/* Dropdown panel (positioned against the sticky header) */}
                                        <div
                                            className={`absolute inset-x-0 top-full bg-white shadow-sm transition-all duration-200 pt-6 pb-14 ${isDropdownOpen
                                                ? "visible translate-y-0 opacity-100"
                                                : "invisible -translate-y-2 opacity-0"
                                                }`}
                                        >
                                            <div className="maxContainer py-8">
                                                <p className="mb-6 title24 !font-semibold uppercase text-[rgba(0,0,0,1)]">
                                                    {link.label}
                                                </p>

                                                <div className="grid grid-cols-4 divide-x divide-[var(--neutral-deep-black)]">
                                                    {chunk(link.children, ITEMS_PER_COLUMN).map((column, i) => (
                                                        <ul key={i} className="flex flex-col gap-3 px-6 first:pl-0">
                                                            {column.map((child) => (
                                                                <li key={child.href}>
                                                                    <Link
                                                                        href={child.href}
                                                                        onClick={() => setIsDropdownOpen(false)}
                                                                        className={`body16 uppercase text-pretty text-[var(--neutral-deep-black)] transition-colors hover:text-primary-yellow ${isLinkActive(child) ? "text-primary-yellow" : ""
                                                                            }`}
                                                                    >
                                                                        {child.label}
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

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

                        <Link href={cta.href}>
                            <Button variant="primary" size="md">
                                {cta.label}
                            </Button>
                        </Link>
                    </nav>

                    {/* Hamburger button */}
                    <button
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                        className="relative flex h-9 w-9 flex-col items-center justify-center gap-[6px] lg:hidden"
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
                    className={`transition-all duration-300 ease-in-out lg:hidden ${isOpen
                        ? "max-h-[80vh] overflow-y-auto opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                        }`}
                >
                    <nav className="flex flex-col gap-4 pb-4 pt-8">
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link);

                            if (link.children?.length) {
                                return (
                                    <div key={link.href}>
                                        <button
                                            type="button"
                                            onClick={() => setIsMobileDropdownOpen((prev) => !prev)}
                                            aria-expanded={isMobileDropdownOpen}
                                            className={`body16 flex w-full items-center justify-between text-[var(--neutral-deep-black)] ${isActive
                                                ? "underline decoration-black decoration-2 underline-offset-8"
                                                : ""
                                                }`}
                                        >
                                            {link.label}
                                            <Chevron open={isMobileDropdownOpen} />
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ${isMobileDropdownOpen
                                                ? "mt-4 grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                                }`}
                                        >
                                            <ul className="flex flex-col gap-3 overflow-hidden border-l border-[var(--neutral-deep-black)] pl-4">
                                                {link.children.map((child) => (
                                                    <li key={child.href}>
                                                        <Link
                                                            href={child.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="font-mono text-xs uppercase text-[var(--neutral-deep-black)]"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            }

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