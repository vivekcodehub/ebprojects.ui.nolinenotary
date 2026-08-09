import Link from "next/link";
import { Pricing } from "../lib/data/mock-data";
import { Button } from "./ui/atoms/Button";

interface PricingSectionProps {
    data: Pricing[];
}

export default function PricingSection({ data }: PricingSectionProps) {
    return (
        <section className="py-12 md:py-20">
            <div className="maxContainer">
                <div className="text-center mb-8">
                    <span className="tag">Pricing</span>
                    <h2 className="title36 text-primary-black mb-2">Transparent Pricing</h2>
                    <p className="title18 text-primary-black text-pretty">Professional notarial services with clear, upfront costs.</p>
                </div>

                <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                    {data.map((items) => (
                        <PricingCard key={items.title} {...items} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingCard({ title, price, priceText, description, listItem, bgColor }: Pricing) {
    return (
        <div className={`flex flex-col justify-between border border-secondary-black p-5 ${bgColor === "dark"
            ? "bg-neutral-deep-black"
            : "bg-neutral-off-white"
            }`}
        >
            <div>
                <h4 className={`title24  ${bgColor === "dark"
                    ? "text-white"
                    : "text-primary-black"
                    }`}
                >
                    {title}
                </h4>
                <h2 className={`title36  ${bgColor === "dark"
                    ? "text-white"
                    : "text-primary-black"
                    }`}
                >
                    {price}
                    <span className={`body16 inline ml-2  ${bgColor === "dark"
                        ? "text-white"
                        : "text-primary-black"
                        }`}
                    >
                        {priceText}
                    </span>
                </h2>
                <p className={`body16  my-4  ${bgColor === "dark"
                    ? "text-white"
                    : "text-primary-black"
                    }`}
                >
                    {description}
                </p>
                <ul className="mb-12">
                    {listItem.map((item, index) => (
                        <li key={index} className={`body14  mb-2 last:mb-0 ${bgColor === "dark"
                            ? "text-white"
                            : "text-primary-black"
                            }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>


            <Button variant="outline" size="sm" className={`w-full ${bgColor === "dark"
                ? "!bg-primary-yellow"
                : ""
                }`}
            >
                <Link
                    href="#BookAppointmentSection"
                    className="block"
                >
                    GET STARTED
                </Link>
            </Button>
        </div>
    );
}