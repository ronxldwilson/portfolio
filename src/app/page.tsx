import ProjectList from "@/components/ProjectList";
import HackathonList from "@/components/HackathonList";
import SkillsSection from "@/components/SkillsSection";
import HeaderSection from "@/components/HeaderSection";
import HeroSection from "@/components/HeroSection";
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

      {/* HeroSeciton */}
      <section id="hero">
        <HeroSection />
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
        <p>© 2025 Ronald Wilson. All rights reserved.</p>
      </footer>
    </div>
  </>
  );
}
