"use client"
import { useEffect, useRef } from "react";
import { CanvaRoot } from "./components/CanvaRoot";
import { ApresentationSection } from "./components/Layout/Sections/ApresentationSection";
import { SkillsSection } from "./components/Layout/Sections/SkillsSection";
import { ScrollImage } from "./components/ScrollImage";
import { useInView } from "framer-motion";

export default function Home() {
  const skillsSectionRef = useRef(null)
  const isSkillsInView = useInView(skillsSectionRef)

  useEffect(() => {
    console.log('isSkillsInView', isSkillsInView)
  }, [isSkillsInView])

  return (
    <>
      <main>
        <CanvaRoot 
          isCareerSection={false}
          isSkillSection={isSkillsInView}
        />
        <ApresentationSection />
        <SkillsSection ref={skillsSectionRef} />
      </main>
      <ScrollImage />
    </>
  )
}
