import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Project',
  description: 'A summary of my favorite projects.',
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Work Experience
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Below is a summary of my previous and current work experience</p>
        <hr className="my-6 border-neutral-600 " />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          J-Squared Technologies
        </h2>
        <div className="flex flex-row items-start justify-between">
          <p className="text-neutral-400 text-sm">
            Software & Data Science Intern
          </p>
          <p className="text-neutral-400 text-sm">Present</p>
        </div>
        <p>
          Working on the FALC-AI team, developing computer vision based
          solutions for retail, construction and other industries.
        </p>
        <div className="space-x-2">
          <div className="badge badge-accent badge-outline">Python</div>
          <div className="badge badge-accent badge-outline">PyTorch</div>
          <div className="badge badge-accent badge-outline">Typescript</div>
          <div className="badge badge-accent badge-outline">Next.js</div>
        </div>
        <hr className="my-6 border-neutral-600 " />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Apption Software
        </h2>
        <div className="flex flex-row items-start justify-between">
          <p className="text-neutral-400 text-sm">Full Stack Developer</p>
          <p className="text-neutral-400 text-sm">Sept - Dec 2023</p>
        </div>
        <ul>
          <li>
            Developed a keyword extraction algorithm in C# to extract critical
            keywords and enable access to unstructured documents, enhancing
            solution speed by 80% with more contextually relevant results
          </li>
          <li>
            Engineered the Datahunter Query Language (DQL), a user focused query
            language using a modified command pattern for backend architecture,
            enhancing data retrieval efficiency and query capabilities
          </li>
          <li>
            Rebuilt Datahunter’s discover page using Blazor to integrate DQL,
            resulting in a more intuitive user interface, over 200% faster query
            loads, and new features such as saved query histories
          </li>
          <li>
            Overhauled the data catalogue pipeline in Databricks with data
            engineering, automation, and establishing secure, scalable data
            export with encryption and hashing to Azure storage
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
          <p className="text-neutral-400 text-sm">Software Developer</p>
          <p className="text-neutral-400 text-sm">May - Aug 2023</p>
        </div>
        <ul>
          <li>
            Designed and developed a comprehensive test automation program for
            optical transceivers using Python, reducing testing time by over 10
            hours per week
          </li>
          <li>
            Seamlessly integrated hardware components by implementing APIs from
            BERTs, DSOs, and temperature control units
          </li>
          <li>
            Developed testing logic with extensive error checking mechanisms to
            guarantee correct hardware connections and disconnections,
            mitigating potential test disruptions
          </li>
          <li>
            Spearheaded the design of a user-centric interface with ReactJS and
            Electron, displaying real-time data from the hardware and
            streamlining all relevant data into a structured downloadable report
            for end-users
          </li>
        </ul>
        <div className="space-x-2">
          <div className="badge badge-accent badge-outline">Python</div>
          <div className="badge badge-accent badge-outline">Reactjs</div>
          <div className="badge badge-accent badge-outline">Electron</div>
          <div className="badge badge-accent badge-outline">Flask</div>
        </div>
      </div>
    </section>
  );
}
