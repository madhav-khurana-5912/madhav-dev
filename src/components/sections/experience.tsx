import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Acme Corporation",
    title: "Senior Software Engineer",
    period: "2021 - Present",
    description: "Led development of a new client-facing web application using Next.js and TypeScript, resulting in a 30% increase in user engagement. Mentored junior developers and conducted code reviews to maintain high code quality.",
  },
  {
    company: "Innovate Inc.",
    title: "Software Engineer",
    period: "2019 - 2021",
    description: "Developed and maintained features for a large-scale e-commerce platform using React and Redux. Collaborated with designers and product managers to create a seamless user experience.",
  },
  {
    company: "Tech Solutions LLC",
    title: "Junior Developer",
    period: "2017 - 2019",
    description: "Assisted in the development of various web applications, gaining experience with HTML, CSS, and JavaScript. Contributed to bug fixing and feature implementation in a fast-paced agile environment.",
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