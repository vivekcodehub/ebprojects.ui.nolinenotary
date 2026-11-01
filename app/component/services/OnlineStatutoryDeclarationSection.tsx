import { StatutoryDeclarationData } from "@/app/lib/data/services/types";

interface OnlineStatutoryDeclarationSectionProps {
  data: StatutoryDeclarationData;
  className?: string;
}

export default function OnlineStatutoryDeclarationSection({
  data,
  className = '',
}: OnlineStatutoryDeclarationSectionProps) {
  return (
    <section
      className={`bg-neutral-off-white lg:py-18 py-10 ${className}`}
    >
      <div className="maxContainer">
        <div className="mx-auto max-w-[680px] text-center">

          <h2 className="title36 mb-4 text-neutral-10">
            {data.title}
          </h2>

          <div className="space-y-1">
            {data.description.map((paragraph, index) => (
              <p
                key={index}
                className="body18 text-neutral-10 text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}