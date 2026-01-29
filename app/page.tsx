"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Internship from "@/components/Internship";
import Contact from "@/components/Contact";
import FloatingSocials from "@/components/FloatingSocials";
import Footer from "@/components/Footer";
export default function Home() {
  return (

    <main>
          <>
      <FloatingSocials />
      {/* other sections */}
    </>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Internship />
      <Contact />
      <Footer />
    </main>
  )
}