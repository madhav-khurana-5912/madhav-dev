import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full py-12 md:py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none font-headline">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl">
                Madhav Khurana
              </p>
            </div>
            <div className="flex flex-col gap-4 text-muted-foreground text-lg">
              <p>
                I am a passionate and driven Software Engineer based in Delhi, India, with a specialization in crafting beautiful, functional, and high-performance web experiences. My journey in technology has been fueled by a desire to turn complex problems into elegant, user-centric solutions.
              </p>
              <p>
                From architecting robust back-end systems to building intuitive and responsive user interfaces, I thrive on the challenges that come with creating exceptional digital products. I am constantly exploring new technologies and methodologies to refine my skills and stay at the forefront of web development.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying a good cup of coffee.
              </p>
            </div>
             <div className="flex items-center gap-4 pt-4">
                <Button asChild>
                    <Link href="/#contact">
                        Get In Touch
                    </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://github.com/madhahubby" target="_blank" aria-label="GitHub">
                    <Github className="h-6 w-6" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.linkedin.com/in/madhav-khurana-site" target="_blank" aria-label="LinkedIn">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </Button>
              </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
                src="/profile.jpg"
                width={500}
                height={500}
                alt="About Me"
                className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
