"use client"

import { motion } from "framer-motion"
import { Package, ShieldCheck, Flower2, Store, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Wholesale Supply",
    description: "Bulk pharmaceutical supply for pharmacies, hospitals, and resellers. Competitive wholesale pricing with flexible order quantities.",
  },
  {
    icon: Store,
    title: "Retail Sales",
    description: "Walk-in retail store welcoming individual customers. Buy exactly what you need — no minimum order required.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Products Only",
    description: "All pharmaceuticals are authentic and traceable. No counterfeits — we stock only verified, trustworthy medications.",
  },
  {
    icon: Flower2,
    title: "Cosmetics & Personal Care",
    description: "A wide range of quality cosmetics and personal care products alongside our pharmaceutical offerings.",
  },
]

export function Services() {
  return (
    <section id="services" className="relative bg-card py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5"
            >
              <span className="text-xs font-semibold tracking-wide text-primary uppercase">Our Services</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Pharmaceuticals & Cosmetics
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 max-w-lg text-lg text-muted-foreground"
            >
              From wholesale drug supply to retail cosmetics, Faith Fancy Pharmaceutical
              serves every customer with genuine products at fair prices.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="https://wa.me/message/L7PHXOGAO53IJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent"
            >
              Get In Touch
              <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>

          {/* Services Grid */}
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-border bg-background p-6 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
