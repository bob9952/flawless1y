export type GalleryCategory = "Nameštaj" | "Dušeci" | "Automobili"

export type GalleryImage = {
  id: string
  src: string
  thumbnail?: string
  alt: string
  title: string
  category: GalleryCategory
}

// Dodavanje fotografije:
// 1. Kopirajte optimizovanu sliku u public/images/gallery/.
// 2. Dodajte novi objekat u niz ispod. Komponentu galerije ne treba menjati.
export const galleryImages: GalleryImage[] = [
  {
    id: "svetli-trosed",
    src: "images/flawless-hero.png",
    alt: "Svetli trosed i dnevna soba",
    title: "Tapacirani nameštaj",
    category: "Nameštaj",
  },
]
