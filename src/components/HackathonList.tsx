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
    <section className="max-w-4xl mx-auto mb-20">
      <h2 className="text-3xl font-bold mb-8">Hackathons & Competitions</h2>
      <div className="space-y-8">
        {Array.isArray(hackathons) &&
          hackathons.map((hackathon) => (
            <a
              key={hackathon.id}
              href={hackathon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative w-full sm:w-48 h-32 sm:h-24 bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={hackathon.image}
                    alt={hackathon.name}
                    fill
                    objectFit="cover"
                    className="opacity-75"
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold mb-1">{hackathon.name}</h3>
                    <span className="text-sm text-secondary whitespace-nowrap">
                      {hackathon.date}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-2">
                    {hackathon.award}
                  </p>
                  <p className="text-secondary text-sm leading-relaxed">
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