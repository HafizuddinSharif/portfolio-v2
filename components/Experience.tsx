"use client";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../public/data/experience.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const tl = gsap.timeline().delay(3);
    tl.from(sectionRef.current, {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "power2.inOut",
    });
  });
  return (
    <div ref={sectionRef} id="experience" className="w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
