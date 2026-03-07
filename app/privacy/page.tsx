import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | GIMXA LLC",
  description: "Privacy Policy for GIMXA LLC - Learn how we collect, use, and protect your information.",
}

export default function PrivacyPolicy() {
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
          <h1 className="text-3xl font-semibold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Effective Date: March 2026</p>

          <p className="text-foreground leading-relaxed mb-8">
            GIMXA LLC respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how information may be collected, used, and protected when you visit our website.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may collect limited information when users interact with our website, including voluntarily provided contact information and basic technical data such as browser type or device information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">2. How We Use Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-3">
              Information collected may be used for:
            </p>
            <ul className="list-disc pl-6 text-foreground/80 space-y-2">
              <li>responding to inquiries</li>
              <li>improving website functionality</li>
              <li>maintaining security</li>
              <li>preventing fraud</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Data Protection</h2>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC implements reasonable security measures to protect information from unauthorized access or misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Cookies</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our website may use cookies or analytics tools to improve user experience and monitor website performance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Third-Party Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              Our website may contain links to external platforms or services. We are not responsible for the privacy practices of those websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Sharing</h2>
            <p className="text-foreground/80 leading-relaxed">
              GIMXA LLC does not sell or rent personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Policy Updates</h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update this Privacy Policy periodically. Updates will be published on this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Contact Information</h2>
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
