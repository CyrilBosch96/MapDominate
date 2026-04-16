"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Mechanism from "@/components/Mechanism";
import Differentiator from "@/components/Differentiator";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setModalOpen(true)} />
      <main>
        <Hero onContactClick={() => setModalOpen(true)} />
        <Problem />
        <Mechanism />
        <Differentiator />
        <Services />
        <Results />
        <Pricing onContactClick={() => setModalOpen(true)} />
        <FAQ />
        <FinalCTA onContactClick={() => setModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
