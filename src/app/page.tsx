import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="container mx-auto px-4 md:px-6">
          <Skills />
          <Separator className="my-16 bg-border/20" />
          <Experience />
          <Separator className="my-16 bg-border/20" />
          <Projects />
          <Separator className="my-16 bg-border/20" />
          <Testimonials />
        </div>
      </main>
      <Contact />
    </div>
  );
}