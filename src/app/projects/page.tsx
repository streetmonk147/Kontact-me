"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Award, Calendar, ChevronRight, Filter } from "lucide-react";
import { projectImages, pageHeaders } from "@/lib/placeholder-images";

// Projects data (placeholders)
const projects = [
  {
    id: 1,
    title: "The Heart of Africa",
    type: "Feature Film",
    category: "Drama",
    thumbnail: projectImages.film[0],
    year: 2023,
    duration: "118 min",
    director: "Ade Olusola",
    awards: ["Best Feature - African Film Festival", "Best Director - Pan-African Awards"],
    description: "An emotional journey through the life of a young musician as he navigates tradition and modernity in contemporary West Africa, discovering his cultural roots while pursuing his dreams.",
    featured: true,
    slug: "heart-of-africa"
  },
  {
    id: 2,
    title: "Voices of the Savanna",
    type: "Documentary Series",
    category: "Nature",
    thumbnail: projectImages.documentary[0],
    year: 2022,
    duration: "6 episodes",
    director: "Zara Nkosi",
    awards: ["Environmental Documentary Award", "Best Cinematography"],
    description: "A breathtaking documentary series exploring wildlife conservation efforts across East Africa, showcasing the delicate balance between human development and preserving natural habitats.",
    featured: true,
    slug: "voices-savanna"
  },
  {
    id: 3,
    title: "Urban Rhythms",
    type: "Feature Film",
    category: "Musical",
    thumbnail: projectImages.film[1],
    year: 2022,
    duration: "102 min",
    director: "Jamal Ibrahim",
    awards: ["Best Soundtrack", "Audience Choice Award"],
    description: "A vibrant exploration of contemporary urban culture and music scenes in Lagos, Nairobi, and Accra, following three young artists as they collaborate across borders.",
    featured: true,
    slug: "urban-rhythms"
  },
  {
    id: 4,
    title: "Sahel Stories",
    type: "Documentary",
    category: "Social",
    thumbnail: projectImages.documentary[1],
    year: 2021,
    duration: "85 min",
    director: "Amara Diop",
    awards: ["Human Rights Award", "Special Jury Mention"],
    description: "An intimate documentary chronicling the resilience of communities living in the Sahel region, confronting climate change, political instability, and preserving cultural heritage.",
    featured: false,
    slug: "sahel-stories"
  },
  {
    id: 5,
    title: "Ancestral Echoes",
    type: "Feature Film",
    category: "Historical",
    thumbnail: projectImages.film[2],
    year: 2021,
    duration: "135 min",
    director: "Kofi Addo",
    awards: ["Best Historical Film", "Best Costume Design"],
    description: "A sweeping historical drama tracing the legacy of ancient African kingdoms through the eyes of a modern archaeologist discovering her own connection to a royal bloodline.",
    featured: false,
    slug: "ancestral-echoes"
  },
  {
    id: 6,
    title: "Tomorrow's Harvest",
    type: "Documentary",
    category: "Agricultural",
    thumbnail: projectImages.documentary[2],
    year: 2020,
    duration: "75 min",
    director: "Nala Mbeki",
    awards: ["Sustainability Award", "Best Science Documentary"],
    description: "An insightful exploration of sustainable agriculture innovations across Africa, highlighting indigenous knowledge systems and modern technologies working in harmony.",
    featured: false,
    slug: "tomorrows-harvest"
  },
  {
    id: 7,
    title: "Crossroads",
    type: "Short Film",
    category: "Drama",
    thumbnail: projectImages.shortFilm[0],
    year: 2020,
    duration: "24 min",
    director: "Chiwetel Ndongo",
    awards: ["Best Short Film", "New Talent Spotlight"],
    description: "A powerful short film about a life-changing encounter between two strangers at a rural crossroads, exploring themes of fate, choice, and human connection.",
    featured: false,
    slug: "crossroads"
  },
  {
    id: 8,
    title: "Digital Griots",
    type: "Documentary",
    category: "Technology",
    thumbnail: projectImages.documentary[0],
    year: 2019,
    duration: "68 min",
    director: "Ade Olusola",
    awards: ["Innovation Award", "Best Technology Documentary"],
    description: "An exploration of how African storytellers are using digital technology to preserve oral traditions and create new forms of narrative in the digital age.",
    featured: false,
    slug: "digital-griots"
  },
  {
    id: 9,
    title: "River's Journey",
    type: "Feature Film",
    category: "Adventure",
    thumbnail: projectImages.film[0],
    year: 2019,
    duration: "110 min",
    director: "Zara Nkosi",
    awards: ["Best Cinematography", "Adventure Film Prize"],
    description: "An epic adventure following a young explorer's journey down the length of the mighty Congo River, encountering diverse communities and ecosystems along the way.",
    featured: false,
    slug: "rivers-journey"
  },
];

