import { OnlineAffidavitData } from "@/app/lib/data/services/types";
import CheckCircle from "../svg-icons/CheckCircle";

interface OnlineAffidavitSectionProps {
  data: OnlineAffidavitData;
  className?: string;
}

export default function OnlineAffidavitSection({
  data,
  className = '',
}: OnlineAffidavitSectionProps) {
  return (
    <section className={`lg:py-18 py-10 border-t border-[rgba(106,106,106,1)] ${className}`}>
      <div className="maxContainer">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Left Content */}
          <div>
            <h2 className="title36 mb-4 text-neutral-10">
              {data.title}
            </h2>

            {data.description.map((paragraph, index) => (
              <p
                key={index}
                className="body18 text-neutral-10"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Content */}
          <div>
            <ul className="space-y-4">
              {data.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 body16 text-neutral-10"
                >
                <CheckCircle className="w-5 h-5 shrink-0" />

                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-1">
              {data.footer.map((paragraph, index) => (
                <p
                  key={index}
                  className="body18 text-neutral-10"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}