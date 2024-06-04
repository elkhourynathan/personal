import type { Metadata } from 'next';
import ProjectCard from 'app/components/projectCard';
import ProjectCardHosted from 'app/components/projectCardHosted';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A summary of my favorite projects.',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Projects</h1>
      <div className="prose prose-neutral ">
        <hr className="my-6 border-neutral-600 " />
        <ProjectCardHosted
          title="Machine Learning UFC Predictor"
          date="2024"
          description="Developed a project that compiles data from all previous UFC fights and fighters, utilizing this information to train a 
            machine learning model that predicts the outcomes of upcoming fights."
          techStack={[
            'Python',
            'Sci-kit Learn',
            'Pandas',
            'Numpy',
            'ReactJS',
            'Flask',
            'SQL',
          ]}
          imageUrl="/images/ml_ufc_pred.png"
          githubUrl="https://github.com/elkhourynathan/fight_predictor"
          hostedUrl="https://ufc-fight-pred-00326a93d210.herokuapp.com/"
        />
      </div>
      <div className="prose prose-neutral ">
        <hr className="my-6 border-neutral-600 " />
        <ProjectCard
          title="Computer Vision Poker Game Theory Optimizer"
          date="2024"
          description="I developed a poker game theory optimizer in Python for poker video analytics. This project involved creating a 
          sophisticated video analytics pipeline using a custom-trained YOLOv8 model and ByteTrack to accurately distinguish and track 
          player cards from community cards. Additionally, I implemented a Monte Carlo simulation to calculate the probabilities of winning, 
          tying, and losing, which enables strategic decisions on whether to fold, call, or raise based on the expected value.."
          techStack={[
            'Python',
            'Ultralytics',
            'OpenCV',
            'Supervision',
          ]}
          imageUrl="/images/poker_cv_image.png"
          githubUrl="https://github.com/elkhourynathan/poker_game_theory_optimizer"
        />
      </div>
      <div className="prose prose-neutral">
        <ProjectCard
          title="Health and Fitness Club Management System"
          date="2024"
          description="Designed a web application that facilitates interaction among various user categories including members, trainers, and administrators. 
            This platform replicates essential functions needed to manage a fitness club, like personal logging, scheduling member and trainer sessions, 
            organizing classes, and maintaining equipment."
          techStack={['Python', 'PostgreSQL', 'Flask']}
          imageUrl="/images/health_fitness_management.png"
          githubUrl="https://github.com/elkhourynathan/comp3005_project_v2"
        />
      </div>
      <div className="prose prose-neutral">
        <ProjectCard
          title="Workout Tracker"
          date="2024"
          description="Created a web application that enables users to register or log in and monitor intricate workout routines, 
            encompassing varied exercise plans, specific sets, repetitions, and weights. 
            This application helps users precisely track their fitness journey and observe their progress over time."
          techStack={['MongoDB', 'Expressjs', 'ReactJS', 'NodeJS']}
          imageUrl="/images/wrkpr_login.png"
          githubUrl="https://github.com/elkhourynathan/workouttracker_wrkpr"
        />
      </div>
      <div className="prose prose-neutral">
        <ProjectCard
          title="Real Time Chat Application"
          date="2024"
          description="Developer a real time chat application which allows users to create a account and chat with each other."
          techStack={['Python', 'PostgreSQL', 'Flask', 'Socket.io']}
          imageUrl=""
          githubUrl="https://github.com/elkhourynathan/chat_app"
        />
      </div>
      <div className="prose prose-neutral">
        <ProjectCard
          title="Algorithmic Infared Image Detection"
          date="2024"
          description="Created a python application which takes in infared image frames and detects heat signatures."
          techStack={['Python', 'Pygame']}
          imageUrl="/images/marked_target.png"
          githubUrl="https://github.com/elkhourynathan/python-detectheat"
        />
      </div>
    </section>
  );
}