// Project categories for filtering
const projectTypes = [
  { name: "All Types", value: "all" },
  { name: "Feature Films", value: "Feature Film" },
  { name: "Documentaries", value: "Documentary" },
  { name: "Short Films", value: "Short Film" },
  { name: "Series", value: "Documentary Series" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter projects based on selected type
  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.type === activeFilter);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={pageHeaders.projects}
            alt="Our Projects"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-4">
              Our Projects
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We&apos;re proud to showcase our diverse portfolio of projects that celebrate African creativity and storytelling.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 md:gap-10">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/projects/${project.slug}`}>
                    <div className="relative h-[400px] overflow-hidden rounded-lg">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center">
                          <Play className="h-8 w-8 fill-current" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <div className="flex items-center mb-2">
                          <span className="text-white/80 text-sm mr-3">{project.type}</span>
                          <span className="bg-primary text-white text-xs py-1 px-2 rounded">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-gold transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-white/80 text-sm space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {project.year}
                          </span>
                          <span>{project.duration}</span>
                        </div>
                        
                        {/* Awards badges */}
                        {project.awards && project.awards.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.awards.slice(0, 2).map((award, i) => (
                              <div key={i} className="flex items-center bg-black/40 text-white/90 text-xs py-1 px-2 rounded-full">
                                <Award className="h-3 w-3 mr-1 text-accent-gold" />
                                {award}
                              </div>
                            ))}
                            {project.awards.length > 2 && (
                              <div className="bg-black/40 text-white/90 text-xs py-1 px-2 rounded-full">
                                +{project.awards.length - 2} more
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 bg-background-alt">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-3xl font-bold font-heading">
              All Projects
            </h2>
            
            {/* Filter toggle for mobile */}
            <button 
              className="flex md:hidden items-center mt-4 text-primary"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-3">
              {projectTypes.map(type => (
                <button
                  key={type.value}
                  onClick={() => setActiveFilter(type.value)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === type.value
                      ? "bg-primary text-white"
                      : "bg-white text-text-dark hover:bg-primary/10"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 mb-8">
              {projectTypes.map(type => (
                <button
                  key={type.value}
                  onClick={() => setActiveFilter(type.value)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === type.value
                      ? "bg-primary text-white"
                      : "bg-white text-text-dark hover:bg-primary/10"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index % 3 * 0.1 }}
              >
                <Link 
                  href={`/projects/${project.slug}`}
                  className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 p-3 flex gap-2">
                      <div className="bg-primary/90 text-white text-xs py-1 px-2 rounded">
                        {project.type}
                      </div>
                      <div className="bg-black/70 text-white text-xs py-1 px-2 rounded">
                        {project.year}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-muted">
                        Dir: {project.director}
                      </span>
                      <span className="text-primary flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Details
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for new stories to tell and creative collaborations.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-primary hover:bg-accent-gold hover:text-white py-3 px-8 rounded-md font-medium transition-colors inline-flex items-center"
          >
            Contact Us
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
} 