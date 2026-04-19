import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { Categories } from "@/components/categories"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Categories />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
