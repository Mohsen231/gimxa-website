import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "About Us | GIMXA LLC",
  description: "Learn about GIMXA LLC - A digital commerce company specializing in game keys and software licenses.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <article className="prose prose-neutral max-w-none">
          <h1 className="text-3xl font-semibold text-foreground mb-8">About GIMXA LLC</h1>

          <section className="mb-8">
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC is a digital commerce company specializing in digital products such as game keys and software licenses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our mission is to provide reliable and accessible digital products to customers worldwide through modern online marketplaces and digital platforms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">What We Do</h2>
            <p className="text-foreground/80 leading-relaxed">
              By working with trusted suppliers and digital commerce partners, we connect customers with high-quality digital products while maintaining a secure and efficient online purchasing experience.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC focuses on building long-term partnerships and expanding its presence in the global digital commerce ecosystem.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}
