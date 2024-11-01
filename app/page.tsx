import {HeroSection} from "./components/pages/home/hero-section";
import {KnownTechs} from "./components/pages/home/knowns-techs";
import {HighlightProjects} from "./components/pages/home/highligted-projects/highlight-projects";
import {WorkExperience} from "./components/pages/home/work-experience";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
      <HighlightProjects />
      <WorkExperience />
    </>
  );
}
