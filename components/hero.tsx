"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Shield, ShoppingBag, Gem } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-card pb-16 pt-28 lg:pb-24 lg:pt-36">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient accent */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/8 blur-[100px]" />
      <div className="absolute left-0 bottom-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-secondary/50 blur-[80px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2"
            >
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Genuine & Trusted Medicine</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              Your Trusted
              <span className="block text-primary">Pharmaceutical</span>
              & Cosmetics Store
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Faith Fancy Pharmaceutical stocks genuine pharmaceuticals and cosmetics —
              available wholesale and retail. All kinds of authentic medicines you can trust.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://wa.me/message/L7PHXOGAO53IJ1"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent"
              >
                Request Catalogue
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#categories"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary"
              >
                View Products
              </a>
            </motion.div>

            {/* Location */}
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <ShoppingBag className="mb-4 h-8 w-8 text-primary" />
              <p className="text-3xl font-bold text-foreground">Wholesale</p>
              <p className="mt-1 text-sm text-muted-foreground">& Retail Available</p>
            </div>
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <Gem className="mb-4 h-8 w-8 text-primary" />
              <p className="text-3xl font-bold text-foreground">Genuine</p>
              <p className="mt-1 text-sm text-muted-foreground">Pharmaceuticals & Cosmetics</p>
            </div>
            <div className="col-span-full rounded-xl border border-primary/20 bg-primary/5 p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-2xl font-bold text-foreground">Ready to Order?</p>
                  <p className="mt-1 text-sm text-muted-foreground">Wholesale & retail — call or WhatsApp us</p>
                </div>
                <a
                  href="https://wa.me/message/L7PHXOGAO53IJ1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-primary p-2.5 text-primary-foreground transition-colors hover:bg-accent"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
