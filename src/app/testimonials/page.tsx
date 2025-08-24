import { Header } from "@/components/sections/header";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Testimonials />
      </main>
      <Contact />
    </div>
  );
}
