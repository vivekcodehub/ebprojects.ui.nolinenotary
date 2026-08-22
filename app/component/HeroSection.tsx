import Image from "next/image";
import { HERO } from "../lib/data/mock-data";
import Button from "./ui/atoms/Button";
import Link from "next/link";


export default function HeroSection() {
    return (
        <section className="w-full bg-white py-12 md:py-20">
            <div className="maxContainer">
                <div className="flex flex-col justify-between gap-8 lg:flex-row md:items-center md:gap-14">
                    {/* Text column */}
                    <div className="flex flex-col gap-4 lg:w-1/2">
                        <h1
                            className="title56 text-neutral-10"
                        >
                            {HERO.title}
                        </h1>
                        <p
                            className="body16 md:text-lg md:leading-[28.8px] text-neutral-10"
                        >
                            {HERO.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link href={HERO.primaryCta.href}>
                                <Button variant="primary" size="md">
                                    {HERO.primaryCta.label}
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Image column */}
                    <div className="relative">
                        <div className="max-w-[544px] mx-auto xl:h-[516px] h-full w-full overflow-hidden">
                            <Image
                                src={HERO.image.src}
                                alt={HERO.image.alt}
                                width={544}
                                height={516}
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
