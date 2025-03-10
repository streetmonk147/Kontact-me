"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Tag } from "lucide-react";
import { blogImages, pageHeaders } from "@/lib/placeholder-images";

// Blog posts data (placeholders)
const blogPosts = [
  {
    id: 1,
    title: "The Rise of African Documentary Filmmaking",
    excerpt: "Exploring the growth and global impact of documentary filmmaking across Africa, showcasing authentic stories and perspectives.",
    image: blogImages[0],
    category: "Film",
    date: "May 15, 2023",
    author: "Nala Mbeki",
    slug: "rise-african-documentary-filmmaking",
    featured: true,
  },
  {
    id: 2,
    title: "Publishing African Literature in the Digital Age",
    excerpt: "How digital platforms are transforming the publishing landscape for African authors and reaching global audiences.",
    image: blogImages[1],
    category: "Publishing",
    date: "April 22, 2023",
    author: "Kofi Addo",
    slug: "publishing-african-literature-digital-age",
    featured: true,
  },
  {
    id: 3,
    title: "Storytelling Techniques from West African Traditions",
    excerpt: "Lessons from traditional West African storytelling that can enhance modern narrative approaches in film and literature.",
    image: blogImages[2],
    category: "Storytelling",
    date: "March 10, 2023",
    author: "Amara Diop",
    slug: "storytelling-techniques-west-african-traditions",
    featured: true,
  },
  {
    id: 4,
    title: "Navigating International Film Festivals as an African Filmmaker",
    excerpt: "A guide to successfully submitting and promoting African films at major international film festivals.",
    image: blogImages[3],
    category: "Film",
    date: "February 28, 2023",
    author: "Ade Olusola",
    slug: "navigating-international-film-festivals",
    featured: false,
  },
  {
    id: 5,
    title: "The Impact of African Literature on Global Culture",
    excerpt: "How African literature has influenced and enriched global cultural narratives and perspectives over decades.",
    image: blogImages[4],
    category: "Publishing",
    date: "January 15, 2023",
    author: "Zara Nkosi",
    slug: "impact-african-literature-global-culture",
    featured: false,
  },
  {
    id: 6,
    title: "Building a Sustainable Film Industry in East Africa",
    excerpt: "Challenges and opportunities in developing infrastructure and talent for a thriving East African film ecosystem.",
    image: blogImages[5],
    category: "Film",
    date: "December 5, 2022",
    author: "Jamal Ibrahim",
    slug: "sustainable-film-industry-east-africa",
    featured: false,
  },
  {
    id: 7,
    title: "Voice and Authenticity in African Storytelling",
    excerpt: "The importance of preserving authentic voices and perspectives in contemporary African narratives.",
    image: blogImages[6],
    category: "Storytelling",
    date: "November 18, 2022",
    author: "Nala Mbeki",
    slug: "voice-authenticity-african-storytelling",
    featured: false,
  },
  {
    id: 8,
    title: "From Manuscript to Published Book: A Guide for African Authors",
    excerpt: "Practical steps for African writers to navigate the publishing process from draft to published work.",
    image: blogImages[7],
    category: "Publishing",
    date: "October 30, 2022",
    author: "Kofi Addo",
    slug: "manuscript-published-book-guide-african-authors",
    featured: false,
  },
  {
    id: 9,
    title: "The Role of Music in African Cinema",
    excerpt: "Exploring how traditional and contemporary African music enhances storytelling in film.",
    image: blogImages[8],
    category: "Film",
    date: "September 22, 2022",
    author: "Amara Diop",
    slug: "role-music-african-cinema",
    featured: false,
  },
];

// Categories
const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Film", count: blogPosts.filter(post => post.category === "Film").length },
  { name: "Publishing", count: blogPosts.filter(post => post.category === "Publishing").length },
  { name: "Storytelling", count: blogPosts.filter(post => post.category === "Storytelling").length },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    // Filter posts based on search query and category
    let filtered = blogPosts;
    
    // Filter by category
    if (activeCategory !== "All") {
      filtered = filtered.filter(post => post.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.author.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(filtered);
  }, [searchQuery, activeCategory]);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <Image
            src={pageHeaders.blog}
            alt="Kontact Me Africa Blog"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        </div>
        <div className="relative container h-full flex flex-col justify-center items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-4">
              Our Blog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Insights, stories, and perspectives from the world of African storytelling
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-background-alt">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            {/* Search */}
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted h-5 w-5" />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.name
                      ? "bg-primary text-white"
                      : "bg-white text-text-dark hover:bg-primary/10"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && searchQuery === "" && (
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold font-heading mb-10">
              Featured Articles
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(post => post.featured)
                .map(post => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="card h-full flex flex-col group"
                  >
                    <div className="relative h-60 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs py-1 px-2 rounded">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-text-muted mb-3">
                        <span className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-text-muted mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-primary font-medium flex items-center group-hover:text-primary-dark transition-colors"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className={`py-16 ${activeCategory === "All" && searchQuery === "" ? "bg-background-alt" : "bg-white"}`}>
        <div className="container">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold font-heading">
              {filteredPosts.length === 0 
                ? "No Articles Found" 
                : activeCategory === "All" && searchQuery === "" 
                  ? "Latest Articles" 
                  : `${filteredPosts.length} Article${filteredPosts.length !== 1 ? 's' : ''} Found`}
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

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-text-muted mb-6">
                No articles match your current search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition-colors"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
                  className="card h-full flex flex-col group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs py-1 px-2 rounded">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-text-muted mb-3">
                      <span className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-text-muted mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="text-primary font-medium flex items-center group-hover:text-primary-dark transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Tag className="h-12 w-12 mb-6 mx-auto text-accent-gold" />
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Stay updated with the latest articles, stories, and insights from the world of African storytelling.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none text-text-dark"
                required
              />
              <button
                type="submit"
                className="bg-accent-gold hover:bg-accent-gold/90 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 