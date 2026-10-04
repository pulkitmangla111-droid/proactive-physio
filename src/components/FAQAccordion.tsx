import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faqs';

export default function FAQAccordion({ faqs, title }: { faqs: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl">
      {title && (
        <h2 className="mb-8 text-center font-display text-3xl font-extrabold text-navy-700 sm:text-4xl">
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              open === i ? 'border-teal-300 bg-teal-50/30 shadow-md' : 'border-surface-300 bg-white hover:border-brand-200'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-answer-${i}`}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className={`font-display text-base font-semibold ${open === i ? 'text-teal-700' : 'text-navy-700'}`}>
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                  open === i ? 'rotate-180 text-teal-600' : 'text-ink-light'
                }`}
              />
            </button>
            <div
              id={`faq-answer-${i}`}
              className={`grid transition-all duration-300 ${
                open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-light">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
