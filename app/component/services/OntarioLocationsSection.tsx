import { OntarioLocationsData } from '@/app/lib/data/services/types';
import Image from 'next/image';

interface OntarioLocationsSectionProps {
  data: OntarioLocationsData;
  className?: string;
}

export default function OntarioLocationsSection({
  data,
  className = '',
}: OntarioLocationsSectionProps) {
  return (
    <section className={`lg:py-18 py-10 ${className}`}>
      <div className="maxContainer">

        {/* Heading and Map */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Left Content */}
          <div>
            <div className="tag mb-2">
              {data.tag}
            </div>

            <h2 className="title36 text-neutral-10 mb-4">
              {data.title}
            </h2>

            <div className="space-y-2">
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

          {/* Map Image */}
          <div className="relative min-h-[180px] overflow-hidden bg-[#C5B497]">
            <Image
              src={data.mapImage}
              alt={data.mapAlt}
              width={660}
              height={372}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Location Grid */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
          {data.locations.map((location, index) => (
            <div
              key={`${location}-${index}`}
              className="flex min-h-9 items-center justify-center border border-neutral-deep-black px-2 py-2 text-center"
            >
              <span className="body16 text-neutral-deep-black">
                {location}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Content */}
        <div className="mt-5 space-y-1 max-w-[660px]">
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
    </section>
  );
}