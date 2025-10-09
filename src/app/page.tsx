import ProjectList from "@/components/ProjectList";
import HackathonList from "@/components/HackathonList";
import SkillsSection from "@/components/SkillsSection";
import HeaderSection from "@/components/HeaderSection";
import Socials from "@/components/Socials";
import fs from 'fs';
import path from 'path';

export default function Home() {
  const projectsFilePath = path.join(process.cwd(), 'projects.json');
  const projectsData = fs.readFileSync(projectsFilePath, 'utf8');
  const projects = JSON.parse(projectsData);

  const hackathonsFilePath = path.join(process.cwd(), 'hackathons.json');
  const hackathonsData = fs.readFileSync(hackathonsFilePath, 'utf8');
  const hackathons = JSON.parse(hackathonsData);

  return (<>
    <HeaderSection />
    <div className="min-h-screen p-8 sm:p-12 md:p-16 lg:p-20">
      {/* Intro Section (Combined Hero + About) */}
      <section className="max-w-4xl mx-auto mb-24">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Intro Text */}
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-4  ">
              Hi, I'm Ronald Wilson
            </h1>
            <p className="text-xl md:text-2xl text-secondary mb-6">
              I love <span className="text-primary font-semibold">AI</span> and
              <span className="text-primary font-semibold"> scalable web development</span> -
              building intelligent, modern applications that perform beautifully at scale.
            </p>
            <p className="text-lg text-secondary leading-relaxed mb-8 max-w-2xl">
              I specialize in Next.js, and cloud-native systems, with a focus on
              turning complex ideas into simple, elegant experiences. My goal is to create
              products that are as enjoyable to use as they are powerful behind the scenes.
            </p>

            {/* CTAs */}
            <div className="flex flex-col items-center sm:items-start gap-6 mt-6">
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="mailto:ronxldwilson@gmail.com"
                  className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-full shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-200 font-medium"
                >
                  Get in Touch
                </a>
                <a
                  href="/resume"
                  className="border border-slate-400 text-slate-700 dark:text-slate-200 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-full transition-all duration-200 font-medium"
                >
                  View Resume
                </a>
              </div>

              {/* Socials */}
              <div className="mt-4">
                <Socials />
              </div>
            </div>
          </div>

            {/* Profile Image */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden flex-shrink-0">
              <img
                src="/Ron.jpg" // replace with your image path
                alt="Ronald Wilson"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
      </section>


      {/* Projects Section */}
      <section id="projects">
        <ProjectList projects={projects} />
      </section>

      {/* Hackathons Section*/}
      <section id="hackathons">
        <HackathonList hackathons={hackathons} />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <SkillsSection />
      </section>


      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-center text-secondary border-t border-slate-200 dark:border-slate-800 pt-8">
        <p>© 2024 Ronald Wilson. All rights reserved.</p>
      </footer>
    </div>
  </>
  );
}
