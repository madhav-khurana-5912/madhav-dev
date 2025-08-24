import { Header } from "@/components/sections/header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <About />
      </main>
      <Contact />
    </div>
  );
}
