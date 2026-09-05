import { Instagram } from "lucide-react"
import { contact } from "@/data/contact"
import { navigation } from "@/data/navigation"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <Logo />
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-ink/55">
          {navigation
            .filter((item) => ["Usluge", "Galerija", "Cenovnik"].includes(item.label))
            .map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={contact.instagramHref} className="flex items-center gap-1.5">
            <Instagram size={16} />
            {contact.instagram}
          </a>
        </div>
        <p className="text-xs text-ink/40">© {new Date().getFullYear()} Flawless1y</p>
      </div>
    </footer>
  )
}
