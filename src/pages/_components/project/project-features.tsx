import { type ProjectFeature } from "@/types";
import { useEffect, useState } from "react";
import { ProjectCardStack } from "./project-card-stack";
import { motion } from "framer-motion";

interface Props {
  features: ProjectFeature[];
}

export function ProjectFeatures({ features }: Props) {
  const sections = ["About", "Features", "More"];
  // const sections = features.
  const totalSections = sections.length;
  const duration = 10;

  const [sectionIndex, setSectionIndex] = useState(0);

  const [featuresSelected, setFeaturesSelected] = useState<
    ProjectFeature[]
  >(getFeatures(sections[sectionIndex]));

  //   useEffect(() => {
  //     let intervalId;
  //     const updateFeaturesAndMoveToNextSection = () => {
  //       const currentSection = sections[currentSectionIndex];
  //       const featuresToShow = getFeatures(currentSection);
  //       setFeaturesSelected(featuresToShow);

  //       // Move to the next section after displaying the current section's features
  //       setCurrentSectionIndex((prevIndex) => {
  //         const newIndex = prevIndex + 1;
  //         if (newIndex >= totalSections) {
  //           // Clear the interval if we're at the last section
  //           clearInterval(intervalId);
  //           return 0; // Reset to the first section
  //         }
  //         return newIndex;
  //       });
  //     };

  //     intervalId = setInterval(
  //       updateFeaturesAndMoveToNextSection,
  //       duration * 1000
  //     );

  //     // Cleanup function to clear the interval when the component unmounts
  //     return () => clearInterval(intervalId);
  //   }, [currentSectionIndex]); // Depend on currentSectionIndex to re-run the effect when it changes

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

  //   setInterval(() => {
  //     setFeaturesSelected(
  //       getFeatures(sections[featuresSelectedIndex])
  //     );
  //     setFeaturesSelectedIndex((prev) =>
  //       prev === features.length ? 0 : prev + 1
  //     );
  //   }, duration * 1000);
  //   console.log(featuresSelectedIndex, featuresSelected);

  return (
    <motion.div className="h-full w-full ">
      {featuresSelected && (
        <ProjectCardStack features={featuresSelected} />
      )}
    </motion.div>
  );
}
