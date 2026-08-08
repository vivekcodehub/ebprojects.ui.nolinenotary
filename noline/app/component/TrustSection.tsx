import { TrustCard, TrustList } from "../lib/data/mock-data";
import CheckCircle from "./svg-icons/CheckCircle";


interface TrustSectionProps {
    data: TrustList;
    card: TrustCard[];
}

export default function TrustSection({ data, card }: TrustSectionProps) {
    return (
        <section className="py-12 md:py-20">
            <div className="maxContainer">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            {card.map((card) => {
                                const Icon = card.icon;
                                return (
                                    <div key={card.title} className="flex flex-col gap-4 justify-between border border-secondary-black p-4 md:h-[147px] h-full text-neutral-10">
                                        <Icon />
                                        <div>
                                            <h4 className="body16 !font-medium uppercase">{card.title}</h4>
                                            <p className="body12">{card.text}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <span className="tag">TRUST</span>
                            <h2 className="title36 text-primary-black mb-3">Trust Built on Legal Precision.</h2>
                            <p className="title18 text-primary-black text-pretty">In a field where a single mistake can invalidate a contract, we prioritize accuracy above all else. Our team undergoes continuous training on state-specific statutes.</p>
                        </div>

                        <ul>
                            {data.listItem.map((item) => (
                                <li key={item} className="flex items-center body16 text-neutral-10 gap-2 mb-3 last:mb-0">
                                    <CheckCircle className="w-5 h-5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}