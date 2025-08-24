import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-0.5 bg-border -z-10"></div>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12">
              {/* Dot on the timeline */}
              <div className="absolute left-[20px] top-1 h-3 w-3 rounded-full bg-primary border-2 border-background"></div>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="mt-1">{exp.company}</CardDescription>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}