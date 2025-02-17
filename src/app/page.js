import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import Pillars from "@/components/Pillars";
import About from "@/components/About";
import Events from "@/components/Events";
import Culture from "@/components/Culture";
import Team from "@/components/Team";
import Discord from "@/components/Discord";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pillars />
      <About />
      <Events />
      <Culture />
      <Team />
      <Discord />
      <Footer />
    </>
  );
}
