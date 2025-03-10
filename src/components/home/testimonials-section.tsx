"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonialImages } from "@/lib/placeholder-images";

// Testimonial data (placeholder)
const testimonials = [
  {
    id: 1,
    quote: "Kontact Me Africa helped bring my story to life with sensitivity and authenticity. Their team understood the cultural nuances and created a documentary that truly resonated with audiences worldwide.",
    name: "Amara Okafor",
    role: "Independent Filmmaker",
    image: testimonialImages[0],
    rating: 5,
  },
  {
    id: 2,
    quote: "Working with Kontact Me Africa on our book publication was a seamless experience. Their dedication to showcasing authentic African narratives aligned perfectly with our vision.",
    name: "Dr. Emmanuel Mensah",
    role: "Author & Historian",
    image: testimonialImages[1],
    rating: 5,
  },
  {
    id: 3,
    quote: "The workshops provided by Kontact Me Africa transformed my approach to storytelling. Their guidance has been instrumental in my growth as a creative professional in the African film industry.",
    name: "Chidinma Adebayo",
    role: "Emerging Director",
    image: testimonialImages[2],
    rating: 4,
  },
  {
    id: 4,
    quote: "As a talent represented by Kontact Me Africa, I've had unprecedented opportunities to showcase my work internationally. Their network and expertise in the industry are unmatched.",
    name: "Kofi Ababio",
    role: "Documentary Photographer",
    image: testimonialImages[3],
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-advance testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 5000);
    
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, autoplay]);

  const goToNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToTestimonial = (index: number) => {
    setCurrent(index);
  };

  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <section className="py-20 bg-background-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle mx-auto">
            Hear from the creatives and organizations we've worked with across Africa
          </p>
        </motion.div>

        <div 
          className="max-w-4xl mx-auto relative" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <div className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={goToPrev}
              className="bg-white hover:bg-primary hover:text-white text-text-dark rounded-full p-2 shadow-md transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={goToNext}
              className="bg-white hover:bg-primary hover:text-white text-text-dark rounded-full p-2 shadow-md transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 relative">
            <Quote className="text-primary/10 absolute top-6 left-6 h-20 w-20" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-6">
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary/10 mx-auto">
                    <Image
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <blockquote className="text-lg md:text-xl text-text-dark mb-6 italic relative z-10">
                  "{testimonials[current].quote}"
                </blockquote>
                
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[current].rating
                          ? "text-accent-gold"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div>
                  <h4 className="font-heading font-bold text-lg text-primary">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-text-muted">
                    {testimonials[current].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current
                    ? "bg-primary"
                    : "bg-gray-300 hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 