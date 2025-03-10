"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { bookCover } from "@/lib/placeholder-images";

// Book data (placeholder)
const bookData = {
  title: "Echoes of the Savanna",
  author: "Nala Mbeki",
  coverImage: bookCover,
  description: "A powerful narrative that weaves together the stories of three generations of women across different regions of Africa, exploring themes of identity, heritage, and resilience in the face of historical and contemporary challenges.",
  themes: ["Cultural Heritage", "Family", "Identity", "Resilience"],
  price: "$24.99",
  buyLink: "/book/echoes-of-the-savanna",
};

export function FeaturedBookSection() {
  const bookRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(bookRef, { once: false, margin: "-100px" });
  const controls = useAnimation();

  // 3D book effect on mouse move
  useEffect(() => {
    const book = bookRef.current;
    if (!book) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = book.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      book.style.transform = `
        perspective(1000px)
        rotateY(${x * 10}deg)
        rotateX(${y * -10}deg)
        translateZ(20px)
      `;
    };

    const handleMouseLeave = () => {
      book.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0)
      `;
    };

    book.addEventListener("mousemove", handleMouseMove);
    book.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      book.removeEventListener("mousemove", handleMouseMove);
      book.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Animation when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-[url('/patterns/kente-pattern.svg')] opacity-[0.03]" 
        style={{ backgroundSize: "200px" }}
      />
      
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading text-secondary inline-block relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Discover the Stories Behind the Stories
            <span className="absolute bottom-0 left-1/4 right-1/4 h-1 bg-accent-gold"></span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div 
              ref={bookRef}
              className="relative transition-transform duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full max-w-[350px] shadow-2xl rounded-md overflow-hidden">
                <Image
                  src={bookData.coverImage}
                  alt={bookData.title}
                  width={350}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-4 right-0 bg-accent-gold text-secondary font-bold py-2 px-4 rounded-full transform -rotate-6 shadow-md">
                New Release
              </div>
            </div>
          </motion.div>
          
          {/* Book Details */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-accent text-secondary mb-2">
              {bookData.title}
            </h3>
            
            <p className="text-primary text-xl mb-6">
              By {bookData.author}
            </p>
            
            <p className="text-text-muted mb-6">
              {bookData.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {bookData.themes.map((theme, index) => (
                <span 
                  key={index}
                  className="bg-background py-1 px-3 rounded-full text-sm border border-secondary/20 text-secondary"
                >
                  {theme}
                </span>
              ))}
            </div>
            
            <p className="text-2xl font-heading font-bold text-secondary mb-6">
              {bookData.price}
            </p>
            
            <div className="flex gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="shadow-md"
              >
                Buy Now
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
              >
                Preview
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 