import { ArrowRight, ChevronRight, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { contact } from "@/data/contact"
import { navigation } from "@/data/navigation"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-navy/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-7 md:flex" aria-label="Glavna navigacija">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-ink/65 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a href={`tel:${contact.phoneHref}`} className="text-sm font-bold text-ink">
            {contact.phoneDisplay}
          </a>
          <Button asChild variant="blue">
            <a href="#kontakt">
              Pošaljite upit <ArrowRight size={16} />
            </a>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="grid h-11 w-11 place-items-center rounded-full bg-brand-pale text-ink md:hidden"
              aria-label="Otvori meni"
            >
              <Menu />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Navigacija</SheetTitle>
            <SheetDescription className="sr-only">Glavni meni sajta Flawless1y</SheetDescription>
            <Logo />
            <nav className="mt-10 flex flex-col gap-1">
              {navigation.map((item) => (
                <SheetClose asChild key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-3 py-3 font-semibold text-ink hover:bg-brand-pale"
                  >
                    {item.label}
                    <ChevronRight size={17} />
                  </a>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Button asChild variant="blue" className="mt-5 w-full">
                <a href="#kontakt">Pošaljite upit</a>
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
