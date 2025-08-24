import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Acme Corporation",
    title: "Senior Software Engineer",
    period: "2021 - Present",
    description: "Error 404: Job description not found. My accomplishments were so vast, they broke the character limit. I can only say I was a code-slinging, bug-vanquishing hero. Please give me the job.",
  },
  {
    company: "Innovate Inc.",
    title: "Software Engineer",
    period: "2019 - 2021",
    description: "Error 404: My achievements at this company are currently unavailable as they are being transcribed into an epic poem. It was legendary. Please give me the job.",
  },
  {
    company: "Tech Solutions LLC",
    title: "Junior Developer",
    period: "2017 - 2019",
    description: "Error 404: The description of my meteoric rise from a junior developer to a coding prodigy has been redacted for national security reasons. It was impressive. Please give me the job.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-20">
      <div className="text-left mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Experience</h2>
      </div>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="grid grid-cols-[auto_1fr] gap-x-4">
            <div className="pt-1">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <h3 className="font-semibold">{exp.title}</h3>
                <span className="text-primary font-medium">@ {exp.company}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
              <p className="text-muted-foreground mt-4">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}