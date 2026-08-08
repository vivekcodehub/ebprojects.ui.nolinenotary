import { HOW_ITS_WORKS, HowItsWorks } from "../lib/data/mock-data";

interface HowItsWorkSectionProps {
    data: HowItsWorks[];
}

export default function HowItsWorkSection({ data }: HowItsWorkSectionProps) {
    return (
        <section className="md:py-20 py-12">
            <div className="maxContainer">
                <div className="text-center mb-8">
                    <span className="tag">HOW IT WORKS</span>
                    <h2 className="title36 text-primary-black">Seamless Process</h2>
                </div>

                <div className="relative">
                    <div className="w-full border-t border-secondary-black absolute top-13 left-0 -z-1 lg:block hidden"></div>
                    <div className="grid lg:grid-cols-4 grid-cols-1 md:gap-4 gap-8">
                        {data.map((item) => (
                            <WorksCards key={item.step} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function WorksCards({ step, title, text }: HowItsWorks) {
    return (
        <div className="flex flex-col items-center text-center">
            <h3 className={`flex items-center justify-center title36 text-neutral-deep-black border border-neutral-deep-black w-24 h-24 ${step === "4"
                ? "bg-neutral-deep-black text-white"
                : "bg-white"
                }`}
            >{step}</h3>
            <h4 className="title18 !font-medium text-primary-black mt-6 mb-1">{title}</h4>
            <p className="body16 text-primary-black text-pretty">{text}</p>
        </div>
    );
}