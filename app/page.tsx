import { CanvaRoot } from "./components/CanvaRoot";
import { ApresentationSection } from "./components/Layout/Sections/ApresentationSection";
import { SkillsSection } from "./components/Layout/Sections/SkillsSection";
import { ScrollImage } from "./components/ScrollImage";

export default function Home() {
  return (
    <>
      <main>
        <CanvaRoot />
        <ApresentationSection />
        <SkillsSection />
      </main>
      <ScrollImage />
    </>
  )
}
