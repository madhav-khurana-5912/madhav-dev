import { Badge } from "@/components/ui/badge";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma",
  "Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Firebase",
  "Git", "GitHub", "Docker", "Vercel", "Google Cloud", "CI/CD"
];

// Duplicate skills to create a seamless loop
const duplicatedSkills = [...skills, ...skills];

export function Skills() {
  const half = Math.ceil(duplicatedSkills.length / 2);
  const firstRow = duplicatedSkills.slice(0, half);
  const secondRow = duplicatedSkills.slice(half);

  return (
    <section id="skills" className="py-12 md:py-20 w-full overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">What I Work With</h2>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex flex-col gap-2">
            <div className="flex scroller space-x-4">
                {firstRow.map((skill, index) => (
                    <Badge key={`first-${index}-${skill}`} variant="secondary" className="px-4 py-1 text-lg whitespace-nowrap">
                    {skill}
                    </Badge>
                ))}
            </div>
            <div className="flex scroller space-x-4" style={{ animationDirection: 'reverse' }}>
                {secondRow.map((skill, index) => (
                    <Badge key={`second-${index}-${skill}`} variant="secondary" className="px-4 py-1 text-lg whitespace-nowrap">
                    {skill}
                    </Badge>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
