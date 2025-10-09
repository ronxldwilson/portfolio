import Image from "next/image";

interface Hackathon {
  id: number;
  name: string;
  date: string;
  award: string;
  description: string;
  link: string;
  image: string;
}

interface HackathonListProps {
  hackathons: Hackathon[];
}

export default function HackathonList({ hackathons }: HackathonListProps) {
  return (
    <section className="max-w-4xl mx-auto mb-20 px-4 sm:px-0">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center sm:text-left">
        Hackathons & Competitions
      </h2>

      <div className="space-y-8">
        {Array.isArray(hackathons) &&
          hackathons.map((hackathon) => (
            <a
              key={hackathon.id}
              href={hackathon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 sm:p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                {/* Responsive Image Container */}
                <div className="relative w-full sm:w-48 h-40 sm:h-24 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center flex-shrink-0 p-4">
                  <Image
                    src={hackathon.image}
                    alt={hackathon.name}
                    width={160}
                    height={80}
                    className="max-w-full max-h-full object-contain opacity-90 transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-3">
                    <h3 className="text-lg sm:text-xl font-semibold leading-snug text-center sm:text-left">
                      {hackathon.name}
                    </h3>
                    <span className="text-xs sm:text-sm text-secondary text-center sm:text-right">
                      {hackathon.date}
                    </span>
                  </div>

                  <p className="text-primary font-medium text-sm sm:text-base mb-2 text-center sm:text-left">
                    {hackathon.award}
                  </p>
                  <p className="text-secondary text-sm leading-relaxed text-center sm:text-left">
                    {hackathon.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
      </div>
    </section>
  );
}
