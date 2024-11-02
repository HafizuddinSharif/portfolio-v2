"use client";

import TechStack from "./TechStack";
import Image from "next/image";
import { Experience } from "@/model/Experience";
import { useState } from "react";

const ExperienceCard = ({
  experience,
}: {
  key: number;
  experience: Experience;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const upperPart = () => (
    <div className="flex gap-4">
      <div className="avatar">
        <div className="w-24 rounded-xl">
          <Image
            src={experience.imgSrc}
            width={100}
            height={100}
            alt="Company Logo"
          />
        </div>
      </div>
      <div className="w-full flex flex-col justify-between">
        <div className="grid grid-cols-2">
          <h3 className="text-xl font-bold">{experience.company}</h3>
          <p className="text-sm text-right">
            {experience.startDate} - {experience.endDate}
          </p>
        </div>
        <div>
          <p>{experience.role}</p>
        </div>
        {/* Tech stack */}
        <div className="flex justify-between">
          <div className="flex gap-2">
            {experience.techStack.map((tech, index) => (
              <TechStack key={index} tech={tech} />
            ))}
          </div>
          <p className="text-sm text-gray-500 italic pr-1">
            {isExpanded ? "" : "click to expand"}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="collapse bg-base-200 mb-4 transition-all duration-300 hover:scale-105"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <input type="checkbox" />
      <div className="collapse-title px-0">{upperPart()}</div>
      <div className="collapse-content px-0">
        <ul>
          {experience.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
