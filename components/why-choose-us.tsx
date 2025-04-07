import { Award, Clock, ThumbsUp, Shield, Banknote, HeartHandshake } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Certified Professionals",
      description: "Our team consists of certified and experienced roofing professionals.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Timely Service",
      description: "We value your time and always complete projects on schedule.",
    },
    {
      icon: <ThumbsUp className="h-8 w-8 text-primary" />,
      title: "Quality Materials",
      description: "We use only premium, durable materials for long-lasting results.",
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Warranty Protection",
      description: "All our work comes with comprehensive warranty coverage.",
    },
    {
      icon: <Banknote className="h-8 w-8 text-primary" />,
      title: "Competitive Pricing",
      description: "Quality roofing solutions at fair and transparent prices.",
    },
    {
      icon: <HeartHandshake className="h-8 w-8 text-primary" />,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority on every project.",
    },
  ]

  return (
    <section className="py-16 bg-primary/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Summit Roofing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing exceptional roofing services that stand out from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-4">
                <div className="mt-1">{reason.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

