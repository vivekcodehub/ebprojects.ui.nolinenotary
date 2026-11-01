import { CommissionerVsNotaryData } from "@/app/lib/data/services/types";

interface CommissionerVsNotarySectionProps {
    data: CommissionerVsNotaryData;
    className?: string;
}

export default function CommissionerVsNotarySection({
    data,
    className = '',
}: CommissionerVsNotarySectionProps) {
    return (
        <section className={`lg:py-18 py-10 border-t border-[rgba(106,106,106,1)] ${className}`}>
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
                                    className="body18 text-neutral-10 last:mt-6"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Notice */}
                    <div>
                        <div className="border border-neutral-30 bg-neutral-off-white p-6">
                            <p className="title20 text-neutral-10">
                                {data.notice}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}