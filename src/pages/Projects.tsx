import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/siteData";

const Projects = () => (
  <div>
    <PageHero eyebrow="Каталог" title="Проекты домов" subtitle="Готовые проекты каркасных домов с фиксированной ценой. Любой проект адаптируем под ваш участок и пожелания." />
    <section className="py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((p, i) => <ProjectCard key={p.name} p={p} delay={(i % 3) * 0.07} />)}
        </div>
      </div>
    </section>
  </div>
);

export default Projects;
