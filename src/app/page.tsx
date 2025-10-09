import ProjectList from "@/components/ProjectList";
import HackathonList from "@/components/HackathonList";
import SkillsSection from "@/components/SkillsSection";
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

  return (
    <div className="min-h-screen p-8 sm:p-12 md:p-16 lg:p-20">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
          Ronald Wilson
        </h1>
        <p className="text-xl md:text-2xl text-secondary mb-8">
          Full Stack Developer building modern web experiences
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium"
          >
            Get in Touch
          </a>
          <a
            href="/resume"
            className="text-secondary hover:text-primary transition-colors font-medium border border-secondary hover:border-primary px-4 py-2 rounded-full"
          >
            View Resume
          </a>
          <Socials />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8 text-left">About Me</h2>
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 mx-auto md:mx-0">
            <img
              src="/Ron.jpg" // <- replace with your image path
              alt="Ronald Wilson"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-2xl font-semibold mb-3">Hi, I'm Ronald Wilson 👋</h3>
            <p className="text-lg text-secondary leading-relaxed mb-3">
              I’m a developer who loves blending <span className="text-primary font-medium">AI</span> and
              <span className="text-primary font-medium"> scalable web development</span> to create meaningful,
              high-performance digital experiences. I enjoy turning complex ideas into clean, reliable,
              and user-friendly products.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              My current focus is building intelligent, cloud-native applications with React, Next.js,
              and modern AI frameworks — all while keeping scalability, design, and user impact at the core.
            </p>
          </div>
        </div>
      </section>



      {/* Projects Section */}
      <ProjectList projects={projects} />

      {/* Hackathons Section*/}
      <HackathonList hackathons={hackathons} />

      <SkillsSection />


      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-center text-secondary border-t border-slate-200 dark:border-slate-800 pt-8">
        <p>© 2024 Ronald Wilson. All rights reserved.</p>
      </footer>
    </div>
  );
}
