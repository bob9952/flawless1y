import { useMemo, useState } from "react"
import { Maximize2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { galleryContent as content } from "@/data/content"
import { galleryImages, type GalleryCategory } from "@/data/gallery"
import { assetUrl } from "@/lib/assets"

type Filter = "Sve" | GalleryCategory

export function Gallery() {
  const categories = useMemo<Filter[]>(
    () => [content.allCategoryLabel as Filter, ...new Set(galleryImages.map((image) => image.category))],
    [],
  )
  const [activeCategory, setActiveCategory] = useState<Filter>(content.allCategoryLabel as Filter)
  const visibleImages =
    activeCategory === content.allCategoryLabel
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory)

  return (
    <section id="galerija" className="section-pad bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h2 className="section-title mt-4">
              {content.title}
              <br />
              {content.titleSecondLine}
            </h2>
          </div>
          <p className="max-w-md leading-7 text-ink/55">{content.description}</p>
        </div>
        <div className="mt-10 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${category === activeCategory ? "bg-ink text-white" : "border border-ink/10 bg-white text-ink hover:bg-brand-pale"}`}
            >
              {category}
            </button>
          ))}
        </div>
        {visibleImages.length ? (
          <div
            className={`mt-8 grid gap-4 ${visibleImages.length === 1 ? "md:grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"}`}
          >
            {visibleImages.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <button
                    className={`group relative overflow-hidden rounded-[1.75rem] bg-brand-pale text-left ${visibleImages.length === 1 ? "max-w-3xl" : ""}`}
                    aria-label={`${content.openImageLabel}: ${image.title}`}
                  >
                    <img
                      src={assetUrl(image.thumbnail ?? image.src)}
                      alt={image.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover object-[68%_center] transition duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent p-5 pt-16 text-white">
                      <span>
                        <span className="block text-xs font-bold uppercase tracking-wider text-brand-blue">
                          {image.category}
                        </span>
                        <span className="mt-1 block font-display text-lg font-bold">{image.title}</span>
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink">
                        <Maximize2 size={18} />
                      </span>
                    </span>
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogTitle className="sr-only">{image.title}</DialogTitle>
                  <DialogDescription className="sr-only">{image.alt}</DialogDescription>
                  <img
                    src={assetUrl(image.src)}
                    alt={image.alt}
                    className="max-h-[88vh] w-full rounded-2xl object-contain"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-ink/15 bg-brand-pale/40 px-6 py-16 text-center text-ink/55">
            {content.emptyMessage}
          </div>
        )}
      </div>
    </section>
  )
}
