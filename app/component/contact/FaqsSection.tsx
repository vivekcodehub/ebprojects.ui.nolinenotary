"use client";

import { FAQ_DATA, FAQItem } from "@/app/lib/data/mock-data";
import { useState } from "react";
import FaqsAccordion from "./FaqsAccordion";

interface FaqsSectionProps {
    tag?: string;
    title?: string;
    description?: string;
    items?: FAQItem[];
    defaultOpenId?: number | null;
    className?: string;
}

export default function FaqsSection({
    tag,
    title,
    description,
    items = FAQ_DATA,
    defaultOpenId = items[0]?.id ?? null,
    className = "",
}: FaqsSectionProps) {
    const [activeId, setActiveId] = useState<number | null>(defaultOpenId);

    return (
        <section className={`py-12 md:py-20 ${className}`}>
            <div className="maxContainer">
                <div className="grid lg:grid-cols-[546px_1fr] gap-10">
                    <div>
                        {tag && <span className="tag">{tag}</span>}
                        <h2 className="title36 text-primary-black">{title}</h2>
                        {description && (
                            <p className="body16 text-neutral-10">{description}</p>
                        )}
                    </div>

                    <div>
                        {items.map((item) => (
                            <FaqsAccordion
                                key={item.id}
                                item={item}
                                isOpen={activeId === item.id}
                                onToggle={() =>
                                    setActiveId(activeId === item.id ? null : item.id)
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}