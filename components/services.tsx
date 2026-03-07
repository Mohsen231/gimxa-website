import { Gamepad2, KeyRound, ShoppingBag, Handshake } from "lucide-react"

const services = [
  {
    icon: Gamepad2,
    title: "Digital Game Keys",
    description: "Authentic game keys for major platforms including Steam, PlayStation, Xbox, and Nintendo, sourced from trusted distributors.",
  },
  {
    icon: KeyRound,
    title: "Software License Keys",
    description: "Genuine software licenses for business and personal use, including productivity suites, security software, and creative tools.",
  },
  {
    icon: ShoppingBag,
    title: "Digital Marketplace Products",
    description: "A wide range of digital products available through leading online marketplaces and e-commerce platforms.",
  },
  {
    icon: Handshake,
    title: "B2B Digital Commerce",
    description: "Partnership opportunities for businesses seeking reliable digital product supply chains and distribution solutions.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Products & Services
          </h2>
          <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital commerce solutions for consumers and businesses alike.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
