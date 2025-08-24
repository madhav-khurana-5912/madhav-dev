import { Header } from "@/components/sections/header";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Projects />
      </main>
      <Contact />
    </div>
  );
}
