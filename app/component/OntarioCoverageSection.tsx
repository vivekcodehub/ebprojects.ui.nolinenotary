import { MapIcon } from "lucide-react";
import { CITY_GROUPS } from "../lib/data/mock-data";

export default function OntarioCoverageSection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="maxContainer">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Left: narrative copy */}
          <div>
            <div className="text-brand-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-off-white shadow-sm">
              <MapIcon />
            </div>
 
            <h2 className="title36 text-primary-black">
              Online Commissioner of Oaths Anywhere in Ontario
            </h2>
 
            <p className="mt-5 text-neutral-600">
              No Line Notary provides remote commissioning services to
              clients throughout Ontario. You can meet with a Commissioner
              online whether you are located in a major city or a smaller
              community across the province.
            </p>
 
            <p className="mt-4 text-neutral-600">
              Because eligible documents can be commissioned by video, you
              do not need to travel to a notary office simply because you
              live outside the Greater Toronto Area.
            </p>
          </div>
 
          {/* Right: coverage panel */}
          <div className="rounded-2xl border border-neutral-200 bg-neutral-off-white p-8 md:p-10">
            <p className="text-sm font-medium tracking-wide text-neutral-500 uppercase">
              Communities we serve
            </p>
 
            <div className="mt-6 flex flex-col gap-6">
              {CITY_GROUPS.map((group) => (
                <div key={group.region}>
                  <h3 className="text-sm font-semibold text-neutral-900">
                    {group.region}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.cities.map((city) => (
                      <span
                        key={city}
                        className="rounded-full border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}