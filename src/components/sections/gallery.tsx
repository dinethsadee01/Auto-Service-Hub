import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

/*
 * DEVELOPER NOTE: Replace these placeholder images with actual photos from Bethara Engineering Service.
 * Recommended images:
 * 1. Workshop interior showing service bays
 * 2. Mechanic working on a vehicle engine
 * 3. Car wash in progress
 * 4. Auto parts display / storage area
 * 5. Welding or engineering fabrication work
 * 6. Completed vehicle after service
 * 7. Workshop exterior / signage
 * 8. Team of mechanics / staff photo
 */
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    alt: "Workshop interior with service bays",
    category: "Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80",
    alt: "Mechanic performing engine diagnostics",
    category: "Service",
  },
  {
    src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?w=800&q=80",
    alt: "Professional car wash in progress",
    category: "Car Wash",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
    alt: "Engine parts and components",
    category: "Parts",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80",
    alt: "Professional tools and equipment",
    category: "Equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    alt: "Completed vehicle ready for delivery",
    category: "Results",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-4 py-1 text-xs font-medium"
          >
            Our Work
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            See Our <span className="text-gradient">Workshop</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
            Take a look inside our facility - where quality meets precision,
            and every vehicle gets the care it deserves.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
            >
              <div
                className={`relative overflow-hidden rounded-xl ${index === 0 ? "h-64 sm:h-full min-h-[320px]" : "h-56 sm:h-64"
                  }`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                  <Badge className="bg-primary/90 text-primary-foreground text-xs backdrop-blur-sm mb-2">
                    {image.category}
                  </Badge>
                  <p className="text-sm text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog
        open={selectedImage !== null}
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl p-0 overflow-hidden border-0 bg-black/95">
          <DialogTitle className="sr-only">
            {selectedImage !== null ? galleryImages[selectedImage].alt : "Image preview"}
          </DialogTitle>
          {selectedImage !== null && (
            <div className="relative">
              <img
                src={galleryImages[selectedImage].src.replace("w=800", "w=1200")}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <Badge className="bg-primary/90 text-primary-foreground mb-2">
                  {galleryImages[selectedImage].category}
                </Badge>
                <p className="text-white font-medium">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
