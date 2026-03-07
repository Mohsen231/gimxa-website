import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-32">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full" />
          <span className="text-sm text-muted-foreground">Trusted Digital Commerce Partner</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground max-w-4xl mx-auto leading-tight text-balance">
          Global Digital Products & Online Commerce
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          GIMXA LLC operates in digital commerce, providing high-quality digital products including game keys and software licenses through online marketplaces and digital platforms worldwide.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Our Services
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-foreground px-8 py-4 rounded-lg text-base font-medium border border-border hover:bg-secondary transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
