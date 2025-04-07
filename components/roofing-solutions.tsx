import { Shield, Home, Building2, PackageCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RoofingSolutions() {
  const solutions = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Insurance Roofing",
      description: "We work directly with insurance companies to make your claim process smooth and hassle-free.",
    },
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Homeowner Roofing",
      description: "Quality residential roofing solutions tailored to your home's specific needs and your budget.",
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Strata & Real Estate Roofing",
      description: "Specialized roofing services for multi-unit properties, condos, and commercial real estate.",
    },
    {
      icon: <PackageCheck className="h-10 w-10 text-primary" />,
      title: "One-Stop Roofing Shop",
      description: "From inspection to installation and maintenance, we handle all your roofing needs under one roof.",
    },
  ]

  return (
    <section id="solutions" className="py-16 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Roofing Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive roofing solutions for every type of property and situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2">{solution.icon}</div>
                <CardTitle>{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

