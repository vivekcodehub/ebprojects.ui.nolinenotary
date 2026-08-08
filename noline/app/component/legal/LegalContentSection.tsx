import { LegalSection } from "@/app/lib/data/mock-data";

interface LegalContentSectionProps {
  title: string;
  description: string;
  sections: LegalSection[];
}

export default function LegalContentSection({
  title,
  description,
  sections,
}: LegalContentSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="maxContainer max-w-4xl">
        <h1 className="title56 text-primary-black">
          {title}
        </h1>

        <p className="body18 text-neutral-10 mt-4 mb-12">
          {description}
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="title24 text-primary-black mb-4">
                {section.title}
              </h2>

              <div className="space-y-4">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="body16 text-neutral-10 leading-8"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}