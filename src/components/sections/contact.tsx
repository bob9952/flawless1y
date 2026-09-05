import { MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { contact } from "@/data/contact"
import { contactContent as content } from "@/data/content"

export function Contact() {
  return (
    <section id="kontakt" className="bg-white px-5 py-8 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-ink px-6 py-12 text-white md:px-12 md:py-16 lg:flex lg:items-center lg:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-[.16em] text-brand-blue">{content.eyebrow}</span>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-[-.045em] md:text-5xl">
            {content.title}
          </h2>
          <p className="mt-4 text-white/55">{content.description}</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col xl:flex-row">
          <Button asChild size="lg" variant="blue">
            <a href={`tel:${contact.phoneHref}`}>
              <Phone size={19} />
              {contact.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="lg" className="bg-white text-ink hover:bg-white/90">
            <a href={`viber://chat?number=${encodeURIComponent(contact.phoneHref)}`}>
              <MessageCircle size={19} />
              {content.messageAction}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
