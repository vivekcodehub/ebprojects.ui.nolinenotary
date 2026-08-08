import { BookAppointmentForm } from "./booking/book-appointment-form";

export default function BookAppointmentSection() {
    return (
        <section id="BookAppointmentSection" className="py-12 md:py-20">
            <div className="maxContainer">
                <div className="grid xl:grid-cols-[500px_1fr] gap-8 lg:gap-10 ">
                    <div className="">
                        <span className="tag">BOOK APPOINTMENT</span>
                        <h2 className="title36 text-primary-black mb-2">Fix your Time slot here</h2>
                        <p className="title18 text-primary-black text-pretty">Use this form to make an appointment with a Notary.
                            We will send you instructions which includes a secure link to facilitate our online notary session</p>
                    </div>
                    <BookAppointmentForm />
                </div>
            </div>
        </section>
    );
}