import { ArrowRight, ChevronRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { contact } from "@/data/contact"
import { navigation } from "@/data/navigation"

import { Logo } from "./logo"

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brand-navy/5 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        <NavigationMenu className="hidden lg:flex" aria-label="Glavna navigacija">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuItem key={item.label}>
                <NavigationMenuLink asChild>
                  <a href={item.href}>{item.label}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden items-center gap-1 lg:flex">
          <Button asChild variant="ghost" size="sm" className="font-bold">
            <a href={`tel:${contact.phoneHref}`}>{contact.phoneDisplay}</a>
          </Button>
          <Button asChild variant="blue">
            <a href="#kontakt">
              Pošaljite upit <ArrowRight size={16} />
            </a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-11 w-11 rounded-full bg-brand-pale hover:bg-brand-pale lg:hidden"
              aria-label="Otvori meni"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white text-ink">
            <SheetHeader className="text-left">
              <SheetTitle className="sr-only">Navigacija</SheetTitle>
              <SheetDescription className="sr-only">Glavni meni sajta Flawless1y</SheetDescription>
              <Logo />
            </SheetHeader>
            <nav className="mt-8 flex flex-col gap-1" aria-label="Mobilna navigacija">
              {navigation.map((item) => (
                <SheetClose asChild key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between rounded-xl px-3 py-3 font-semibold text-ink transition-colors hover:bg-brand-pale focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                  >
                    {item.label}
                    <ChevronRight size={17} />
                  </a>
                </SheetClose>
              ))}
            </nav>
            <SheetFooter className="mt-5">
              <SheetClose asChild>
                <Button asChild variant="blue" className="w-full">
                  <a href="#kontakt">Pošaljite upit</a>
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
