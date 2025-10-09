'use client';
import React, { useState } from 'react';

export default function SkillsSection() {
  const skills = [
    'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React.js', 
    'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Kafka', 
    'Docker', 'Kubernetes', 'AWS Cloud'
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => {
            const iconName = skill.toLowerCase().replace('.', '').replace(' ', '-');

            // Custom component for each skill
            const SkillIcon = () => {
              const [src, setSrc] = useState(`/tech-logos/${iconName}.svg`);

              const handleError = () => {
                if (src.endsWith('.svg')) setSrc(`/tech-logos/${iconName}.png`);
                else if (src.endsWith('.png')) setSrc(`/tech-logos/${iconName}.jpg`);
              };

              return (
                <img
                  src={src}
                  alt={skill}
                  className="w-6 h-6"
                  onError={handleError}
                />
              );
            };

            return (
              <div
                key={skill}
                className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center gap-3"
              >
                <SkillIcon />
                <span className="text-secondary">{skill}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
