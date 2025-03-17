"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Navigation links with dropdown menus
const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
    submenu: [
      { name: "Our Story", href: "/about#story" },
      { name: "Our Team", href: "/about#team" },
      { name: "Mission & Vision", href: "/about#mission" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "Film Production", href: "/services/film-production" },
      { name: "Publishing", href: "/services/publishing" },
      { name: "Talent Management", href: "/services/talent" },
      { name: "Workshops", href: "/services/workshops" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        {
          "bg-white/95 backdrop-blur-sm shadow-md py-2": scrolled,
          "bg-transparent py-4": !scrolled,
        }
      )}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-40">
            {/* Replace with your actual logo */}
            <div className="font-heading font-bold text-xl text-primary">
              KONTACT ME AFRICA
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <div className="flex items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-text-dark font-medium rounded-md hover:text-primary transition-colors",
                    {
                      "font-bold text-primary": activeSubmenu === link.name,
                    }
                  )}
                  onClick={() => {
                    if (link.submenu) {
                      toggleSubmenu(link.name);
                    } else {
                      setActiveSubmenu(null);
                    }
                  }}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown
                      className={cn("ml-1 h-4 w-4 inline transition-transform", {
                        "rotate-180": activeSubmenu === link.name,
                      })}
                    />
                  )}
                </Link>
              </div>

              {/* Dropdown */}
              {link.submenu && (
                <AnimatePresence>
                  {activeSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg overflow-hidden z-50"
                    >
                      <div className="py-1">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-text-dark hover:bg-background-alt hover:text-primary"
                            onClick={() => setActiveSubmenu(null)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="btn btn-primary"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-text-dark focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white"
          >
            <div className="container py-4">
              <nav className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className="py-2 text-text-dark font-medium hover:text-primary w-full"
                        onClick={() => {
                          if (!link.submenu) {
                            setIsOpen(false);
                          }
                        }}
                      >
                        {link.name}
                      </Link>
                      {link.submenu && (
                        <button
                          onClick={() => toggleSubmenu(link.name)}
                          className="p-1"
                        >
                          <ChevronDown
                            className={cn("h-5 w-5 transition-transform", {
                              "rotate-180": activeSubmenu === link.name,
                            })}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mobile Dropdown */}
                    {link.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-4 overflow-hidden"
                          >
                            {link.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block py-2 text-sm text-text-dark hover:text-primary"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                    
                    <div className="border-b border-gray-100 my-1"></div>
                  </div>
                ))}
                
                <Link
                  href="/contact"
                  className="btn btn-primary mt-4 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get In Touch
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 