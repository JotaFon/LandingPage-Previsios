import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MapDemo from "@/components/MapDemo";
import HowItWorks from "@/components/HowItWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <MapDemo />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
