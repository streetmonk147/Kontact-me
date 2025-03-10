"use client";

import React from "react";
import { motion } from "framer-motion";

export function MissionSection() {
  return (
    <section className="py-20 relative overflow-hidden bg-background-alt">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      
      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-accent text-secondary mb-8 leading-tight">
            Our mission is to showcase authentic African stories through film, literature, and talent development, connecting the continent's rich cultural heritage with global audiences.
          </h2>
          
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          
          <p className="text-text-muted text-lg">
            At Kontact Africa, we believe in the power of storytelling to transform perspectives, preserve heritage, and create opportunities for African creatives.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 