import { Testimonial } from "../lib/data/mock-data";
import Star from "./svg-icons/Star";

interface TestimonialsSectionProps {
    testimonial: Testimonial[];
}

export default function TestimonialsSection({ testimonial }: TestimonialsSectionProps) {
    return (
        <section className="py-12 md:py-20">
            <div className="maxContainer">
                <div className="text-center mb-8">
                    <span className="tag">TESTIMONIALS</span>
                    <h2 className="title36 text-primary-black mb-2">Client Experiences</h2>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4">
                    {testimonial.map((testimonial) => (
                        <div className="border border-neutral-30 bg-neutral-off-white p-6">
                            <div className="flex gap-1 mb-8">
                                {Array.from({ length: testimonial.rating }).map((_, index) => (
                                    <Star
                                        key={index}
                                        className="w-5 h-5 text-primary-yellow"
                                    />
                                ))}
                            </div>

                            <p className="body16 text-neutral-10  mb-12">
                                "{testimonial.review}"
                            </p>

                            <div>
                                <h4 className="body16 text-neutral-10  !font-medium uppercase">
                                    {testimonial.name}
                                </h4>

                                <p className="body16 text-neutral-10 font-mono">
                                    {testimonial.designation}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
