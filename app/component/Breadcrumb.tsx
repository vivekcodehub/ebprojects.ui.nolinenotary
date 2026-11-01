"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Slash from "./svg-icons/Slash";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items?: BreadcrumbItem[];
  labels?: Record<string, string>;
  // homeLabel?: string;
  noLinkSegments?: string[];
  className?: string;
};

const toLabel = (segment: string) =>
  decodeURIComponent(segment)
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

export default function Breadcrumb({
  items,
  labels = {},
  // homeLabel = "Home",
    noLinkSegments = ["services"],
  className = "",
}: BreadcrumbProps) {
  const pathname = usePathname();

  const crumbs: BreadcrumbItem[] =
    items ??
    [
      // { label: homeLabel, href: "/" },
      ...pathname
        .split("/")
        .filter(Boolean)
        .map((segment, i, arr) => ({
          label: labels[segment] ?? toLabel(segment),
           href: noLinkSegments.includes(segment)
            ? undefined
            : "/" + arr.slice(0, i + 1).join("/"),
        })),
    ];

  if (crumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb" className={`py-2 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 parabold font-jetbrains uppercase maxContainer">
        {crumbs.map((crumb, i) => {
          const isLast = i === crumbs.length - 1;

          return (
            <li key={crumb.href ?? crumb.label} className="flex items-center gap-1.5">
              {isLast || !crumb.href ? (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={isLast ? "text-neutral-grey-85/60" : "text-neutral-grey-85"}
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="transition-colors text-neutral-grey-85 hover:text-primary-yellow"
                >
                  {crumb.label}
                </Link>
              )}

              {!isLast && (
               <Slash className="w-5 h-6 text-neutral-grey-85"/>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}