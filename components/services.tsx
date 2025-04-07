import { HardHat, Wrench, Droplets, Thermometer, Ruler, AlertTriangle } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <HardHat className="h-10 w-10 text-primary" />,
      title: "Roof Installation",
      description: "Complete roof installation services using premium materials and expert craftsmanship.",
    },
    {
      icon: <Wrench className="h-10 w-10 text-primary" />,
      title: "Roof Repair",
      description: "Fast, reliable repairs for leaks, storm damage, and other roofing issues.",
    },
    {
      icon: <Ruler className="h-10 w-10 text-primary" />,
      title: "Roof Replacement",
      description: "Full roof replacement services when repairs are no longer sufficient.",
    },
    {
      icon: <Droplets className="h-10 w-10 text-primary" />,
      title: "Waterproofing",
      description: "Comprehensive waterproofing solutions to protect your property from water damage.",
    },
    {
      icon: <Thermometer className="h-10 w-10 text-primary" />,
      title: "Roof Insulation",
      description: "Energy-efficient insulation solutions to reduce heating and cooling costs.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-primary" />,
      title: "Emergency Services",
      description: "24/7 emergency roofing services for unexpected leaks and storm damage.",
    },
  ]

  return (
    <section id="services" className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Roofing Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide a comprehensive range of roofing services to meet all your residential and commercial needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

