import Link from 'next/link';
import Button from '../ui/atoms/Button';
import { HowItWorksData } from '@/app/lib/data/services/types';

interface HowItWorksSectionProps {
  data: HowItWorksData;
  className?: string;
}

export default function HowItWorksSection({
  data,
  className = '',
}: HowItWorksSectionProps) {
  return (
    <section className={`bg-neutral-off-white lg:py-18 py-10 ${className}`}>
      <div className="maxContainer">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start">
            <span className="tag">
              {data.tag}
            </span>

            <h2 className="title36 text-neutral-10">
              {data.title}
            </h2>

            <Link
              href={data.buttonHref}
              className="mt-8 inline-block"
            >
              <Button>
                {data.buttonText}
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute xl:bottom-12 lg:bottom-16 bottom-27 left-[44px] top-11 w-px bg-secondary-black" />

            <div className="space-y-16">
              {data.steps.map((step, index) => {
                const isLast = index === data.steps.length - 1;

                return (
                  <div
                    key={step.id}
                    className="relative flex items-start gap-5"
                  >
                    <div
                      className={`relative z-10 flex h-[96px] w-[96px] shrink-0 items-center justify-center border border-neutral-10 title36 ${
                        isLast
                          ? 'border-neutral-deep-black bg-neutral-deep-black text-white'
                          : 'bg-white text-neutral-deep-black'
                      }`}
                    >
                      {step.id}
                    </div>

                    <div className="flex-1 pt-1">
                      <h3 className="body18uppercase text-neutral-10">
                        {step.title}
                      </h3>

                      <p className="mt-2 whitespace-pre-line body16 text-neutral-10">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}