import { REQUIREMENTS } from "../lib/data/mock-data";
import CheckListIcon from "./svg-icons/CheckListIcon";

export default function AppointmentRequirementsSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="maxContainer">
        <div className="bg-neutral-off-white rounded-2xl p-8 md:p-14">
          <div className="text-brand-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
            <CheckListIcon className="w-6 h-6" />
          </div>
 
          <h2 className="title36 text-primaryblack">
            What Do I Need for an Online Commissioner of Oaths Appointment?
          </h2>
 
          <p className="mt-5 title20 text-neutral-20">
            Before your appointment, you should have:
          </p>
 
          <ul className="mt-6 flex flex-col gap-3">
            {REQUIREMENTS.map((item) => (
              <li key={item} className="flex gap-3 text-neutral-700">
                <span
                  aria-hidden="true"
                  className="bg-primary-black mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
 
          <p className="mt-8 border-t border-neutral-200 pt-6 body16 text-neutral-20">
            You should generally not sign the document in advance if your
            signature is required to be sworn, affirmed, declared or
            witnessed during the appointment.
          </p>
        </div>
      </div>
    </section>
  );
}
 