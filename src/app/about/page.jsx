import AboutMe from "@/sections/about/AboutMe";
import Story from "@/sections/about/Story";
import MyExperience from "@/sections/about/MyExperience";

export default function About() {
  return (
    <main className="bg-background overflow-hidden">
      <AboutMe />
      <Story />
      <MyExperience />
    </main>
  );
}
