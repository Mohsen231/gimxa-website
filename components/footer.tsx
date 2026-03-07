import Link from "next/link"
import { Mail, MapPin, Building } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">GIMXA LLC</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Global Digital Products & Online Commerce. Your trusted partner for digital game keys, software licenses, and B2B digital commerce solutions.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Services
              </Link>
              <Link href="#partners" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Partners
              </Link>
              <Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
              <Link href="/terms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/60">
              Company Details
            </h4>
            <div className="flex flex-col gap-4 text-primary-foreground/80">
              <div className="flex items-start gap-3">
                <Building className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p>Registered in the United States</p>
                  <p className="text-sm text-primary-foreground/60">EIN: 35-2944538</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                <p>1021 E Lincolnway, 9861<br />Cheyenne, WY 82001<br />Laramie, US</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0" />
                <Link href="mailto:sales@gimxa.com" className="hover:text-primary-foreground transition-colors">
                  sales@gimxa.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} GIMXA LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
