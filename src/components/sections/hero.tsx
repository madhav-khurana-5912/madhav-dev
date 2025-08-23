import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, FileText } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export function Hero() {
  return (
    <section id="hero" className="w-full border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid min-h-[70vh] items-center gap-8 py-12 md:grid-cols-1 md:gap-16 md:py-20">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Card className="rounded-xl border-2 border-primary/20 bg-card p-6 shadow-lg backdrop-blur-sm">
              <CardContent className="flex flex-col gap-4 p-0">
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Hi, I'm Madhav Khurana
                  </h1>
                  <p className="text-xl text-foreground">
                    Software Engineer & Web Developer
                  </p>
                </div>
                <p className="mx-auto max-w-lg text-foreground/80">
                  I specialize in crafting beautiful, functional, and performant web experiences, turning complex problems into elegant solutions.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                  <Button asChild size="lg">
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://github.com" target="_blank" aria-label="GitHub">
                        <Github className="h-6 w-6" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="/resume.pdf" target="_blank" aria-label="Resume">
                        <FileText className="h-6 w-6" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
