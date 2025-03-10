"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10" />
      
      {/* Content Container */}
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
              Ready to Share Your African Story with the World?
            </h2>
            
            <p className="text-white/90 text-lg mb-8 max-w-lg">
              Join our community of storytellers, filmmakers, and creatives who are redefining the African narrative on the global stage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact" 
                className="bg-white text-primary hover:bg-accent-gold hover:text-white py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                href="/services" 
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center justify-center"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
          
          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {/* Stat 1 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold font-heading text-accent-gold mb-2">
                  50+
                </div>
                <p className="text-white/80">
                  Films & Documentaries Produced
                </p>
              </div>
              
              {/* Stat 2 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold font-heading text-accent-gold mb-2">
                  30+
                </div>
                <p className="text-white/80">
                  Books Published
                </p>
              </div>
              
              {/* Stat 3 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold font-heading text-accent-gold mb-2">
                  100+
                </div>
                <p className="text-white/80">
                  Talents Represented
                </p>
              </div>
              
              {/* Stat 4 */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-4xl md:text-5xl font-bold font-heading text-accent-gold mb-2">
                  25+
                </div>
                <p className="text-white/80">
                  African Countries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 