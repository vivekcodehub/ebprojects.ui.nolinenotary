import Image from "next/image";
import Link from "next/link";
import { ServicesHeroData } from "@/app/lib/data/services/types";
import Button from "../ui/atoms/Button";
import { renderBold } from "@/app/lib/utils.tsx/renderBold";


interface ServicesHeroProps {
    data: ServicesHeroData;
}

export default function ServicesHero({ data }: ServicesHeroProps) {
    return (
        <section className="bg-neutral-deep-black lg:py-18 py-10">
            <div className="maxContainer">
                <div className="grid lg:grid-cols-[1fr_546px] grid-cols-1 items-center gap-8">
                    <div className="max-w-[684px]">
                        <div className="text-[rgba(220,104,47,1)] body16 uppercase">{data.tag}</div>
                        <h1 className="title56 text-white mb-4">{data.title}</h1>
                        {data.description.map((text, index) => (
                            <p key={index} className="body18 text-[rgba(255,255,255,1)]">
                                {renderBold(text)}
                            </p>
                        ))}
                    </div>

                    <div className="relative lg:min-h-[546px] flex flex-col lg:p-10">
                        <Image
                            src={data.backgroundImage}
                            alt={data.backgroundImageAlt}
                            fill
                            sizes="546px"
                            priority
                            className="hidden lg:block object-cover object-center"
                        />

                        <div className="relative z-10 flex flex-col h-full flex-1 justify-between border border-secondary-black bg-[rgba(248,249,255,1)] lg:p-6 p-4">
                            <div>
                                <h4 className="title24 text-neutral-10 mb-2">{data.card.title}</h4>
                                <p className="title36 text-neutral-10">{data.card.price}</p>

                                <ul className="mt-8 space-y-3">
                                    {data.card.items.map((item) => (
                                        <li
                                            key={item.label}
                                            className="flex justify-between body14 text-neutral-10"
                                        >
                                            <p>{item.label}</p>
                                            <h5 className="!font-medium">{item.price}</h5>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link href={data.card.ctaHref} className="block w-full mt-8">
                                <Button className="w-full">{data.card.ctaLabel}</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}