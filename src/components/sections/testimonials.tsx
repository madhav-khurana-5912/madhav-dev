import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with John has been an absolute pleasure. His technical expertise and commitment to quality are second to none. He delivered a product that exceeded all our expectations.",
    author: "Jane Smith",
    title: "CEO, TechCorp",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "woman headshot"
  },
  {
    quote: "John is a highly skilled developer with a keen eye for detail. His ability to translate complex designs into pixel-perfect, responsive code is truly impressive.",
    author: "Sam Wilson",
    title: "Lead Designer, Innovate Co.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "man headshot"
  },
  {
    quote: "The final product was delivered on time and was of exceptional quality. John's communication throughout the project was excellent, keeping us informed every step of the way.",
    author: "Emily White",
    title: "Product Manager, Solutions Inc.",
    avatar: "https://placehold.co/100x100.png",
    avatarHint: "professional woman"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">What Others Say</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Testimonials from colleagues and clients I've worked with.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="mx-auto mt-12 w-full max-w-5xl"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-4">
                <Card className="h-full bg-secondary/40">
                  <CardContent className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="mt-4 flex-grow text-lg italic text-foreground">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} data-ai-hint={testimonial.avatarHint} />
                        <AvatarFallback>{testimonial.author.substring(0,2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex"/>
      </Carousel>
    </section>
  );
}
