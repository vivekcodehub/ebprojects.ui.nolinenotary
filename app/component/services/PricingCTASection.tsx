import Link from "next/link";
import Button from "../ui/atoms/Button";
import { PricingCTAData } from "@/app/lib/data/services/types";

type PricingCTASectionProps = {
    data: PricingCTAData;
    className?: string;
};

export default function PricingCTASection({
    data,
    className = "",
}: PricingCTASectionProps) {

    return (
        <section className={`bg-neutral-yellow-light py-10 lg:py-18 ${className}`}>
            <div className="maxContainer">
                <div className="grid lg:grid-cols-[1fr_434px] grid-cols-1 gap-8 items-start">
                    <div className="max-w-[680px]">
                        <h2 className="mb-5 title36 text-neutral-deep-black">
                            {data.title}
                        </h2>
                        <div className="space-y-3 body18 text-neutral-deep-black">
                            {data.description.map((text) => (
                                <p key={text}>{text}</p>
                            ))}
                        </div>
                    </div>

                    <div className="flex lg:min-h-[434px] flex-col border border-secondary-black bg-neutral-off-white p-6">
                        <h3 className="title24 text-neutral-10">{data.card.title}</h3>
                        <p className="mt-1 mb-5 flex items-center gap-2 text-neutral-10">
                            <span className="title24">{data.card.startingLabel}</span>
                            <span className="title36">{data.card.startingPrice}</span>
                        </p>

                        <ul className="space-y-2.5 mb-6">
                            {data.card.items.map((item) => (
                                <li
                                    key={item.label}
                                    className="flex justify-between body14 text-neutral-10"
                                >
                                    <span>{item.label}</span>
                                    <span className="!font-medium">{item.price}</span>
                                </li>
                            ))}
                        </ul>

                        <Link
                            href={data.card.ctaHref}
                            className="mt-auto block"
                        >
                            <Button
                                variant="primary"
                                size="sm"
                                className="w-full"
                            >
                                {data.card.ctaLabel}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}