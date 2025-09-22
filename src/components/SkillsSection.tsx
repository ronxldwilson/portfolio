import React from 'react'

export default function SkillsSection() {
    return (
        <>
            {/* Skills Section */}
            <section className="max-w-4xl mx-auto mb-20">
                <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {['JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'React.js', 'Next.js', 'Tailwind CSS', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'AWS Cloud'].map((skill) => {
                        const iconName = skill.toLowerCase().replace('.', '').replace(' ', '-');
                        return (
                            <div
                                key={skill}
                                className="p-4 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors flex items-center gap-3"
                            >
                                <img
                                    src={`/tech-logos/${iconName}.svg`}
                                    alt={skill}
                                    className="w-6 h-6"
                                />
                                <span className="text-secondary">{skill}</span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}
