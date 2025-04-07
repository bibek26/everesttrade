"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Johnson",
      location: "Campbelltown, Australia",
      image: "/images/michael.jpg",
      rating: 5,
      text: "Summit Roofing replaced our entire roof after storm damage. They worked directly with our insurance and made the process incredibly easy. The quality of work was outstanding and they cleaned up perfectly after the job.",
    },
    {
      name: "Sarah Williams",
      location: "Lidcombe, Australia",
      image: "/images/sarah.jpeg",
      rating: 5,
      text: "We had a leak during a heavy rainstorm and Summit Roofing came out for emergency repairs the same day. They were professional, efficient, and fixed the problem permanently. Highly recommend their services!",
    },
    {
      name: "David Thompson",
      location: "NewCastle, Australia",
      image: "/images/david.jpeg",
      rating:4 ,
      text: "As a property manager, I've worked with many roofing companies over the years. Summit Roofing stands out for their reliability, quality work, and excellent communication. They're now our go-to roofing contractor.",
    },
    {
      name: "Jennifer Martinez",
      location: "Wollongong, Australia",
      image: "/images/jennifer.jpg",
      rating: 5,
      text: "Summit Roofing installed a new roof on our home last year. The team was professional, the work was completed on time and on budget, and the roof looks fantastic. Great experience from start to finish.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 1
  // const totalPages = Math.ceil(testimonials.length / itemsPerPage)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - itemsPerPage : prevIndex - itemsPerPage))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + itemsPerPage))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-16 bg-light-blue-500">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our roofing services.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {visibleTestimonials.map((testimonial, index) => (
                    <Card key={index} className="border-none shadow-lg bg-soft-grey-200">

              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                    <blockquote className="text-lg italic mb-6">"{testimonial.text}"</blockquote>


                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-center mt-6 gap-2">
            <Button variant="outline" size="icon" onClick={handlePrevious} aria-label="Previous testimonial">
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="icon" onClick={handleNext} aria-label="Next testimonial">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
