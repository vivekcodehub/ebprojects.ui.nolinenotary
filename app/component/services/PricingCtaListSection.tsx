import Link from "next/link";
import Button from "../ui/atoms/Button";
import { PricingCtaListData } from "@/app/lib/data/services/types";

type PricingCTaListProps = {
    data: PricingCtaListData;
    className?: string;
};

export default function PricingCTaList({
    data,
    className = "",
}: PricingCTaListProps) {
    return (
        <section className={`bg-neutral-yellow-light py-10 lg:py-18 ${className}`}>
            <div className="maxContainer">
                <div className="grid lg:grid-cols-[1fr_434px] grid-cols-1 gap-8 items-start">
                    <div className="max-w-[680px]">
                        <h2 className="mb-5 title36 text-neutral-deep-black">
                            {data.title}
                        </h2>

                        <p className="body18 text-neutral-deep-black mb-5">{data.intro}</p>

                        <ul className="divide-y divide-secondary-black">
                            {data.tiers.map((tier) => (
                                <li key={tier.id} className="py-3 first:pt-0">
                                    <h3 className="title20 text-neutral-deep-black mb-1">
                                        {tier.title}
                                    </h3>
                                    <p className="body16 text-neutral-deep-black">
                                        {tier.description}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        <p className="body16 text-neutral-deep-black mt-8">{data.note}</p>
                    </div>

                    <div className="flex lg:min-h-[310px] flex-col border border-secondary-black bg-neutral-off-white p-6">
                        <h3 className="title24 text-neutral-10 mb-5">{data.card.title}</h3>

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

                        <Link href={data.card.ctaHref} className="mt-auto block">
                            <Button variant="primary" size="sm" className="w-full">
                                {data.card.ctaLabel}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}