import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function AboutUs() {
  const achievements = [
    "Over 10 years of industry experience",
    "500+ successful roofing projects completed",
    "Fully licensed and insured professionals",
    "Award-winning customer service",
  ]

  return (
    <section id="about" className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Summit Roofing team working on a project"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story & Experience</h2>
            <p className="text-muted-foreground mb-6">
              Founded in 2014, Everest Trade Services has grown from a small family business to one of the most
              trusted roofing companies in the region. Our journey has been built on a foundation of quality
              craftsmanship, integrity, and exceptional customer service.
            </p>
            <p className="text-muted-foreground mb-6">
              We&apos;ve successfully completed thousands of roofing projects ranging from residential repairs to large-scale
              commercial installations. Our team of certified professionals brings decades of combined experience to
              every project, ensuring the highest standards of quality and safety.
            </p>

            <div className="space-y-3 mt-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

