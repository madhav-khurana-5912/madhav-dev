import { Header } from "@/components/sections/header";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <Experience />
        </div>
      </main>
      <Contact />
    </div>
  );
}
