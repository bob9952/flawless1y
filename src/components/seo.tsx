import { useEffect } from "react"
import { contact } from "@/data/contact"
import { heroContent } from "@/data/content"

export function Seo() {
  useEffect(() => {
    const jsonLd = document.createElement("script")
    jsonLd.type = "application/ld+json"
    jsonLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Flawless1y",
      description: heroContent.description,
      areaServed: contact.areaServed,
      telephone: contact.phoneHref,
      email: contact.email,
      priceRange: "RSD",
      serviceType: ["Dubinsko pranje nameštaja", "Dubinsko pranje dušeka", "Dubinsko pranje enterijera automobila"],
    })
    document.head.appendChild(jsonLd)
    return () => {
      document.head.removeChild(jsonLd)
    }
  }, [])
  return null
}
