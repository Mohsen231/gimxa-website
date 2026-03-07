import { Shield, Globe, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            About Us
          </h2>
          <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            GIMXA LLC is a digital commerce company focused on providing reliable digital products including game keys and software licenses. We work with trusted suppliers and sell products through global online marketplaces and digital channels, ensuring quality and authenticity in every transaction.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Trusted Suppliers</h3>
            <p className="text-muted-foreground leading-relaxed">
              We partner with verified and trusted suppliers to ensure product authenticity and reliability.
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Global Reach</h3>
            <p className="text-muted-foreground leading-relaxed">
              Operating through international digital marketplaces to serve customers worldwide.
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Instant Delivery</h3>
            <p className="text-muted-foreground leading-relaxed">
              Digital products delivered instantly through secure and automated systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
