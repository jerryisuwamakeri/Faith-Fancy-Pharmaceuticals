"use client"

import { motion } from "framer-motion"
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - CTA */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5"
            >
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">Contact Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              {"Let's Talk"}
              <span className="block text-primary">Business</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              Whether you need wholesale pharmaceuticals, cosmetics, or retail purchases —
              walk in or reach us by phone and WhatsApp. We are always ready to serve you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="https://wa.me/message/L7PHXOGAO53IJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-lg bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:08135555052"
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
              >
                <Phone className="h-4 w-4 text-primary" />
                08135555052
              </a>
            </motion.div>
          </div>

          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 self-start">
            <h3 className="mb-3 font-semibold text-foreground">What We Offer</h3>
            <div className="flex flex-wrap gap-2">
              {["Pharmaceuticals", "Cosmetics", "Wholesale", "Retail", "Genuine Products", "All Drug Types"].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-card px-3 py-1 text-xs font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
