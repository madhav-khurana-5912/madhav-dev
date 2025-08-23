import { Badge } from "@/components/ui/badge";
import { Server, Settings, Palette } from 'lucide-react';
import type { LucideIcon } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Palette,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Figma"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Python", "Django", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools & DevOps",
    icon: Settings,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Google Cloud", "CI/CD"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="text-left">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">What I Work With</h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="rounded-lg border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <category.icon className="h-8 w-8 text-primary" />
              <h3 className="text-2xl font-semibold">{category.title}</h3>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
