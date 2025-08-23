import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="w-full border-b">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid min-h-[70vh] items-center gap-8 py-12 md:grid-cols-1 md:gap-16 md:py-20">
          <div className="flex flex-col items-start space-y-4 text-left">
            <div className="flex items-center gap-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Madhav Khurana
              </h1>
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
              </div>
            </div>
            <p className="text-xl text-foreground">
              Software Engineer & Web Developer
            </p>
            <p className="max-w-lg text-foreground/80">
              I specialize in crafting beautiful, functional, and performant web experiences, turning complex problems into elegant solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
