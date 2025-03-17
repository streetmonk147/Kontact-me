"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Film, BookOpen, Users, GraduationCap, ArrowRight } from "lucide-react";
import { serviceImages } from "@/lib/placeholder-images";

// Services data
const services = [
  {
    id: "film-production",
    title: "Film & Documentary Production",
    description: "We create compelling films and documentaries that showcase authentic African narratives to global audiences.",
    icon: <Film className="h-10 w-10" />,
    color: "bg-primary/10 text-primary",
    link: "/services/film-production",
    image: serviceImages[0],
  },
  {
    id: "publishing",
    title: "Publishing Services",
    description: "We help African authors and storytellers publish and distribute their work to reach broader audiences.",
    icon: <BookOpen className="h-10 w-10" />,
    color: "bg-accent-gold/10 text-accent-gold",
    link: "/services/publishing",
    image: serviceImages[1],
  },
  {
    id: "talent-management",
    title: "Talent Management",
    description: "We represent and promote African creative talent, connecting them with opportunities on the global stage.",
    icon: <Users className="h-10 w-10" />,
    color: "bg-accent-earth/10 text-accent-earth",
    link: "/services/talent",
    image: serviceImages[2],
  },
  {
    id: "workshops",
    title: "Workshops & Training",
    description: "We provide educational workshops and training programs to develop the next generation of African storytellers.",
    icon: <GraduationCap className="h-10 w-10" />,
    color: "bg-accent-green/10 text-accent-green",
    link: "/services/workshops",
    image: serviceImages[3],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading text-secondary mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive solutions for storytelling, talent development, and cultural promotion across Africa.
          </motion.p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`p-6 flex flex-col h-full`}>
                <div className={`text-${service.color} mb-6`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold font-heading text-secondary mb-3">
                  {service.title}
                </h3>
                
                <p className="text-text-muted mb-6 flex-grow">
                  {service.description}
                </p>
                
                <Link 
                  href={service.link}
                  className={`text-${service.color} font-medium flex items-center gap-2 group-hover:gap-3 transition-all`}
                >
                  Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
              
              <div className={`h-1 w-full bg-${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 