"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, ChevronRight } from "lucide-react";
import { talentImages, pageHeaders } from "@/lib/placeholder-images";

// Talent data (placeholders)
const talents = [
  {
    id: 1,
    name: "Chiwetel Ndongo",
    profession: "Actor",
    specialization: "Drama, Historical",
    image: talentImages[0],
    bio: "Award-winning actor with over 15 years of experience in film and theater. Known for powerful performances in historical dramas and contemporary African narratives.",
    featured: true,
    slug: "chiwetel-ndongo"
  },
  {
    id: 2,
    name: "Fatima Nkrumah",
    profession: "Director",
    specialization: "Documentary, Social Impact",
    image: talentImages[1],
    bio: "Visionary director whose documentary work has been featured at international film festivals. Specializes in social impact storytelling that highlights underrepresented African communities.",
    featured: true,
    slug: "fatima-nkrumah"
  },
  {
    id: 3,
    name: "Kwame Osei",
    profession: "Cinematographer",
    specialization: "Nature, Documentary",
    image: talentImages[2],
    bio: "Renowned cinematographer with a distinctive visual style that captures the breathtaking landscapes and wildlife of Africa. Has worked on award-winning nature documentaries.",
    featured: true,
    slug: "kwame-osei"
  },
  {
    id: 4,
    name: "Amina Diallo",
    profession: "Writer",
    specialization: "Fiction, Screenplays",
    image: talentImages[3],
    bio: "Acclaimed author and screenwriter whose work explores contemporary African urban life and diaspora experiences. Published three novels and written screenplays for feature films.",
    featured: true,
    slug: "amina-diallo"
  },
  {
    id: 5,
    name: "Tendai Mutasa",
    profession: "Producer",
    specialization: "Feature Films, International Co-productions",
    image: talentImages[4],
    bio: "Experienced producer with a track record of successful international co-productions. Specializes in bringing African stories to global audiences through strategic partnerships.",
    featured: false,
    slug: "tendai-mutasa"
  },
  {
    id: 6,
    name: "Nia Abebe",
    profession: "Actor",
    specialization: "Drama, Comedy",
    image: talentImages[5],
    bio: "Versatile actor known for seamlessly transitioning between dramatic and comedic roles. Has starred in several pan-African productions and international collaborations.",
    featured: false,
    slug: "nia-abebe"
  },
  {
    id: 7,
    name: "Omar Sy",
    profession: "Director",
    specialization: "Feature Films, Music Videos",
    image: talentImages[6],
    bio: "Innovative director with a background in music video production. Known for visually striking feature films that incorporate elements of African musical traditions.",
    featured: false,
    slug: "omar-sy"
  },
  {
    id: 8,
    name: "Zainab Jallow",
    profession: "Writer",
    specialization: "Non-fiction, Documentary",
    image: talentImages[7],
    bio: "Award-winning writer specializing in non-fiction and documentary narratives. Her work explores historical and contemporary social issues across Africa.",
    featured: false,
    slug: "zainab-jallow"
  },
  {
    id: 9,
    name: "David Oyelowo",
    profession: "Actor",
    specialization: "Drama, Biographical",
    image: talentImages[8],
    bio: "Critically acclaimed actor with international recognition for powerful performances in biographical and dramatic roles. Committed to authentic representation of African stories.",
    featured: false,
    slug: "david-oyelowo"
  },
  {
    id: 10,
    name: "Aisha Bakari",
    profession: "Cinematographer",
    specialization: "Urban, Documentary",
    image: talentImages[9],
    bio: "Innovative cinematographer known for capturing the energy and complexity of African urban environments. Her documentary work has been praised for its intimate, authentic perspective.",
    featured: false,
    slug: "aisha-bakari"
  },
  {
    id: 11,
    name: "Kofi Mensah",
    profession: "Producer",
    specialization: "Documentary, Educational",
    image: talentImages[10],
    bio: "Producer focused on educational documentaries that highlight African innovation and traditional knowledge systems. Has developed content for international broadcasters and educational institutions.",
    featured: false,
    slug: "kofi-mensah"
  },
  {
    id: 12,
    name: "Nadia Turay",
    profession: "Writer",
    specialization: "Children's Literature, Animation",
    image: talentImages[11],
    bio: "Celebrated children's author and animation writer creating stories that introduce young audiences to African folklore and contemporary African experiences.",
    featured: false,
    slug: "nadia-turay"
  },
];

// Profession categories for filtering
const professions = [
  { name: "All", value: "all" },
  { name: "Actors", value: "Actor" },
  { name: "Directors", value: "Director" },
  { name: "Writers", value: "Writer" },
  { name: "Cinematographers", value: "Cinematographer" },
  { name: "Producers", value: "Producer" },
];

export default function TalentPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Filter talents based on search query and profession
  const filteredTalents = talents.filter(talent => {
    // Filter by profession
    const matchesProfession = activeFilter === "all" || talent.profession === activeFilter;
    
    // Filter by search query
    const matchesSearch = searchQuery === "" || 
      talent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      talent.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesProfession && matchesSearch;
  });

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={pageHeaders.talent}
            alt="Our Talent"
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
              Our Talent
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Representing exceptional African creative professionals in film, literature, and storytelling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-background-alt">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search talent..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted h-5 w-5" />
              </div>
            </div>

            {/* Filter toggle for mobile */}
            <button 
              className="flex md:hidden items-center text-primary"
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter className="h-5 w-5 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
            
            {/* Desktop Filters */}
            <div className="hidden md:flex space-x-3">
              {professions.map(profession => (
                <button
                  key={profession.value}
                  onClick={() => setActiveFilter(profession.value)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === profession.value
                      ? "bg-primary text-white"
                      : "bg-white text-text-dark hover:bg-primary/10"
                  }`}
                >
                  {profession.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden flex flex-wrap gap-2 mt-4">
              {professions.map(profession => (
                <button
                  key={profession.value}
                  onClick={() => setActiveFilter(profession.value)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === profession.value
                      ? "bg-primary text-white"
                      : "bg-white text-text-dark hover:bg-primary/10"
                  }`}
                >
                  {profession.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Talent */}
      {activeFilter === "all" && searchQuery === "" && (
        <section className="py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold font-heading mb-16 text-center">
              Featured Talent
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {talents
                .filter(talent => talent.featured)
                .map((talent, index) => (
                  <motion.div
                    key={talent.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/talent/${talent.slug}`}>
                      <div className="relative h-96 overflow-hidden rounded-lg mb-4">
                        <Image
                          src={talent.image}
                          alt={talent.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
                        
                        <div className="absolute bottom-0 left-0 p-6 w-full">
                          <div className="bg-primary/80 text-white text-xs py-1 px-2 rounded inline-block mb-2">
                            {talent.profession}
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-accent-gold transition-colors">
                            {talent.name}
                          </h3>
                          <p className="text-white/80 text-sm">
                            {talent.specialization}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Talent */}
      <section className={`py-20 ${activeFilter === "all" && searchQuery === "" ? "bg-background-alt" : "bg-white"}`}>
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold font-heading">
              {filteredTalents.length === 0 
                ? "No Talent Found" 
                : activeFilter === "all" && searchQuery === "" 
                  ? "All Talent" 
                  : `${filteredTalents.length} Result${filteredTalents.length !== 1 ? 's' : ''}`}
            </h2>
            
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="text-primary font-medium"
              >
                Clear Search
              </button>
            )}
          </div>

          {filteredTalents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-text-muted mb-6">
                No talent matches your current search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors"
              >
                View All Talent
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTalents.map((talent, index) => (
                <motion.div
                  key={talent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index % 3 * 0.1 }}
                >
                  <Link 
                    href={`/talent/${talent.slug}`}
                    className="flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={talent.image}
                        alt={talent.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs py-1 px-2 rounded">
                        {talent.profession}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">
                        {talent.name}
                      </h3>
                      <p className="text-primary text-sm mb-4">
                        {talent.specialization}
                      </p>
                      <p className="text-text-muted text-sm mb-4 flex-grow">
                        {talent.bio}
                      </p>
                      <span className="text-primary flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                        View Profile
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Representation CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Looking for Representation?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              We&apos;re always seeking exceptional talent to join our roster. If you&apos;re a filmmaker, writer, actor, or other creative professional with a unique voice and perspective, we&apos;d love to hear from you.
            </p>
            <Link 
              href="/contact?inquiry=talent" 
              className="bg-white text-primary hover:bg-accent-gold hover:text-white py-3 px-8 rounded-md font-medium transition-colors inline-flex items-center"
            >
              Submit Your Portfolio
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 