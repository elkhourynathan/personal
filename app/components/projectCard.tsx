import React from 'react';

interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, date, description, techStack, imageUrl, githubUrl }) => {
  return (
    <div
      className="relative w-full rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg"></div>
      <div className="relative p-4 md:px-6 md:py-8">
        <a
          href={githubUrl}
          className="text-lg md:text-xl font-bold text-white hover:text-accent transition-colors"
        >
          {title}
        </a>
        <p className="mt-2 text-sm md:text-base text-white">{description}</p>
        <div className="mt-4 space-x-2">
          {techStack.map((tech, index) => (
            <span key={index} className="badge badge-accent badge-outline">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
