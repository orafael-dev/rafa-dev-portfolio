import {HeroSection} from "./components/pages/home/hero-section";
import {KnownTechs} from "./components/pages/home/knowns-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnownTechs />
    </>
  );
}
