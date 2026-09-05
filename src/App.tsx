import { FloatingCall } from "@/components/layout/floating-call"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Contact } from "@/components/sections/contact"
import { Gallery } from "@/components/sections/gallery"
import { Hero } from "@/components/sections/hero"
import { Pricing } from "@/components/sections/pricing"
import { Process } from "@/components/sections/process"
import { Results } from "@/components/sections/results"
import { Services } from "@/components/sections/services"
import { Seo } from "@/components/seo"

export default function App() {
  return (
    <>
      <Seo />
      <Header />
      <main>
        <Hero />
        <Services />
        <Results />
        <Gallery />
        <Pricing />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </>
  )
}
