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
  {
    id: "pranje-tepiha",
    src: "images/gallery/pranje-tepiha.jpg",
    alt: "Usisavanje tepiha u dnevnoj sobi",
    title: "Čišćenje tepiha",
    category: "Nameštaj",
  },
  {
    id: "usisavanje-dnevne-sobe",
    src: "images/gallery/usisavanje-dnevne-sobe.avif",
    alt: "Čišćenje poda i nameštaja u dnevnoj sobi",
    title: "Detaljno čišćenje prostora",
    category: "Nameštaj",
  },
  {
    id: "dubinsko-pranje-automobila-1",
    src: "images/gallery/dubinsko-auto-1.png",
    alt: "Očišćen enterijer automobila sa prednjim sedištima i komandnom tablom",
    title: "Enterijer automobila",
    category: "Automobili",
  },
  // Namerno ponovljene fotografije dok se galerija ne dopuni novim radovima.
  // Različiti ID-jevi omogućavaju ispravan grid, filtere i lightbox navigaciju.
  {
    id: "dubinsko-pranje-namestaja-2",
    src: "images/gallery/pranje-namestaja.jpg",
    alt: "Dubinsko pranje tapaciranog nameštaja ekstrakcionim uređajem",
    title: "Dubinsko pranje nameštaja",
    category: "Nameštaj",
  },
  {
    id: "dubinsko-pranje-duseka-2",
    src: "images/gallery/pranje-duseka.jpg",
    alt: "Čišćenje površine dušeka",
    title: "Čišćenje dušeka",
    category: "Dušeci",
  },
  {
    id: "dubinsko-pranje-automobila-2",
    src: "images/gallery/dubinsko-auto-1.png",
    alt: "Očišćen enterijer automobila sa prednjim sedištima i komandnom tablom",
    title: "Enterijer automobila",
    category: "Automobili",
  },
  {
    id: "pranje-tepiha-2",
    src: "images/gallery/pranje-tepiha.jpg",
    alt: "Usisavanje tepiha u dnevnoj sobi",
    title: "Čišćenje tepiha",
    category: "Nameštaj",
  },
  {
    id: "usisavanje-dnevne-sobe-2",
    src: "images/gallery/usisavanje-dnevne-sobe.avif",
    alt: "Čišćenje poda i nameštaja u dnevnoj sobi",
    title: "Detaljno čišćenje prostora",
    category: "Nameštaj",
  },
  {
    id: "dubinsko-pranje-namestaja-3",
    src: "images/gallery/pranje-namestaja.jpg",
    alt: "Dubinsko pranje tapaciranog nameštaja ekstrakcionim uređajem",
    title: "Dubinsko pranje nameštaja",
    category: "Nameštaj",
  },
  {
    id: "dubinsko-pranje-automobila-3",
    src: "images/gallery/dubinsko-auto-1.png",
    alt: "Očišćen enterijer automobila sa prednjim sedištima i komandnom tablom",
    title: "Enterijer automobila",
    category: "Automobili",
  },
]
