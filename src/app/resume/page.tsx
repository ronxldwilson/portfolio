import cvData from '../../../ronald_wilson_cv.json';
import HeaderSection from '@/components/HeaderSection';

export default function Resume() {
  return (
    <>
      <HeaderSection />
      <div className="min-h-screen p-6 sm:p-8 md:p-12 lg:p-16 ">
        <div className='max-w-5xl mx-auto mb-12'>

          {/* Header Section */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{cvData.name}</h1>
            <p className="text-lg md:text-xl text-secondary mb-4">Full Stack Developer</p>

          </section>

          {/* Executive Summary */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Executive Summary</h2>
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
              <p className="text-secondary">{cvData.executive_summary}</p>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            {cvData.experience.map((exp, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                <p className="text-secondary mb-2">{exp.company} | {exp.duration}</p>
                <ul className="list-disc list-inside text-secondary ml-4 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Positions of Responsibility */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Positions of Responsibility</h2>
            {cvData.positions_of_responsibility.map((pos, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold mb-1">{pos.role}</h3>
                <p className="text-secondary mb-2">{pos.organization} | {pos.duration}</p>
                <p className="text-secondary">{pos.details}</p>
              </div>
            ))}
          </section>

          {/* Internships */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Internships</h2>
            {cvData.internships.map((intern, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold mb-1">{intern.role}</h3>
                <p className="text-secondary mb-2">{intern.organization} | {intern.duration}</p>
                <p className="text-secondary">{intern.details}</p>
              </div>
            ))}
          </section>

          {/* Education Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            {cvData.education.map((edu, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 mb-4">
                <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                <p className="text-secondary mb-2">{edu.institution}, {edu.duration}</p>
                <p className="text-secondary">{edu.details}</p>
              </div>
            ))}
          </section>

          {/* Certifications */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cvData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <p className="text-secondary">{cert}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Languages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cvData.languages.map((lang, index) => {
                const [language, proficiency] = lang.replace(')', '').split(' (');
                return (
                  <div key={index} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                    <h3 className="font-semibold">{language}</h3>
                    <p className="text-secondary">{proficiency}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Interests */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Interests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {cvData.interests.map((interest, index) => (
                <div key={index} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <p className="text-secondary">{interest}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}