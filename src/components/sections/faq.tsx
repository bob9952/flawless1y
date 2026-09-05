import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { faqContent as content } from "@/data/content"
import { faqItems } from "@/data/faq"

export function Faq() {
  return (
    <section id="faq" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:px-8">
        <div>
          <span className="eyebrow">{content.eyebrow}</span>
          <h2 className="section-title mt-4">
            {content.title}
            <br />
            <span className="text-brand-blue">{content.titleSecondLine}</span>
          </h2>
          <p className="mt-6 max-w-md leading-7 text-ink/55">{content.description}</p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-ink/10 bg-brand-pale/30 px-5 sm:px-7">
          <Accordion type="single" collapsible>
            {faqItems.map((item, index) => (
              <AccordionItem key={item.question} value={`faq-${index}`} hasBorder>
                <AccordionTrigger className="py-5 font-display text-base font-bold leading-6 hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-2xl pb-5 leading-7 text-ink/60">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
