"use client";

import { FAQ_DATA } from "@/app/lib/data/mock-data";
import { useState } from "react";
import FaqsAccordion from "./FaqsAccordion";

export default function FaqsSection() {
    const [activeId, setActiveId] = useState<number>(1);

    return (
        <section className="py-12 md:py-20">
            <div className="maxContainer">
                <div className="grid lg:grid-cols-[546px_1fr] gap-10">
                    <div>
                        <span className="tag">FAQ</span>
                        <h2 className="title36 text-primary-black">
                            Common Questions
                        </h2>

                        <p className="body16 text-neutral-10">
                            Quick answers to frequently asked procedural questions regarding
                            our notarial services.
                        </p>
                    </div>

                    <div>
                        {FAQ_DATA.map((item) => (
                            <FaqsAccordion
                                key={item.id}
                                item={item}
                                isOpen={activeId === item.id}
                                onToggle={() =>
                                    setActiveId(activeId === item.id ? 0 : item.id)
                                }
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}