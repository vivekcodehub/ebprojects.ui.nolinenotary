import Link from "next/link";
import Button from "./ui/atoms/Button";

interface ReadyToStartSectionProps {
    title: string;
    description?: string
    buttonShow: boolean;
}

export default function ReadyToStartSection({
    title,
    description,
    buttonShow = false
}: ReadyToStartSectionProps) {
    return (
        <section className="py-12 md:py-20 bg-neutral-yellow-light">
            <div className="maxContainer text-center">
                <h2 className="title36 text-primary-black mb-2">{title}</h2>
                <p className="max-w-[660px] mx-auto mb-6">{description}</p>

                <div className="flex lg:flex-row flex-col items-center justify-center gap-4">
                    <Link
                        href="/#BookAppointmentSection"
                        className="block"
                    >
                        <Button
                            variant="primary"
                            size="md"
                        >

                            Book an Online Appointment

                        </Button>
                    </Link>

                    {buttonShow && (
                        <Link
                            href="/#services"
                        >
                            <Button
                                variant="outline"
                                size="md"
                            >
                                VIEW SERVICES
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
