import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LogoSlider from "@/components/sections/LogoSlider";
import Brands from "@/components/sections/Brands";
import Manifesto from "@/components/sections/Manifesto";
import Novidades from "@/components/sections/Novidades";
import LojaFisica from "@/components/sections/LojaFisica";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <LogoSlider />
        <Brands />
        <Manifesto />
        <Novidades />
        <LojaFisica />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
