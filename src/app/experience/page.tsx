import { Header } from "@/components/sections/header";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Experience />
      </main>
      <Contact />
    </div>
  );
}
