import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="w-full">
      <div className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 md:px-6">
        <div className="w-full max-w-2xl rounded-lg border bg-black p-8 shadow-lg">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Madhav Khurana
                </h1>
                <p className="text-md text-foreground/80">
                  Delhi, India
                </p>
              </div>
              <div className="flex items-center gap-4">
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
