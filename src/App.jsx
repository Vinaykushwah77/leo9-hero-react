import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import FloatingBlob from "./components/FloatingBlob";

export default function App() {
  return (
    <div className="relative bg-white text-primary overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingBlob size={300} color="from-primary to-accent" position="top-20 left-10" />
        <FloatingBlob size={350} color="from-accent to-primary" position="bottom-20 right-10" />
        <FloatingBlob size={280} color="from-accent to-primary" position="top-1/3 right-1/4" />
      </div>
      <div className="relative z-10">
        <Navbar/>
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
    </div>
  );
}
