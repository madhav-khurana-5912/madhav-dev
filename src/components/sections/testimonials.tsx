"use client";

import React, { useEffect, useState } from "react";
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
import { getTestimonials } from "@/services/testimonials";
import type { Testimonial } from "@/types";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      setLoading(true);
      const fetchedTestimonials = await getTestimonials();
      setTestimonials(fetchedTestimonials);
      setLoading(false);
    }
    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Others Say</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Testimonials from colleagues and clients I've worked with.
        </p>
      </div>

      {loading ? (
         <div className="text-center mt-12">Loading testimonials...</div>
      ) : (
        <Carousel
          opts={{
            align: "start",
            loop: testimonials.length > 1,
          }}
          className="mx-auto mt-12 w-full max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id || index} className="md:basis-1/2">
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
          {testimonials.length > 1 && (
            <>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex"/>
            </>
          )}
        </Carousel>
      )}
    </section>
  );
}
