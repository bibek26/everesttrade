"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: "/images/roof_installation.jpg",
      alt: "Residential roof installation",
    },
    {
      id: 2,
      src: "/images/floor.jpg",
      alt: "Floor roofing project",
    },
    {
      id: 3,
      src: "/images/roof.jpg",
      alt: "Roof repair work",
    },
    {
      id: 4,
      src: "/images/metal_roof.jpg",
      alt: "Metal roof installation",
    },
    {
      id: 5,
      src: "/images/roof_inspection.jpg",
      alt: "Roof inspection",
    },
    {
      id: 6,
      src: "/images/roof_cleaning.jpeg",
      alt: "Roof Cleaning",
    },
    {
      id: 7,
      src: "/images/roof_coating.jpg",
      alt: "Roof coating",
    },
    {
      id: 8,
      src: "/images/storm-damage.jpeg",
      alt: "Storm damage repair",
    },
    {
      id: 9,
      src: "/images/floor_installation.jpg",
      alt: "Floor installation",
    },
    {
      id: 10,
      src: "/images/roof_maintainance.jpg",
      alt: "Roof maintenance",
    },
  ]

  const imagesPerPage = 4
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage)

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  // Get current images to display
  const currentImages = galleryImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage)

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our gallery of completed roofing projects showcasing our quality workmanship.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {currentImages.map((image) => (
              <div key={image.id} className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-md group">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full text-white">
                    <p className="font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button variant="outline" size="icon" onClick={handlePrevious} aria-label="Previous images">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <span className="flex items-center text-sm text-muted-foreground">
              {currentPage + 1} / {totalPages}
            </span>
            <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next images">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

