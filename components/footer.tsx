import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, MapPin, Phone, MessageCircle } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[#1b6b3a]/30 bg-[#0d3320]">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="group flex items-center gap-3">
              <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm">
                <Image src="/logo.jpeg" alt="Faith Fancy Pharmaceutical Logo" fill className="object-contain p-0.5" />
              </div>
              <div>
                <p className="font-semibold text-white">Faith Fancy Pharmaceutical</p>
                <p className="text-xs text-white/65">Trusted Medicine</p>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              Genuine pharmaceuticals and cosmetics — wholesale &amp; retail.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-start gap-2 text-sm text-white/65">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#4caf80]" />
                <span><span className="font-medium text-white/80">Address:</span> No. 3, Jos Road, Farin Gida, Pambegua</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/65">
                <Phone className="h-4 w-4 shrink-0 text-[#4caf80]" />
                <span><span className="font-medium text-white/80">Contact:</span>{" "}
                  <a href="tel:08135555052" className="transition-colors hover:text-white">08135555052</a>
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 lg:gap-16">
            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { href: "#categories", label: "Products" },
                  { href: "#services", label: "Services" },
                  { href: "#about", label: "About" },
                  { href: "#contact", label: "Contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">
                Categories
              </h4>
              <ul className="space-y-3">
                {["Prescription Drugs", "OTC Medicines", "Medical Kits", "Hospital Supplies"].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-white/65">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-4 text-xs font-semibold tracking-wider text-white uppercase">
                Connect
              </h4>
              <a
                href="https://wa.me/message/L7PHXOGAO53IJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#1b6b3a] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#17a35a]"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#1b6b3a]/30 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/50">
            {currentYear} Faith Fancy Pharmaceutical. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
