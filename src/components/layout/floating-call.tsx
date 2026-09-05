import { Phone } from "lucide-react"
import { contact } from "@/data/contact"

export function FloatingCall() {
  return (
    <a
      href={`tel:${contact.phoneHref}`}
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-brand-blue text-ink shadow-xl shadow-ink/20 md:hidden"
      aria-label="Pozovite nas"
    >
      <Phone fill="currentColor" size={22} />
    </a>
  )
}
