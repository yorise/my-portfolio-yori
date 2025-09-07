import ProjectDetail from "@/sections/projects/ProjectDetail";
import { slugify } from "@/utils/slugify";
import { projects } from "@/lib/projects";

export default function ProjectDetails({ params }) {
  const { slug } = params;
  const project = projects.find((p) => slugify(p.title) === slug);

  return (
    <main className="bg-background">
      <ProjectDetail project={project} />
    </main>
  );
}
