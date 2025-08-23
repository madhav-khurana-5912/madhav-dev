import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <footer id="contact" className="w-full bg-card py-12">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Get In Touch</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          I'm currently open to new opportunities. Feel free to reach out via email or connect with me on social media.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild variant="default" size="lg">
            <Link href="mailto:madhav.khurana@example.com">
              Email Me
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" aria-label="GitHub">
              <Github className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-7 w-7 text-muted-foreground transition-colors hover:text-primary" />
            </Link>
          </Button>
        </div>
        <div className="mt-12 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Madhav Khurana. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
