import { COMPARISON } from "../lib/data/mock-data";

export default function CommissioningVsNotarizationSection() {
  return (
    <section className="w-full bg-neutral-deep-black py-12 md:py-20">
      <div className="maxContainer">
        <div className="max-w-3xl">
          <h2 className="title36 text-white text-pretty">
            Online Commissioning vs. Online Notarization in Ontario
          </h2>
          <p className="mt-5 text-neutral-400">
            The terms &ldquo;online notary,&rdquo; &ldquo;virtual
            notary&rdquo; and &ldquo;online notarization&rdquo; are
            commonly used when people search for remote document services.
            However, there is an important legal distinction in Ontario.
          </p>
        </div>
 
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {COMPARISON.map((card) => {
            const isAvailable = card.status === "Available Online";
            return (
              <div
                key={card.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold text-white">
                    {card.label}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${
                      isAvailable
                        ? "bg-emerald-400/10 text-emerald-300"
                        : "bg-amber-400/10 text-amber-300"
                    }`}
                  >
                    {card.status}
                  </span>
                </div>
 
                <div className="mt-6 flex flex-col gap-4">
                  {card.points.map((point) => (
                    <p key={point} className="text-neutral-300">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
 
        <p className="mt-10 max-w-full border-t border-white/10 pt-8 text-neutral-400">
          If your document requires an actual notarial act rather than
          commissioning, we can advise you whether an in-person appointment
          is required.
        </p>
      </div>
    </section>
  );
}