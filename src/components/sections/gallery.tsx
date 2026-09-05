import { useMemo, useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Maximize2 } from "lucide-react"
import { useMediaQuery } from "@/components/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { galleryContent as content } from "@/data/content"
import { galleryImages, type GalleryCategory } from "@/data/gallery"
import { assetUrl } from "@/lib/assets"

type Filter = "Sve" | GalleryCategory

export function Gallery() {
  const categories = useMemo<Filter[]>(
    () => [content.allCategoryLabel as Filter, ...new Set(galleryImages.map((image) => image.category))],
    [],
  )
  const isTablet = useMediaQuery("(min-width: 640px)")
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  const [activeCategory, setActiveCategory] = useState<Filter>(content.allCategoryLabel as Filter)
  const [page, setPage] = useState(1)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const pageSize = isDesktop ? 8 : isTablet ? 6 : 4
  const filteredImages =
    activeCategory === content.allCategoryLabel
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory)
  const displayedImages = filteredImages.slice(0, page * pageSize)
  const remainingImages = filteredImages.length - displayedImages.length
  const nextBatchSize = Math.min(pageSize, remainingImages)
  const selectedImage = selectedIndex === null ? null : filteredImages[selectedIndex]

  const changeImage = (direction: number) => {
    if (selectedIndex === null || filteredImages.length < 2) return
    setSelectedIndex((selectedIndex + direction + filteredImages.length) % filteredImages.length)
  }

  const selectCategory = (category: Filter) => {
    setActiveCategory(category)
    setPage(1)
    setSelectedIndex(null)
  }

  return (
    <section id="galerija" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-.04em] text-ink md:text-5xl">
              {content.title} {content.titleSecondLine}
            </h2>
          </div>
          <p className="max-w-md leading-7 text-ink/55">{content.description}</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => selectCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${category === activeCategory ? "bg-ink text-white" : "border border-ink/10 bg-white text-ink hover:bg-brand-pale"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredImages.length ? (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {displayedImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-2xl bg-brand-pale text-left shadow-sm outline-none ring-brand-blue transition hover:-translate-y-1 hover:shadow-xl focus-visible:ring-4"
                aria-label={`${content.openImageLabel}: ${image.title}`}
              >
                <img
                  src={assetUrl(image.thumbnail ?? image.src)}
                  alt={image.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/90 via-ink/35 to-transparent p-3 pt-12 text-white sm:p-4 sm:pt-16">
                  <span className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-brand-blue">
                      {image.category}
                    </span>
                    <span className="mt-1 block truncate text-sm font-bold sm:text-base">{image.title}</span>
                  </span>
                  <span className="ml-2 hidden h-9 w-9 shrink-0 place-items-center rounded-full bg-white/90 text-ink sm:grid">
                    <Maximize2 size={16} />
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-ink/15 bg-brand-pale/40 px-6 py-16 text-center text-ink/55">
            {content.emptyMessage}
          </div>
        )}
        {remainingImages > 0 || page > 1 ? (
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {remainingImages > 0 ? (
              <Button type="button" variant="outline" onClick={() => setPage((currentPage) => currentPage + 1)}>
                {content.showMoreLabel} ({nextBatchSize})
                <ChevronDown size={17} />
              </Button>
            ) : null}
            {page > 1 ? (
              <Button type="button" variant="ghost" onClick={() => setPage(1)}>
                {content.showLessLabel}
                <ChevronUp size={17} />
              </Button>
            ) : null}
          </div>
        ) : null}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        {selectedImage ? (
          <DialogContent
            className="max-w-4xl rounded-2xl bg-white p-3 shadow-2xl sm:p-4"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") changeImage(-1)
              if (event.key === "ArrowRight") changeImage(1)
            }}
          >
            <DialogTitle className="sr-only">{selectedImage.title}</DialogTitle>
            <DialogDescription className="sr-only">{selectedImage.alt}</DialogDescription>
            <figure className="overflow-hidden rounded-xl bg-white">
              <img
                src={assetUrl(selectedImage.src)}
                alt={selectedImage.alt}
                className="max-h-[70vh] w-full rounded-lg object-contain"
              />
              <figcaption className="flex items-center justify-between gap-4 px-2 pb-1 pt-3 text-sm text-ink sm:px-3">
                <span className="font-bold">{selectedImage.title}</span>
                <span className="whitespace-nowrap text-ink/45">
                  {(selectedIndex ?? 0) + 1} / {filteredImages.length}
                </span>
              </figcaption>
            </figure>
            {filteredImages.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={() => changeImage(-1)}
                  className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition hover:bg-white sm:left-4"
                  aria-label="Prethodna fotografija"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={() => changeImage(1)}
                  className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-ink shadow-lg transition hover:bg-white sm:right-4"
                  aria-label="Sledeća fotografija"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            ) : null}
          </DialogContent>
        ) : null}
      </Dialog>
    </section>
  )
}
