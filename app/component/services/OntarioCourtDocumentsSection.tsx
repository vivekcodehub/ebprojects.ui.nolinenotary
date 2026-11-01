import { CourtDocumentsData } from "@/app/lib/data/services/types";
import DocumentFile from "../svg-icons/DocumentFile";


interface OntarioCourtDocumentsSectionProps {
  data: CourtDocumentsData;
  className?: string;
}

export default function OntarioCourtDocumentsSection({
  data,
  className = '',
}: OntarioCourtDocumentsSectionProps) {
  return (
    <section
      className={`lg:py-18 py-10 ${className}`}
    >
      <div className="maxContainer">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Left Content */}
          <div>
            <h2 className="title36 mb-4 text-neutral-10">
              {data.title}
            </h2>

            <div className="space-y-1">
              {data.description.map((paragraph, index) => (
                <p
                  key={index}
                  className="body18 text-neutral-10"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="space-y-2.5">
              {data.documents.map((document) => (
                <div
                  key={document.id}
                  className="flex items-center gap-4 border border-neutral-30 bg-neutral-off-white px-3 py-3.5"
                >
                  <span className="shrink-0">
                    <DocumentFile className="w-8 h-8 text-[rgba(0,0,0,1)]"  />
                  </span>

                  <p className="title20 text-neutral-10">
                    {document.title}
                  </p>
                </div>
              ))}
            </div>

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