import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work experience.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Work Experience
      </h1>
      <div className="prose prose-neutral">
        <p>Below is a summary of my previous and current work experience</p>
        <hr className="my-6 border-neutral-600 " />
        <h2 className="font-medium text-xl mb-0 tracking-tighter">
          J-Squared Technologies
        </h2>
        <div className="flex flex-row items-start justify-between">
          <p className="text-neutral-400 text-sm">Machine Learning Engineer Intern</p>
          <p className="text-neutral-400 text-sm">Present</p>
        </div>
        <p>
          Working on the FALC-AI team, developing computer vision based
          solutions for retail, mining, and defense applications.
        </p>
        <ul>
          <li>
            Integrated parallelism into the computer vision pipeline to fully
            utilize edge device hardware, increasing FPS by 30%
          </li>
          <li>
            Developed a configurable synthetic data generation pipeline in
            Python, enhancing dataset size and diversity, resulting in a 25%
            improvement in model accuracy and a 30% reduction in false positives
          </li>
          <li>
            Researched and integrated an evaluation pipeline for multi-object
            tracking, dynamically mapping ReID assigned IDs to ground truth
            data, resulting in precise metrics on MOTA, MOTP, HOTA, false
            positives, false negatives, and misses
          </li>
        </ul>
        <div className="space-x-2">
          <div className="badge badge-accent badge-outline">Python</div>
          <div className="badge badge-accent badge-outline">PyTorch</div>
          <div className="badge badge-accent badge-outline">Typescript</div>
          <div className="badge badge-accent badge-outline">Next.js</div>
          <div className="badge badge-accent badge-outline">NestJS</div>
        </div>
        <hr className="my-6 border-neutral-600 " />
        <h2 className="font-medium text-xl mb-0 tracking-tighter">
          Apption Software
        </h2>
        <div className="flex flex-row items-start justify-between">
          <p className="text-neutral-400 text-sm">
            Full Stack Developer Intern
          </p>
          <p className="text-neutral-400 text-sm">Sept 2023 - Dec 2023</p>
        </div>
        <ul>
          <li>
            Developed a keyword extraction algorithm in C# using tokenization,
            word co-occurrence, position analysis, and inverse frequency,
            resulting in an 5x increase in computation speed for accessing
            structured and unstructured documents
          </li>
          <li>
            Engineered the Datahunter Query Language using a modified command
            pattern for backend architecture and integrated it into the Blazor
            frontend, resulting in over 200% faster query loads
          </li>
          <li>
            Overhauled the data catalog pipeline in Databricks, resulting in
            secure and automated data exports to Azure storage
          </li>
        </ul>
        <div className="space-x-2">
          <div className="badge badge-accent badge-outline">C#</div>
          <div className="badge badge-accent badge-outline">.NET</div>
          <div className="badge badge-accent badge-outline">Python</div>
          <div className="badge badge-accent badge-outline">SQL</div>
          <div className="badge badge-accent badge-outline">Blazor</div>
        </div>
        <hr className="my-6 border-neutral-600 " />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Starvoy Technologies
        </h2>
        <div className="flex flex-row items-start justify-between">
          <p className="text-neutral-400 text-sm">Software Engineer Intern</p>
          <p className="text-neutral-400 text-sm">May 2023 - Aug 2023</p>
        </div>
        <ul>
          <li>
            Lead the development of a comprehensive test automation program for
            optical transceivers using Python, saving over 20 hours of testing
            time per week
          </li>
          <li>
            Developed and integrated C++ APIs in Python with Cython for hardware
            components including BERTs, DSOs, and temperature control units,
            ensuring seamless functionality
          </li>
          <li>
            Designed a user-centric interface with ReactJS and Electron,
            displaying real-time hardware data and streamlining it into
            downloadable reports
          </li>
        </ul>
        <div className="space-x-2">
          <div className="badge badge-accent badge-outline">Python</div>
          <div className="badge badge-accent badge-outline">C++</div>
          <div className="badge badge-accent badge-outline">Reactjs</div>
          <div className="badge badge-accent badge-outline">Electron</div>
          <div className="badge badge-accent badge-outline">Flask</div>
        </div>
      </div>
    </section>
  );
}
