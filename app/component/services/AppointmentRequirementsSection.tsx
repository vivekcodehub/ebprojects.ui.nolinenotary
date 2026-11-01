import { AppointmentRequirementsData } from "@/app/lib/data/services/types";
import CheckCircle from "../svg-icons/CheckCircle";

interface AppointmentRequirementsSectionProps {
  data: AppointmentRequirementsData;
  className?: string;
}

export default function AppointmentRequirementsSection({
  data,
  className = '',
}: AppointmentRequirementsSectionProps) {
  return (
    <section className={`bg-neutral-off-white lg:py-18 py-10 ${className}`}>
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

            <p className="body18 text-neutral-10">
              {data.intro}
            </p>

            <ul className="mt-4 space-y-2">
              {data.requirements.map((requirement, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 body16 text-neutral-10"
                >
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>{requirement}</span>
                </li>
              ))}
            </ul>
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