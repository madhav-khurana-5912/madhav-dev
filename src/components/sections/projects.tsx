import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process. Built with Next.js and Stripe for payments.",
    image: "https://placehold.co/600x400.png",
    imageHint: "online store",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Project Management Tool",
    description: "A collaborative tool for teams to manage tasks, track progress, and communicate effectively. Features real-time updates with Firebase.",
    image: "https://placehold.co/600x400.png",
    imageHint: "dashboard analytics",
    tags: ["React", "Firebase", "Redux", "Material-UI"],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Personal Blog",
    description: "A minimalist blog platform with a CMS for writing and publishing articles. Optimized for performance and SEO, with full-text search capabilities.",
    image: "https://placehold.co/600x400.png",
    imageHint: "minimalist blog",
    tags: ["Next.js", "MDX", "Contentlayer", "Vercel"],
    liveUrl: "#",
    repoUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Work</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Here are some of the projects I've worked on.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between bg-secondary/20 pt-4">
              <Button asChild variant="outline">
                <Link href={project.repoUrl} target="_blank">Source Code</Link>
              </Button>
              <Button asChild>
                <Link href={project.liveUrl} target="_blank">
                  Live Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
