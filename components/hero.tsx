"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/placeholder.svg?height=1080&width=1920"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-drone-view-of-a-residential-area-with-houses-and-42649-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative container h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl">
          Professional Roofing Solutions for Your Home & Business
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">
          Quality craftsmanship, premium materials, and exceptional service for all your roofing needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
        <Link href="#contact">
          <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium">
            Contact Us Now
          </button>
        </Link>
        </div>
      </div>
    </section>
  )
}

