"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectImages } from "@/lib/placeholder-images";

// Project data (placeholder)
const projects = [
  {
    id: 1,
    title: "The Heart of Africa",
    category: "Film",
    description: "An award-winning feature film exploring the rich cultural heritage of West Africa.",
    image: projectImages.film[0], 
    href: "/projects/heart-of-africa",
  },
  {
    id: 2,
    title: "Voices of the Savanna",
    category: "Documentary",
    description: "A documentary series showcasing wildlife conservation efforts across East Africa.",
    image: projectImages.documentary[0],
    href: "/projects/voices-savanna",
  },
  {
    id: 3,
    title: "Urban Rhythms",
    category: "Film",
    description: "A vibrant exploration of contemporary urban culture in Lagos, Nairobi, and Accra.",
    image: projectImages.film[1],
    href: "/projects/urban-rhythms",
  },
  {
    id: 4,
    title: "Sahel Stories",
    category: "Documentary",
    description: "Documenting the resilience of communities living in the Sahel region.",
    image: projectImages.documentary[1],
    href: "/projects/sahel-stories",
  },
  {
    id: 5,
    title: "Ancestral Echoes",
    category: "Film",
    description: "A historical drama tracing the legacy of ancient African kingdoms.",
    image: projectImages.film[2],
    href: "/projects/ancestral-echoes",
  },
  {
    id: 6,
    title: "Tomorrow's Harvest",
    category: "Documentary",
    description: "Exploring sustainable agriculture innovations across the continent.",
    image: projectImages.documentary[2],
    href: "/projects/tomorrows-harvest",
  },
];

export function ProjectsShowcase() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-secondary text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">
              Recent Projects
            </h2>
            <p className="text-white/70 max-w-xl">
              Explore our latest films, documentaries, and creative works showcasing authentic African stories.
            </p>
          </motion.div>
          
          <motion.div
            className="mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button variant="gold" asChild>
              <Link href="/projects">
                View All Projects
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={scrollLeft}
              className="bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={scrollRight}
              className="bg-white/10 hover:bg-primary text-white p-3 rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          
          {/* Projects Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-x-auto hide-scrollbar"
            ref={scrollContainerRef}
          >
            <div className="flex gap-6 py-4 px-1 min-w-max">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={project.href}
                  className="flex-shrink-0 w-[280px] md:w-[350px] bg-white/5 rounded-lg overflow-hidden group hover:bg-white/10 transition-all duration-300"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs py-1 px-2 rounded">
                      {project.category}
                    </span>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-accent-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {project.description}
                    </p>
                    <span className="text-accent-gold text-sm font-medium flex items-center gap-2">
                      View Project
                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8 md:hidden">
            <button
              onClick={scrollLeft}
              className="bg-white/10 hover:bg-primary text-white p-2 rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={scrollRight}
              className="bg-white/10 hover:bg-primary text-white p-2 rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add a CSS class to hide scrollbars but keep functionality
const styles = `
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`; 