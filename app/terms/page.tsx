import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | GIMXA LLC",
  description: "Terms of Service for GIMXA LLC - Digital commerce company providing game keys and software licenses.",
}

export default function TermsOfService() {
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
          <h1 className="text-3xl font-semibold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Effective Date: March 2026</p>

          <p className="text-foreground leading-relaxed mb-8">
            Welcome to the website of GIMXA LLC. These Terms of Service (&quot;Terms&quot;) govern your use of this website and any related services. By accessing or using this website, you agree to comply with these Terms.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Company Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC is a digital commerce company specializing in digital products such as game keys and software licenses. The company operates through online marketplaces and digital platforms worldwide.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Use of the Website</h2>
            <p className="text-foreground/80 leading-relaxed">
              Users may access and browse this website for informational purposes. You agree not to misuse the website, attempt to gain unauthorized access, disrupt the website&apos;s functionality, or violate applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Digital Products</h2>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC sources digital products from trusted suppliers and distributes them through online marketplaces and digital channels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Delivery Policy</h2>
            <p className="text-foreground/80 leading-relaxed">
              Due to the digital nature of our products, delivery is typically completed instantly after payment confirmation. Digital products may be delivered through online marketplaces, digital platforms, email communication, or secure account systems depending on the platform used.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              All content on this website, including text, graphics, logos, and design elements, is the property of GIMXA LLC unless otherwise stated.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of this website or any related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Refund Policy</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Due to the nature of digital products, all sales are generally final once a digital key or license has been delivered.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Refunds may only be considered in cases where:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2 mb-3">
              <li>the provided digital key is proven to be invalid</li>
              <li>the issue is verified by our support team</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC reserves the right to investigate claims and determine eligibility for replacement or refund.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">8. External Links</h2>
            <p className="text-foreground/80 leading-relaxed">
              This website may contain links to third-party platforms or marketplaces. GIMXA LLC is not responsible for the content or policies of those external websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to the Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC reserves the right to update or modify these Terms at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms shall be governed by and interpreted in accordance with the laws of the State of Wyoming, United States.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">11. Contact Information</h2>
            <address className="not-italic text-foreground/80 leading-relaxed">
              <strong className="text-foreground">GIMXA LLC</strong><br />
              1021 E Lincolnway, 9861<br />
              Cheyenne, WY 82001<br />
              United States<br />
              Email: <Link href="mailto:sales@gimxa.com" className="text-foreground underline hover:no-underline">sales@gimxa.com</Link>
            </address>
          </section>
        </article>
      </div>
    </main>
  )
}
