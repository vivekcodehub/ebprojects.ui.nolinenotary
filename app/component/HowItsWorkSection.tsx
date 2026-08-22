import { HowItsWorks } from "../lib/data/mock-data";

interface HowItsWorkSectionProps {
  data: HowItsWorks[];
}

export default function HowItsWorkSection({ data }: HowItsWorkSectionProps) {
  return (
    <section className="bg-neutral-off-white py-12 md:py-20">
      <div className="maxContainer">
        <div className="mb-12 text-center">
          <span className="tag">HOW IT WORKS</span>
          <h2 className="title36 text-primary-black mt-3">
            How Online Commissioning Works
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <WorksCard
              key={item.step}
              {...item}
              isLast={index === data.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorksCard({
  step,
  title,
  text,
  isLast,
}: HowItsWorks & { isLast: boolean }) {
  return (
    <div className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7">
      <div
        className={`title24 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-deep-black ${
          step === "6"
            ? "bg-neutral-deep-black text-white"
            : "bg-white text-neutral-deep-black"
        }`}
      >
        {step}
      </div>

      <h4 className="title18 !font-medium text-primary-black mb-1.5">
        {title}
      </h4>
      <p className="body14 text-neutral-600 text-pretty">{text}</p>

      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute top-11 -right-[10px] hidden h-5 w-5 rotate-45 border-t border-r border-neutral-200 bg-white md:block lg:right-[-11px]"
        />
      )}
    </div>
  );
}
