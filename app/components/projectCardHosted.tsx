import React from 'react'

interface ProjectCardProps {
  title: string
  date: string
  description: string
  techStack: string[]
  imageUrl: string
  githubUrl: string
  hostedUrl: string
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ProjectCardHosted: React.FC<ProjectCardProps> = ({ title, date, description, techStack, imageUrl, githubUrl, hostedUrl }) => {
  return (
    <div className="relative w-full h-60 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-65 rounded-lg"></div>
      <div className="relative px-4 py-6">
        <a href={githubUrl} className="text-2xl font-bold text-white hover:text-accent transition-colors">{title}</a>
        <a href={hostedUrl} className="flex items-center text-white hover:text-accent transition-colors">
          <span className='mr-1'>View Live</span>
          <ArrowIcon />
        </a>
        <p className="mt-2 text-white">{description}</p>
        <div className="mt-4 space-x-2">
          {techStack.map((tech, index) => (
            <div key={index} className="badge badge-accent badge-outline">{tech}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCardHosted