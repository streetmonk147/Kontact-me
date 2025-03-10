"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary-dark text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold font-heading">
                Kontact<span className="text-accent-gold">Africa</span>
              </span>
            </Link>
            <p className="text-white/80 max-w-xs">
              Telling authentic African stories through film, literature, and talent development.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-full"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-primary transition-colors p-2 rounded-full"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 font-heading after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Projects", href: "/projects" },
                { name: "Talent Showcase", href: "/talent" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-gold transition-colors inline-block transform hover:translate-x-1 duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 font-heading after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Film & Documentary Production", href: "/services/film-documentary" },
                { name: "Publishing", href: "/services/publishing" },
                { name: "Talent Management", href: "/services/talent" },
                { name: "Workshops & Training", href: "/services/workshops" },
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/70 hover:text-accent-gold transition-colors inline-block transform hover:translate-x-1 duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative pb-2 font-heading after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-primary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  123 Creative Hub, Victoria Island, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="tel:+2341234567890"
                  className="text-white/70 hover:text-accent-gold transition-colors"
                >
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@kontactafrica.com"
                  className="text-white/70 hover:text-accent-gold transition-colors"
                >
                  info@kontactafrica.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Kontact Africa. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 