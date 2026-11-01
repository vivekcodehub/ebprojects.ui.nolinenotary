import { DocumentsCommissionData } from "@/app/lib/data/services/types";
import Check from "../svg-icons/Check";
import Link from "next/link";
import Button from "../ui/atoms/Button";


interface DocumentsCommissionSectionProps {
    data: DocumentsCommissionData;
    className?: string;
}

export default function DocumentsCommissionSection({
    data,
    className = '',
}: DocumentsCommissionSectionProps) {
    return (
        <section className={`lg:py-18 py-10 ${className}`}>
            <div className="maxContainer">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                    {/* Left Content */}
                    <div>
                        <h2 className="title36 text-neutral-10 mb-4">
                            {data.title}
                        </h2>

                        <div className="space-y-1">
                            {data.description.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="body16 text-neutral-10"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="space-y-3">

                        {/* Document Cards */}
                        {data.cards.map((card) => (
                            <div
                                key={card.id}
                                className={
                                    card.variant === 'dark'
                                        ? 'border border-neutral-10 bg-neutral-deep-black p-4 text-neutral-grey-80'
                                        : 'border border-secondary-black bg-neutral-off-white p-4 text-neutral-10'
                                }
                            >
                                <h3 className="title24 mb-3">
                                    {card.title}
                                </h3>

                                {card.description?.map((para, index) => (
                                    <p key={index} className="body14 text-pretty">
                                        {para}
                                    </p>
                                ))}

                                {card.listTitle && (
                                    <p className="body14">
                                        {card.listTitle}
                                    </p>
                                )}

                                <ul className="space-y-2 mt-5">
                                    {card.features?.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2 body14"
                                        >
                                            <Check className="w-3 h-3" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {card.footer && (
                                    <div className="mt-6">
                                        {card.footer?.map((para, index) => (
                                            <p key={index} className="body14 text-pretty">
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                )}


                                {card.button?.href && (
                                    <Link
                                        href={card.button.href || ""}
                                        className="mt-6 flex"
                                    >
                                        <Button
                                            variant="primary"
                                            size="sm"
                                        >
                                            {card.button.label}
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Notice Box */}
                        {data.notice && (
                            <div className="border border-neutral-30 bg-neutral-off-white p-6">
                                <p className="body16 text-neutral-10">
                                    {data.notice}
                                </p>
                            </div>
                        )}

                        {/* Contact Message */}
                        {data.contactMessage && (
                            <div className="border border-neutral-30 bg-neutral-off-white p-6">
                                <p className="title20 text-neutral-10">
                                    {data.contactMessage}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}