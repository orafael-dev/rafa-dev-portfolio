import {HorizontalDivider} from "@/app/components/divider/horizontal";
import {SectionTitle} from "@/app/components/section-title";
import {ProjectCard} from "./project-card";

export const HighlightProjects = () => {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />

      <div>
        <ProjectCard />
        <HorizontalDivider className="my-16" />
        <ProjectCard />
        <HorizontalDivider className="my-16" />
      </div>
    </section>
  );
};
