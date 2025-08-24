"use client";

import { useState } from "react";
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
import { addTestimonial } from "@/services/testimonials";
import { Testimonial } from "@/types";

const formSchema = z.object({
  quote: z.string().min(10, "Quote must be at least 10 characters.").max(500, "Quote cannot exceed 500 characters."),
  author: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name cannot exceed 50 characters."),
  title: z.string().min(2, "Title must be at least 2 characters.").max(50, "Title cannot exceed 50 characters."),
});

export function AddTestimonialForm() {
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
        // Optionally, trigger a refresh of the testimonials list
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
    <section id="add-testimonial" className="py-12 md:py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Leave a Testimonial</h2>
                <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                    Share your experience of working with me.
                </p>
            </div>
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
