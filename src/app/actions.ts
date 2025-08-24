
'use server';

import { revalidatePath } from 'next/cache';
import { addTestimonial as addTestimonialToDb } from '@/services/testimonials';
import type { Testimonial } from '@/types';

export async function addTestimonial(testimonial: Omit<Testimonial, 'id'>) {
  const result = await addTestimonialToDb(testimonial);
  if (result.success) {
    revalidatePath('/testimonials');
  }
  return result;
}
