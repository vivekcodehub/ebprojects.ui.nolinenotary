"use client";

import { FAQItem } from "@/app/lib/data/mock-data";

interface FaqsAccordionProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

export default function FaqsAccordion({
    item,
    isOpen,
    onToggle,
}: FaqsAccordionProps) {
    return (
        <div className="border-b border-neutral-300 py-6">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-start text-left"
            >
                <div className="pr-8 cursor-pointer">
                    <h3 className="title20 text-primary-black">
                        {item.question}
                    </h3>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-2" : "max-h-0"
                            }`}
                    >
                        <p className="body16 text-neutral-10">
                            {item.answer}
                        </p>
                    </div>
                </div>

                <span className="title20 text-neutral-10 leading-none">
                    {isOpen ? "−" : "+"}
                </span>
            </button>
        </div>
    );
}