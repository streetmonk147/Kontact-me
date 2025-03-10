"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/lib/placeholder-images";

// Hero slide data
const slides = [
  {
    id: 1,
    image: heroImages[0],
    title: "Telling Africa's Stories",
    subtitle: "Award-winning films that capture the essence of Africa",
    cta: "Explore Our Films",
    ctaLink: "/projects",
  },
  {
    id: 2,
    image: heroImages[1],
    title: "Discover African Talent",
    subtitle: "Representing the best creative minds across the continent",
    cta: "Meet Our Talent",
    ctaLink: "/talent",
  },
  {
    id: 3,
    image: heroImages[2],
    title: "Authentic Documentaries",
    subtitle: "Real stories that showcase Africa's rich cultural heritage",
    cta: "Watch Documentaries",
    ctaLink: "/projects?category=documentary",
  },
  {
    id: 4,
    image: heroImages[3],
    title: "Learn & Grow",
    subtitle: "Workshops and training for the next generation of storytellers",
    cta: "Join Our Workshops",
    ctaLink: "/services/workshops",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, 6000); // Change slide every 6 seconds
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section 
      className="relative h-screen min-h-[600px] w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
              </div>
              
              {/* Content - Centered both horizontally and vertically */}
              <div className="relative h-full flex items-center justify-center">
                <div className="container flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="max-w-3xl text-center"
                  >
                    <h2 className="text-accent-gold font-accent text-xl md:text-2xl mb-4">
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button 
                        variant="gold" 
                        size="lg" 
                        className="font-medium"
                      >
                        {slide.cta}
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="text-white border-white hover:bg-white/20 hover:text-white"
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:px-10">
        <button
          onClick={goToPrevSlide}
          className="bg-black/30 hover:bg-primary text-white p-2 rounded-full transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={goToNextSlide}
          className="bg-black/30 hover:bg-primary text-white p-2 rounded-full transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-accent-gold w-10"
                : "bg-white/50 hover:bg-white"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 