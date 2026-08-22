import { BENEFITS } from "../lib/data/mock-data";

export default function WhyNoLineNotarySection() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="maxContainer">
        <h2 className="title36 mb-10 text-center text-primary-black">Why Use No Line Notary?</h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.id}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-off-white p-7 transition-colors hover:border-brand-primary/40 ${benefit.span}`}
              >
                <div className="text-brand-primary mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-neutral-600">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}