import { CommissioningPoint } from "../lib/data/mock-data";

interface OnlineCommissioningProps {
    data: CommissioningPoint[];
}


export default function OnlineCommissioning({ data }: OnlineCommissioningProps) {
    return (
        <section className="w-full bg-white py-12 md:py-20">
            <div className="maxContainer">
                <div className="bg-neutral-off-white lg:p-14 p-4 rounded-xl">
                    <h2 className="title36 text-primary-black mb-8">Online Commissioning Across Ontario</h2>
                    <ul className="list-disc space-y-3 bg-white lg:p-12 py-4 pl-6 rounded-lg">
                        {data.map((point) => (
                            <li key={point.id} className="body16 text-primary-black">
                                {point.text}
                                {point.bold && <strong> {point.bold}</strong>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
