import ExperienceCard from "./ExperienceCard";
import experienceData from "../public/data/experience.json";

const Experience = () => {
  return (
    <div id="experience" className="w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">Experience</h2>
      {experienceData.map((experience, index) => (
        <ExperienceCard key={index} experience={experience} />
      ))}
    </div>
  );
};

export default Experience;
