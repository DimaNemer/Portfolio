
import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Experience from "@/components/sections/Experience";
import Approach from "@/components/sections/Approach";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <FeaturedWork />
      <Experience />
      <Approach />
      <About />
      <Contact />
    </main>
  );
}
