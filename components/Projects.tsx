import ProjectCard from "./ProjectCard";
import projectData from "../public/data/project.json";

const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-2xl font-bold mb-4">Check out my projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
