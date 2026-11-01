import { WhyChooseUsData } from "@/app/lib/data/services/types";
import ShieldIcon from "../svg-icons/ShieldIcon";

interface WhyChooseUsSectionProps {
    data: WhyChooseUsData;
    className?: string;
}

export default function WhyChooseUsSection({
    data,
    className = '',
}: WhyChooseUsSectionProps) {
    return (
        <section
            className={`border-y border-[rgba(106,106,106,1)] lg:py-18 py-10 ${className}`}
        >
            <div className="maxContainer">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

                    {/* Left Content */}
                    <div>
                        <div className="tag mb-2">
                            {data.tag}
                        </div>

                        <h2 className="title36 text-neutral-10 mb-4">
                            {data.title}
                        </h2>

                        <div className="space-y-2">
                            {data.description.map((paragraph, index) => (
                                <p
                                    key={index}
                                    className="body18 text-neutral-10"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        {data.benefits.map((benefit) => (
                            <div
                                key={benefit.id}
                                className="flex min-h-[120px] flex-col items-start border border-secondary-black p-4"
                            >
                                <ShieldIcon className="w-5 h-6 shrink-0" />

                                <h3 className="mt-6 body16 !font-medium uppercase text-neutral-10">
                                    {benefit.title}
                                </h3>

                                <p className="mt-1 body12 text-neutral-10">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}