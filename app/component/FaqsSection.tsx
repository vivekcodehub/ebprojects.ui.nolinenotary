'use client'
import { useState } from "react";
import { FAQS_DATA, ServiceItem } from "../lib/data/mock-data";
import Files from "./svg-icons/Files";
import Button from "./ui/atoms/Button";

const INITIAL_COUNT = 4;

export default function FaqsSection() {
    const [showAll, setShowAll] = useState(false);
    const visibleCards = showAll ? FAQS_DATA : FAQS_DATA.slice(0, INITIAL_COUNT);
    const hasMore = FAQS_DATA.length > INITIAL_COUNT;
    return (
        <section id="services" className="py-12 md:py-20 bg-neutral-off-white">
            <div className="maxContainer">
                <h2 className="title36 text-primary-black">Notarial Solutions for Every Need</h2>

                {visibleCards.map((card) => (
                    <ServiceCard key={card.id} {...card} />
                ))}

                {hasMore && (
                    <div className="flex justify-center mt-4">
                        <Button
                            variant="outline"
                            size="md"
                            onClick={() => setShowAll((prev) => !prev)}
                            className="uppercase"
                        >
                            {showAll ? "View Less" : "View More"}
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}

function ServiceCard({
    title,
    description,
    list,
    note
}: ServiceItem) {
    return (
        <div className="grid lg:grid-cols-[368px_1fr] lg:gap-10 gap-4 py-8 border-b border-secondary-black">
            <div className="flex items-center gap-3 text-neutral-10">
                <Files className="w-[1.375rem] h-[1.625rem] shrink-0" />
                <h3 className="title20 text-pretty">
                    {title}
                </h3>
            </div>

            <div>
                <div className="body16 text-neutral-10 mb-2">
                    {description}
                </div>

                {list && (
                    <ol className="list-decimal pl-6 mb-2">
                        {list.map((item, index) => (
                            <li key={index} className="body16 text-neutral-10">{item}</li>
                        ))}
                    </ol>
                )}

                {note && (
                    <p className="body16 text-neutral-10">{note}</p>
                )}
            </div>
        </div>
    );
}
