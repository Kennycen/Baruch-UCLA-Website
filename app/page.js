import About from "./components/About";
import BestMoments from "./components/BestMoments";
import Chatbot from "./components/Chatbot";
import Culture from "./components/Culture";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pillars from "./components/Pillars";
import Team from "./components/Team";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pillars />
      <BestMoments />
      <About />
      <Events />
      <Culture />
      <Team />
      <Chatbot />
      <Footer />
    </>
  );
}
