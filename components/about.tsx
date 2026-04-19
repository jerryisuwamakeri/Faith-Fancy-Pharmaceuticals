"use client"

import { motion } from "framer-motion"
import { Shield, Tag, Users, CheckCircle2 } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Genuine Products Only",
    description: "Every pharmaceutical and cosmetic product is verified for authenticity — no counterfeits, no compromises.",
  },
  {
    icon: Tag,
    title: "Wholesale & Retail",
    description: "Whether you need a single item or bulk stock, we serve you at competitive prices both wholesale and retail.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "We build lasting relationships through reliability, honesty, and consistent product quality.",
  },
]

const highlights = [
  "Genuine pharmaceuticals",
  "Cosmetics & personal care",
  "Wholesale pricing available",
  "Retail walk-in welcome",
  "All kinds of medications",
  "Trusted by the community",
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#0d3320] py-20 lg:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#1b6b3a]/30 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1b6b3a]/20 px-4 py-1.5"
            >
              <span className="text-xs font-semibold tracking-wide text-[#a8d5bc] uppercase">About Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Built on Trust,
              <span className="block text-[#4caf80]">Driven by Excellence</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg leading-relaxed text-white/75"
            >
              Faith Fancy Pharmaceutical is your trusted community source for genuine
              pharmaceuticals and cosmetics. We are committed to stocking only
              authentic products at fair prices.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-lg leading-relaxed text-white/75"
            >
              From prescription medicines to over-the-counter drugs, cosmetics, and personal
              care products — we supply wholesale and retail so every customer walks away satisfied.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#4caf80]" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 rounded-xl border border-[#1b6b3a]/30 bg-[#1b6b3a]/10 p-5 transition-all hover:border-[#4caf80]/50 hover:bg-[#1b6b3a]/20"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#4caf80]/20">
                  <value.icon className="h-5 w-5 text-[#4caf80]" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#a8d5bc]/70">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
