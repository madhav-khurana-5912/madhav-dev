import { Header } from "@/components/sections/header";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function SkillsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-6">
          <Skills />
        </div>
      </main>
      <Contact />
    </div>
  );
}
