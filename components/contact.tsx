import { Mail, ArrowRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Mail className="w-8 h-8 text-foreground" />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Get in Touch
          </h2>

          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Interested in partnering with us or have questions about our digital products? We would love to hear from you.
          </p>

          <a
            href="mailto:sales@gimxa.com"
            className="mt-8 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            sales@gimxa.com
            <ArrowRight className="w-4 h-4" />
          </a>

        </div>
      </div>
    </section>
  )
}
