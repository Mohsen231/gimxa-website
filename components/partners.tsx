import { Users, Building2, Globe2 } from "lucide-react"

export function Partners() {
  return (
    <section id="partners" className="py-20 md:py-28 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Our Partners
          </h2>
          <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />
        </div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            GIMXA LLC cooperates with international suppliers and digital commerce partners to provide reliable digital products to customers worldwide. Our network spans across multiple regions, ensuring diverse product availability and competitive pricing.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Trusted Suppliers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Direct partnerships with verified game publishers and software vendors.
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Platform Integration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Seamless integration with major digital marketplaces and e-commerce platforms.
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl p-8 text-center">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
              <Globe2 className="w-7 h-7 text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Global Network</h3>
            <p className="text-muted-foreground leading-relaxed">
              International distribution network ensuring worldwide product availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
