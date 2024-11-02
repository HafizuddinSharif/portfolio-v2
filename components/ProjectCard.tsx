import Project from "@/model/Project";
import Image from "next/image";
import TechStack from "./TechStack";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="card bg-transparent border border-gray-100 w-full shadow-xl transition-all duration-300 hover:scale-105">
      <figure className="w-full h-48 relative">
        <Image
          src={project.imgSrc}
          alt={project.title}
          fill
          className="object-cover"
        />
      </figure>
      <div className="card-body px-4">
        <h2 className="card-title">{project.title}</h2>
        <div className="flex flex-row gap-2">
          {project.techStack.map((tech) => (
            <TechStack key={tech} tech={tech} />
          ))}
        </div>
        <p className="text-sm">{project.description}</p>
        <div className="card-actions justify-end">
          <Link
            href={"/projects"}
            className="italic text-sm text-gray-500 transition-all duration-1000 hover:text-primary hover:underline"
          >
            learn more &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
