"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Residential Roof Replacement",
      category: "residential",
      image: "/images/roof-replacement.jpeg",
      description: "Complete roof replacement for a single-family home in Anytown.",
    },
    {
      id: 2,
      title: "Commercial Building Roof Installation",
      category: "commercial",
      image: "/images/roof-installation.jpeg",
      description: "New roof installation for a multi-story office building.",
    },
    {
      id: 3,
      title: "Storm Damage Repair",
      category: "repair",
      image: "/images/storm-damage.jpeg",
      description: "Emergency repairs after severe storm damage to a residential property.",
    },
    {
      id: 4,
      title: "Apartment Complex Re-Roofing",
      category: "commercial",
      image: "/images/apart-complex.jpeg",
      description: "Complete re-roofing project for a 24-unit apartment complex.",
    },
    {
      id: 5,
      title: "Roof Painting",
      category: "residential",
      image: "/images/roof-painting.jpg",
      description: "Professional roof painting to restore and enhance your home's beauty and protection..",
    },
    {
      id: 6,
      title: "Roof Repointing",
      category: "commercial",
      image: "/images/roof-repointing.jpg",
      description: "Expert roof repointing to strengthen and preserve your roof’s durability and weather resistance.",
    },
    {
      id: 7,
      title: "Acid Brick Cleaning",
      category: "residential",
      image: "/images/acid-brick.jpeg",
      description: "Acid brick cleaning to remove stains, dirt, and grime, restoring your brickwork's original beauty..",
    },
  ]

  const filteredProjects = activeTab === "all" ? projects : projects.filter((project) => project.category === activeTab)

  return (
    <section id="portfolio" className="py-16 bg-light-blue-500">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse through our recent roofing projects to see the quality of our work.
          </p>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="repair">Repairs</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                  <div key={project.id} className="group overflow-hidden rounded-lg shadow-md bg-soft-grey-200">

                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
