import { processContent as content } from "@/data/content"

export function Process() {
  return (
    <section id="proces" className="section-pad bg-[#f4f8fd]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title mt-4">
            {content.title}
            <br />
            {content.titleSecondLine}
          </h2>
        </div>
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-8 hidden border-t border-dashed border-ink/20 md:block" />
          {content.steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border-8 border-[#f4f8fd] bg-ink font-display text-sm font-extrabold text-brand-blue shadow-lg">
                {step.number}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-ink/55">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
