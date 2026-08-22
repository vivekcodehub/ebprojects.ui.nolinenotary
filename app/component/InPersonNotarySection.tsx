import { IN_PERSON_REASONS } from "../lib/data/mock-data";
import DocumentIcon from "./svg-icons/DocumentIcon";

export default function InPersonNotarySection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="maxContainer">
        <div className="bg-neutral-off-white rounded-2xl p-8 md:p-14">
          <div className="text-brand-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
            <DocumentIcon className="text-primary-black w-6 h-6"/>
          </div>
 
          <h2 className="title36 text-primary-black">
            Documents That May Require an In-Person Notary
          </h2>
 
          <p className="mt-5 title20 text-neutral-10">
            Not every document can be completed online.
          </p>
 
          <p className="mt-2 body16 text-neutral-10">
            An in-person appointment may be required where you need a
            Notary Public to:
          </p>
 
          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 md:grid-cols-2">
            {IN_PERSON_REASONS.map((reason) => (
              <li
                key={reason}
                className="flex gap-3 text-primary-black"
              >
                <span
                  aria-hidden="true"
                  className="bg-primary-black mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
 
          <p className="mt-8 border-t border-neutral-light-grey pt-6 text-neutral-20">
            If you are unsure, send us your document before booking and we
            can determine whether we offer the required service online or
            whether you require an in-person appointment.
          </p>
        </div>
      </div>
    </section>
  );
}
 