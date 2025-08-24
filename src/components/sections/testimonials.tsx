"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { addTestimonial, getTestimonials } from "@/services/testimonials";
import type { Testimonial } from "@/types";
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
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  quote: z.string().min(10, "Quote must be at least 10 characters.").max(500, "Quote cannot exceed 500 characters."),
  author: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name cannot exceed 50 characters."),
  title: z.string().min(2, "Title must be at least 2 characters.").max(50, "Title cannot exceed 50 characters."),
});

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quote: "",
      author: "",
      title: "",
    },
  });

  const fetchTestimonials = async () => {
    setLoading(true);
    const fetchedTestimonials = await getTestimonials();
    setTestimonials(fetchedTestimonials);
    setLoading(false);
  };

  useEffect(() => {
    fetchTestimonials();
    
    const handleTestimonialAdded = () => {
      fetchTestimonials();
    };

    window.addEventListener('testimonialAdded', handleTestimonialAdded);
    return () => {
      window.removeEventListener('testimonialAdded', handleTestimonialAdded);
    };
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const newTestimonial: Omit<Testimonial, "id"> = {
        ...values,
        avatar: `https://placehold.co/100x100.png`, // Placeholder
        avatarHint: `professional person`,
      };
      const result = await addTestimonial(newTestimonial);

      if (result.success) {
        toast({
          title: "Success!",
          description: "Your testimonial has been submitted.",
        });
        form.reset();
        window.dispatchEvent(new Event('testimonialAdded'));
      } else {
        throw new Error(result.error || "An unknown error occurred.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error instanceof Error ? error.message : "There was a problem with your request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="testimonials" className="py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Testimonials</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            What others say about my work. You can also share your experience below.
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
                            <AvatarFallback>{testimonial.author.substring(0, 2)}</AvatarFallback>
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
                <CarouselNext className="hidden sm:flex" />
              </>
            )}
          </Carousel>
        )}

        <Separator className="my-16 bg-border/20" />
        
        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="quote"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="He's a design-savvy developer who..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Title / Company</FormLabel>
                    <FormControl>
                      <Input placeholder="CEO, Acme Inc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Testimonial"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
