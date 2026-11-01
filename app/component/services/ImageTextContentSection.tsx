import { ImageText } from "@/app/lib/data/services/types";
import Image from "next/image";
import CheckCircle from "../svg-icons/CheckCircle";
import Button from "../ui/atoms/Button";
import Link from "next/link";

interface ImageTextContentProps {
    data: ImageText;
    className?: string;
}

export default function ImageTextContent({
    data,
    className = "",
}: ImageTextContentProps) {
    return (
        <section className={`lg:py-18 py-10 ${className}`}>
            <div className="maxContainer">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                    {/* Image */}
                    <div
                        className={
                            data.imagePosition === "right"
                                ? "lg:order-2 order-1"
                                : "lg:order-1 order-1"
                        }
                    >
                        <Image
                            src={data.image}
                            width={660}
                            height={372}
                            alt={data.imageAlt}
                            className="object-cover w-full"
                        />
                    </div>

                    {/* Content */}
                    <div
                        className={
                            data.imagePosition === "right"
                                ? "lg:order-1 order-2"
                                : "lg:order-2 order-2"
                        }
                    >
                        <h2 className="title36 text-neutral-10 mb-4">
                            {data.title}
                        </h2>

                        {data.paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="body18 text-neutral-10"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {data.listContent && (
                            <ul className="mt-4 space-y-3">
                                {data.listContent?.map((label, index) => (
                                    <li className="body16 text-neutral-10 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 shrink-0" />
                                        {label}
                                    </li>
                                ))}
                            </ul>
                        )}

                        {data.ctaUrl && (
                            <Link
                                href={data.ctaUrl || ""}
                                className="mt-6 flex"
                            >
                                <Button
                                    variant="primary"
                                    size="sm"
                                >
                                    {data.ctaLabel}
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}