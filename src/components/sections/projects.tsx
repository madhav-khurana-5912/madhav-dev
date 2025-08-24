import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, GitFork, Star } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with Next.js and Stripe for payments.",
    image: "https://placehold.co/400x225.png",
    imageHint: "online store",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    stars: 123,
    forks: 45,
  },
  {
    title: "Project Management Tool",
    description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively. Features real-time updates with Firebase.",
    image: "https://placehold.co/400x225.png",
    imageHint: "dashboard analytics",
    tags: ["React", "Firebase", "Redux", "Material-UI"],
    liveUrl: "#",
    repoUrl: "#",
    stars: 256,
    forks: 88,
  },
  {
    title: "Personal Blog",
    description: "A minimalist blog platform with a CMS for writing and publishing articles. Optimized for performance and SEO, with full-text search capabilities.",
    image: "https://placehold.co/400x225.png",
    imageHint: "minimalist blog",
    tags: ["Next.js", "MDX", "Contentlayer", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
    stars: 98,
    forks: 12,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="text-left mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Work</h2>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article key={project.title} className="group relative flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={project.imageHint}
              />
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
              <p className="mt-2 text-muted-foreground flex-grow">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/20">
                <Link href={project.liveUrl} className="flex items-center gap-1 hover:text-primary transition-colors" target="_blank">
                  <ExternalLink className="w-4 h-4" />
                  Live
                </Link>
                <Link href={project.repoUrl} className="flex items-center gap-1 hover:text-primary transition-colors" target="_blank">
                  <Star className="w-4 h-4" />
                  {project.stars}
                </Link>
                <Link href={project.repoUrl} className="flex items-center gap-1 hover:text-primary transition-colors" target="_blank">
                  <GitFork className="w-4 h-4" />
                  {project.forks}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
