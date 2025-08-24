
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, query, orderBy } from "firebase/firestore";
import type { Testimonial } from "@/types";

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonialsCol = collection(db, "testimonials");
    const q = query(testimonialsCol, orderBy("author"));
    const testimonialSnapshot = await getDocs(q);
    const testimonials: Testimonial[] = [];
    testimonialSnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, ...doc.data() } as Testimonial);
    });
    return testimonials;
  } catch (error) {
    console.error("Error fetching testimonials: ", error);
    return [];
  }
}

export async function addTestimonial(testimonial: Omit<Testimonial, 'id'>) {
  try {
    const docRef = await addDoc(collection(db, "testimonials"), testimonial);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error adding testimonial: ", error);
    return { success: false, error: "Failed to add testimonial" };
  }
}
