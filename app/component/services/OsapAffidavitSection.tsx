import Link from 'next/link';
import Button from '../ui/atoms/Button';
import CheckCircle from '../svg-icons/CheckCircle';
import { OsapAffidavitData } from '@/app/lib/data/services/types';

interface OsapAffidavitSectionProps {
  data: OsapAffidavitData;
  className?: string;
}

export default function OsapAffidavitSection({
  data,
  className = '',
}: OsapAffidavitSectionProps) {
  return (
    <section className={`lg:py-18 py-10 ${className}`}>
      <div className="maxContainer">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

          {/* Left Content */}
          <div>
            <div className="tag mb-2">
              {data.tag}
            </div>

            <h2 className="title36 text-neutral-10">
              {data.title}
            </h2>

            <Link
              href={data.buttonHref}
              className="mt-5 block"
            >
              <Button
                variant='primary'
                size='sm'
              >
                {data.buttonText}
              </Button>
            </Link>
          </div>

          {/* Right Content */}
          <div>
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

            <ul className="mt-5 space-y-4">
              {data.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 body14 text-neutral-10"
                >
                 <CheckCircle className="w-5 h-5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}