export default function Home() {
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
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-hover transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg text-secondary leading-relaxed">
          Passionate full stack developer with expertise in modern web technologies.
          I specialize in building responsive, performant applications with great
          user experiences. Currently focused on React ecosystems and cloud-native
          development.
        </p>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'AWS Cloud'].map((skill) => (
            <div
              key={skill}
              className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <span className="text-secondary">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <div className="h-48 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quisquam, voluptatum.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto text-center text-secondary border-t border-slate-200 dark:border-slate-800 pt-8">
        <p>© 2025 Ronald Wilson. All rights reserved.</p>
      </footer>
    </div>
  );
}
