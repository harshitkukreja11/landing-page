import React from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Artists from "./components/Artists";
import Organisations from "./components/Organisations";
import Categories from "./components/Categories";
import Trust from "./components/Trust";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <>
    
      <Hero />
      <HowItWorks />
      <Artists />
      <Organisations />
      <Categories />
      <Trust />
      <CTA />
      <Footer />
    </>
  );
}
