import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import RoofingSolutions from "@/components/roofing-solutions"
import Gallery from "@/components/gallery"
import AboutUs from "@/components/about-us"
import Services from "@/components/services"
import ContactForm from "@/components/contact-form"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import Portfolio from "@/components/portfolio"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <RoofingSolutions />
      <Gallery />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <ContactForm />
      <Testimonials />
      <Portfolio />
      <Footer />
    </main>
  )
}

