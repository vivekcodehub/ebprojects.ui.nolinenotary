"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type NavDropdownLink = {
  label: string;
  href: string;
};

type NavDropdownProps = {
  label: string;
  title?: string;
  links: NavDropdownLink[];
  itemsPerColumn?: number;
  className?: string;
};

const chunk = <T,>(arr: T[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );

export default function NavDropdown({
  label,
  title,
  links,
  itemsPerColumn = 5,
  className = "",
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const columns = chunk(links, itemsPerColumn);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className={`lg:static ${className}`}
      onMouseEnter={() => window.matchMedia("(min-width: 1024px)").matches && openMenu()}
      onMouseLeave={() => window.matchMedia("(min-width: 1024px)").matches && closeMenu()}
    >
      {/* Trigger */}
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-1.5 font-mono text-sm uppercase tracking-wide lg:w-auto"
      >
        {label}
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Panel */}
      <div
        className={`
          grid transition-all duration-200
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"}
          lg:absolute lg:inset-x-0 lg:top-full lg:z-50 lg:px-8
          ${open ? "lg:translate-y-0" : "lg:-translate-y-2"}
        `}
      >
        <div className="overflow-hidden">
          <div className="mt-4 bg-white font-mono text-sm uppercase tracking-wide text-black lg:mt-0 lg:px-7 lg:py-9 lg:shadow-sm">
            <p className="mb-6 hidden font-medium lg:block">{title ?? label}</p>

            <div className="flex flex-col gap-4 lg:grid lg:grid-flow-col lg:auto-cols-fr lg:gap-0">
              {columns.map((col, ci) => (
                <ul
                  key={ci}
                  className={`flex flex-col gap-4 lg:gap-6 lg:px-7 lg:first:pl-0 lg:last:pr-0 ${
                    ci < columns.length - 1 ? "lg:border-r lg:border-black" : ""
                  }`}
                >
                  {col.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block whitespace-nowrap transition-opacity hover:opacity-60"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}