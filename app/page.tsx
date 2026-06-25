import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TechWall } from "@/components/TechWall";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechWall />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
