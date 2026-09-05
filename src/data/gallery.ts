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
    id: "dubinsko-pranje-namestaja",
    src: "images/gallery/pranje-namestaja.jpg",
    alt: "Dubinsko pranje tapaciranog nameštaja ekstrakcionim uređajem",
    title: "Dubinsko pranje nameštaja",
    category: "Nameštaj",
  },
  {
    id: "dubinsko-pranje-duseka",
    src: "images/gallery/pranje-duseka.jpg",
    alt: "Čišćenje površine dušeka",
    title: "Čišćenje dušeka",
    category: "Dušeci",
  },
]
