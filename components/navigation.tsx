"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/icon.png" 
            alt="Everest Trade Services Logo"
            width={32}
            height={32}
            className="h-14 w-14"
          />
          <span className="text-xl font-bold">Everest Trade Services</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="#solutions" className="text-sm font-medium transition-colors hover:text-primary">
            Solutions
          </Link>
          <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            About Us
          </Link>
          <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <Link href="#portfolio" className="text-sm font-medium transition-colors hover:text-primary">
            Portfolio
          </Link>
          <Link href="#contact">
          <Button size="sm">Get a Quote</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#solutions"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link href="#contact">
              <Button size="sm" className="w-full" onClick={() => setIsMenuOpen(false)}>
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

