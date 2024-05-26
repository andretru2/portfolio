import { type ProjectFeature } from "@/types";
import { useEffect, useState } from "react";
import { ProjectCardStack } from "./project-card-stack";
import { motion } from "framer-motion";

interface Props {
  features: ProjectFeature[];
}

export function ProjectFeatures({ features }: Props) {
  const sections = ["About", "Features", "More"];
  const duration = 10;

  const [sectionIndex, setSectionIndex] = useState(0);

  const [featuresSelected, setFeaturesSelected] = useState<
    ProjectFeature[]
  >(getFeatures(sections[sectionIndex]));

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSectionIndex =
        (sectionIndex + 1) % sections.length;
      setFeaturesSelected(
        getFeatures(sections[nextSectionIndex])
      );
      setSectionIndex(nextSectionIndex);
    }, duration * 1000);
    return () => clearInterval(interval);
  }, [sectionIndex]);

  function getFeatures(section: string) {
    return features.filter(
      (feature) => feature.section === section
    );
  }

  return (
    <motion.div className="h-full w-full ">
      {featuresSelected && (
        <ProjectCardStack features={featuresSelected} />
      )}
    </motion.div>
  );
}
