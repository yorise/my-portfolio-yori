import Hero from "@/sections/home/Hero";
import Project from "@/sections/home/Project";
import Experience from "@/sections/home/Experiences";
import Skills from "@/sections/home/Skills";

export default function Home() {
  return (
    <main className="bg-background overflow-hidden">
      <Hero />
      <Project />
      <Experience />
      <Skills />
    </main>
  );
}
