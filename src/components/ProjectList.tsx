"use client";

import { useState } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const allTags = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags)))];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section className="max-w-4xl mx-auto mb-20">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              activeFilter === tag
                ? 'bg-primary text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-secondary hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            <div className="relative h-48 bg-slate-100 dark:bg-slate-800 rounded-lg mb-4 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                objectFit="cover"
                className="opacity-75"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-secondary mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
