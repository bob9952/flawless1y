import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { pricingContent as content } from "@/data/content"
import { priceGroups } from "@/data/prices"

export function Pricing() {
  const [activeGroupId, setActiveGroupId] = useState("namestaj")
  const activeGroup = priceGroups.find((group) => group.id === activeGroupId)
  const intro = activeGroup?.introOverride ?? content

  return (
    <section id="cenovnik" className="section-pad bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.72fr_1.28fr] lg:gap-20 lg:px-8">
        <div key={activeGroupId} className="animate-fade-in">
          <span className="eyebrow !bg-white/10 !text-brand-blue">{content.eyebrow}</span>
          <h2 className="section-title mt-4 !text-white">
            {intro.title}
            <br />
            {intro.titleSecondLine}
          </h2>
          <p className="mt-6 max-w-md leading-7 text-white/60">{intro.description}</p>
          <Button asChild variant="blue" size="lg" className="mt-8">
            <a href="#kontakt">
              {content.action}
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
        <Card className="border-white/10 bg-white px-6 text-ink md:px-8">
          <Accordion
            type="single"
            value={activeGroupId}
            onValueChange={(value) => setActiveGroupId(value || "namestaj")}
            collapsible
          >
            {priceGroups.map((group) => (
              <AccordionItem value={group.id} key={group.id}>
                <AccordionTrigger>
                  <span>
                    <span className="block">{group.title}</span>
                    <span className="mt-1 block font-sans text-xs font-normal text-ink/45">{group.subtitle}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="overflow-hidden rounded-2xl border border-ink/10">
                    {group.items.map((item, index) => (
                      <div
                        key={item.name}
                        className={`grid grid-cols-[1fr_auto] gap-5 px-4 py-3.5 text-sm ${index % 2 ? "bg-brand-pale/60" : "bg-white"}`}
                      >
                        <span className="text-ink/70">{item.name}</span>
                        <strong className="whitespace-nowrap text-ink">{item.price}</strong>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  )
}
