"use client"

import { motion } from "framer-motion"
import {
  Pill,
  Stethoscope,
  Syringe,
  HeartPulse,
  Baby,
  Eye,
  Bone,
  Brain,
  Activity,
  Droplets,
  ShieldPlus,
  Microscope,
  Flower2,
  ArrowUpRight
} from "lucide-react"

const categories = [
  {
    icon: Pill,
    name: "Prescription Medicines (POM)",
    description: "NAFDAC registered prescription-only medications including antibiotics, antihypertensives, antidiabetics, and controlled substances.",
    examples: ["Antibiotics", "Antihypertensives", "Antidiabetics", "Antimalarials"],
  },
  {
    icon: ShieldPlus,
    name: "Over-The-Counter (OTC)",
    description: "Non-prescription pharmaceuticals for common ailments. Analgesics, antihistamines, antacids, and cough preparations.",
    examples: ["Analgesics", "Antihistamines", "Antacids", "Cold & Flu"],
  },
  {
    icon: Syringe,
    name: "Injectables & Infusions",
    description: "Sterile injectable preparations, IV fluids, and infusion solutions for hospital and clinical use.",
    examples: ["IV Fluids", "Injectable Antibiotics", "Vaccines", "Blood Products"],
  },
  {
    icon: Baby,
    name: "Maternal & Child Health",
    description: "Specialized products for pregnancy, childbirth, and pediatric care. Prenatal vitamins, infant formulas, and neonatal supplies.",
    examples: ["Prenatal Supplements", "Infant Formula", "Pediatric Syrups", "Neonatal Kits"],
  },
  {
    icon: HeartPulse,
    name: "Cardiovascular Drugs",
    description: "Complete range of cardiac medications including ACE inhibitors, beta-blockers, statins, and anticoagulants.",
    examples: ["ACE Inhibitors", "Beta Blockers", "Statins", "Anticoagulants"],
  },
  {
    icon: Brain,
    name: "CNS & Neurological",
    description: "Central nervous system medications, anticonvulsants, antidepressants, and neurological preparations.",
    examples: ["Anticonvulsants", "Antidepressants", "Anxiolytics", "Analgesics"],
  },
  {
    icon: Droplets,
    name: "Antimalarials & Antiparasitics",
    description: "Essential antimalarial combinations, antihelmintics, and antiprotozoal medications critical for tropical medicine.",
    examples: ["ACT Combinations", "Antihelmintics", "Antiprotozoals", "Prophylactics"],
  },
  {
    icon: Eye,
    name: "Ophthalmic & ENT",
    description: "Eye drops, ointments, and ear/nose/throat preparations for specialized care.",
    examples: ["Eye Drops", "Ear Drops", "Nasal Sprays", "Ophthalmic Ointments"],
  },
  {
    icon: Bone,
    name: "Musculoskeletal",
    description: "Anti-inflammatory drugs, muscle relaxants, and bone health supplements including calcium and vitamin D preparations.",
    examples: ["NSAIDs", "Muscle Relaxants", "Calcium Supplements", "Joint Care"],
  },
  {
    icon: Activity,
    name: "Diagnostic Kits",
    description: "Rapid diagnostic test kits for malaria, HIV, hepatitis, pregnancy, blood glucose, and other point-of-care testing.",
    examples: ["Malaria RDT", "HIV Test Kits", "Pregnancy Tests", "Glucometers"],
  },
  {
    icon: Stethoscope,
    name: "Medical Equipment",
    description: "Diagnostic and monitoring equipment for healthcare facilities. BP monitors, stethoscopes, thermometers, and examination tools.",
    examples: ["BP Monitors", "Stethoscopes", "Thermometers", "Examination Sets"],
  },
  {
    icon: Microscope,
    name: "Hospital Consumables",
    description: "Surgical supplies, wound care materials, disposables, and laboratory consumables for healthcare facilities.",
    examples: ["Surgical Gloves", "Syringes", "Bandages", "Lab Consumables"],
  },
  {
    icon: Flower2,
    name: "Cosmetics & Personal Care",
    description: "Quality cosmetics, skincare, and personal care products. Beauty and hygiene essentials for everyday use.",
    examples: ["Skincare", "Hair Care", "Body Lotions", "Hygiene Products"],
  },
]

export function Categories() {
  return (
    <section id="categories" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5"
          >
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">Product Categories</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            All Kinds of Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Genuine pharmaceuticals, cosmetics, and medical supplies — wholesale & retail
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/30 hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <category.icon className="h-5 w-5 text-primary" />
              </div>

              {/* Title */}
              <h3 className="mb-2 font-semibold text-foreground">
                {category.name}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {category.description}
              </p>

              {/* Examples */}
              <div className="flex flex-wrap gap-1.5">
                {category.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-md bg-secondary px-2 py-1 text-xs text-secondary-foreground"
                  >
                    {example}
                  </span>
                ))}
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 rounded-full bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/message/L7PHXOGAO53IJ1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent"
          >
            Request Full Catalogue
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Wholesale & retail — we serve everyone
          </p>
        </motion.div>
      </div>
    </section>
  )
}
