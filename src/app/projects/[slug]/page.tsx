"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  User, 
  Award, 
  Tag, 
  Play, 
  Share2, 
  ArrowLeft,
  ChevronRight
} from "lucide-react";

// Projects data (placeholders) - this would typically come from a database or API
const projects = [
  {
    id: 1,
    title: "The Heart of Africa",
    type: "Feature Film",
    category: "Drama",
    thumbnail: "/images/project-film-1.jpg", // Placeholder
    gallery: [
      "/images/project-film-1-gallery-1.jpg", // Placeholders
      "/images/project-film-1-gallery-2.jpg",
      "/images/project-film-1-gallery-3.jpg",
    ],
    year: 2023,
    duration: "118 min",
    director: "Ade Olusola",
    producer: "Nala Mbeki",
    cinematographer: "Jamal Ibrahim",
    cast: ["Chiwetel Ndongo", "Fatima Nkrumah", "Kofi Addo", "Zara Nkosi"],
    awards: ["Best Feature - African Film Festival", "Best Director - Pan-African Awards"],
    description: "An emotional journey through the life of a young musician as he navigates tradition and modernity in contemporary West Africa, discovering his cultural roots while pursuing his dreams.",
    longDescription: "Set against the vibrant backdrop of West African cities and villages, 'The Heart of Africa' follows Kwame, a talented young musician torn between his traditional upbringing and his dreams of international success. When his father falls ill, Kwame must return to his ancestral village, where he rediscovers the rich musical heritage he once rejected. Through encounters with local musicians and elders, he begins to blend traditional rhythms with his contemporary style, creating a unique sound that bridges generations. As he prepares for a career-defining performance, Kwame must reconcile his ambitions with his newfound appreciation for his cultural roots. The film explores themes of identity, heritage, and the evolving nature of African music in a globalized world.",
    trailer: "https://www.youtube.com/watch?v=placeholder",
    featured: true,
    slug: "heart-of-africa",
    relatedProjects: [2, 3, 5],
  },
  {
    id: 2,
    title: "Voices of the Savanna",
    type: "Documentary Series",
    category: "Nature",
    thumbnail: "/images/project-doc-1.jpg", // Placeholder
    gallery: [
      "/images/project-doc-1-gallery-1.jpg", // Placeholders
      "/images/project-doc-1-gallery-2.jpg",
      "/images/project-doc-1-gallery-3.jpg",
    ],
    year: 2022,
    duration: "6 episodes",
    director: "Zara Nkosi",
    producer: "Kofi Addo",
    cinematographer: "Chiwetel Ndongo",
    cast: [],
    awards: ["Environmental Documentary Award", "Best Cinematography"],
    description: "A breathtaking documentary series exploring wildlife conservation efforts across East Africa, showcasing the delicate balance between human development and preserving natural habitats.",
    longDescription: "Voices of the Savanna' is a six-part documentary series that takes viewers on an immersive journey through East Africa's most precious ecosystems. Each episode focuses on a different region and the unique conservation challenges it faces, from the Serengeti plains to the forests of Rwanda. The series highlights the dedicated conservationists, local communities, and innovative projects working to protect endangered species while promoting sustainable development. Through stunning cinematography and intimate portraits of both wildlife and people, the series reveals the complex interdependence of all life in these fragile environments. 'Voices of the Savanna' celebrates the resilience of nature and the human spirit while honestly addressing the urgent threats posed by climate change, poaching, and habitat loss.",
    trailer: "https://www.youtube.com/watch?v=placeholder",
    featured: true,
    slug: "voices-savanna",
    relatedProjects: [4, 6, 8],
  },
  {
    id: 3,
    title: "Urban Rhythms",
    type: "Feature Film",
    category: "Musical",
    thumbnail: "/images/project-film-2.jpg", // Placeholder
    gallery: [
      "/images/project-film-2-gallery-1.jpg", // Placeholders
      "/images/project-film-2-gallery-2.jpg",
      "/images/project-film-2-gallery-3.jpg",
    ],
    year: 2022,
    duration: "102 min",
    director: "Jamal Ibrahim",
    producer: "Ade Olusola",
    cinematographer: "Zara Nkosi",
    cast: ["Amara Diop", "Kofi Addo", "Nala Mbeki", "Chiwetel Ndongo"],
    awards: ["Best Soundtrack", "Audience Choice Award"],
    description: "A vibrant exploration of contemporary urban culture and music scenes in Lagos, Nairobi, and Accra, following three young artists as they collaborate across borders.",
    longDescription: "'Urban Rhythms' pulses with the energy of Africa's most dynamic cities as it follows three musicians from different backgrounds who come together to create a groundbreaking pan-African album. Femi, a traditional drummer from Lagos with jazz training; Aisha, a poet and vocalist from Nairobi with a political message; and Kwesi, a producer and beatmaker from Accra with international ambitions, must overcome cultural differences, personal conflicts, and industry obstacles to realize their shared vision. Shot on location in three of Africa's most vibrant metropolises, the film captures the exhilarating collision of traditional sounds with hip-hop, afrobeats, and electronic music that defines contemporary African urban culture. As the three artists collaborate, they discover that their music can transcend borders and speak to a new generation of Africans with a unified voice while honoring their distinct cultural heritages.",
    trailer: "https://www.youtube.com/watch?v=placeholder",
    featured: true,
    slug: "urban-rhythms",
    relatedProjects: [1, 7, 9],
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // Find the project with the matching slug
  const project = projects.find(p => p.slug === params.slug);
  
  // If project not found, return 404
  if (!project) {
    notFound();
  }
  
  // Find related projects
  const relatedProjects = project.relatedProjects
    ? projects.filter(p => project.relatedProjects?.includes(p.id))
    : [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        </div>
        <div className="relative container h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <span className="bg-primary text-white text-sm py-1 px-3 rounded-full mr-3">
                {project.type}
              </span>
              <span className="text-white/80">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-accent-gold" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-accent-gold" />
                <span>{project.duration}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2 text-accent-gold" />
                <span>Dir: {project.director}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {project.awards.map((award, index) => (
                <div key={index} className="flex items-center bg-black/40 text-white/90 text-sm py-1 px-3 rounded-full">
                  <Award className="h-4 w-4 mr-2 text-accent-gold" />
                  {award}
                </div>
              ))}
            </div>
            
            <Link 
              href={project.trailer} 
              target="_blank"
              className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Trailer
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold font-heading mb-6">About the Project</h2>
                <p className="text-lg mb-6">{project.description}</p>
                <p className="mb-8">{project.longDescription}</p>
                
                {/* Gallery */}
                <h3 className="text-xl font-bold font-heading mb-4">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                      <Image
                        src={image}
                        alt={`${project.title} - Gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Cast & Crew */}
                {project.cast && project.cast.length > 0 && (
                  <>
                    <h3 className="text-xl font-bold font-heading mb-4">Cast & Crew</h3>
                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                      <div>
                        <h4 className="font-bold mb-2">Director</h4>
                        <p className="mb-4">{project.director}</p>
                        
                        <h4 className="font-bold mb-2">Producer</h4>
                        <p className="mb-4">{project.producer}</p>
                        
                        <h4 className="font-bold mb-2">Cinematographer</h4>
                        <p>{project.cinematographer}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-bold mb-2">Cast</h4>
                        <ul className="space-y-1">
                          {project.cast.map((actor, index) => (
                            <li key={index}>{actor}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Share */}
                <div className="flex items-center space-x-4">
                  <span className="font-bold">Share:</span>
                  <div className="flex space-x-2">
                    <button className="bg-[#1877F2] text-white p-2 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="bg-[#1DA1F2] text-white p-2 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="bg-[#E4405F] text-white p-2 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background-alt p-6 rounded-lg sticky top-24"
              >
                <h3 className="text-xl font-bold font-heading mb-6">Project Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <h4 className="font-bold text-sm text-text-muted mb-1">Project Type</h4>
                    <p>{project.type}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-muted mb-1">Category</h4>
                    <p>{project.category}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-muted mb-1">Release Year</h4>
                    <p>{project.year}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-muted mb-1">Duration</h4>
                    <p>{project.duration}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-text-muted mb-1">Director</h4>
                    <p>{project.director}</p>
                  </div>
                </div>
                
                <Link 
                  href="/contact"
                  className="block w-full bg-primary hover:bg-primary-dark text-white text-center font-medium py-3 px-4 rounded-md transition-colors mb-4"
                >
                  Inquire About This Project
                </Link>
                
                <Link 
                  href="/projects"
                  className="flex items-center justify-center text-primary font-medium"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to All Projects
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-background-alt">
          <div className="container">
            <h2 className="text-2xl font-bold font-heading mb-8">Related Projects</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link 
                    href={`/projects/${relatedProject.slug}`}
                    className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-0 left-0 p-3">
                        <div className="bg-primary/90 text-white text-xs py-1 px-2 rounded">
                          {relatedProject.type}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-text-muted text-sm mb-4 line-clamp-2">
                        {relatedProject.description}
                      </p>
                      <span className="text-primary flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                        View Project
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Interested in Working With Us?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your story to life through film, documentary, or other creative mediums.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-primary hover:bg-accent-gold hover:text-white py-3 px-8 rounded-md font-medium transition-colors inline-flex items-center"
          >
            Get in Touch
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
} 