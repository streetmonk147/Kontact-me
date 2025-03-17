"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  AlertCircle,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import { pageHeaders } from "@/lib/placeholder-images";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    service: "general",
  });

  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormStatus("success");
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        service: "general",
      });
    } catch {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px]">
        <div className="absolute inset-0">
          <Image
            src={pageHeaders.contact}
            alt="Contact Us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              We&apos;d love to hear from you. Let&apos;s connect and explore how we can bring your African story to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold font-heading mb-6">
                Send Us a Message
              </h2>
              <p className="text-text-muted mb-8">
                Whether you&apos;re interested in our services, want to become a client, or just have a question, we&apos;re here to help.
              </p>

              {formStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6 flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>Thank you for your message! We&apos;ll get back to you soon.</p>
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6 flex items-start">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                  <p>There was an error submitting your message. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      placeholder="+123 456 7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="film-production">Film & Documentary Production</option>
                      <option value="publishing">Publishing Services</option>
                      <option value="talent">Talent Management</option>
                      <option value="workshops">Workshops & Training</option>
                      <option value="partnership">Partnership Opportunities</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center disabled:opacity-70 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Submitting...</span>
                        <div className="h-4 w-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-background-alt p-8 rounded-lg">
                <h3 className="text-xl font-bold font-heading mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {/* Visit Us */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Visit Us</h4>
                      <p className="text-text-muted">
                        123 Creative Hub, Victoria Island<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  {/* Call Us */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Call Us</h4>
                      <p className="text-text-muted">
                        +234 123 456 7890<br />
                        +234 987 654 3210
                      </p>
                    </div>
                  </div>

                  {/* Email Us */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Email Us</h4>
                      <p className="text-text-muted">
                        info@kontactmeafrica.com<br />
                        support@kontactmeafrica.com
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="bg-primary/10 text-primary w-12 h-12 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Working Hours</h4>
                      <p className="text-text-muted">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h4 className="font-bold mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-white text-primary hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-white text-primary hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-white text-primary hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-white text-primary hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-background-alt">
        <div className="container">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">
            Find Us On The Map
          </h2>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            {/* This would be a real Google Maps or Mapbox integration */}
            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
              <p className="text-lg font-medium">
                Interactive map would be embedded here
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold font-heading mb-8 text-center">
            Our Regional Offices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Office 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background-alt p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Lagos, Nigeria</h3>
              <p className="text-text-muted mb-4">Headquarters</p>
              <p className="mb-4">
                123 Creative Hub, Victoria Island<br />
                Lagos, Nigeria
              </p>
              <p className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +234 123 456 7890
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                lagos@kontactmeafrica.com
              </p>
            </motion.div>

            {/* Office 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background-alt p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Nairobi, Kenya</h3>
              <p className="text-text-muted mb-4">East Africa Office</p>
              <p className="mb-4">
                456 Film Center, Karen<br />
                Nairobi, Kenya
              </p>
              <p className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +254 789 012 345
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                nairobi@kontactmeafrica.com
              </p>
            </motion.div>

            {/* Office 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background-alt p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-2">Johannesburg, South Africa</h3>
              <p className="text-text-muted mb-4">Southern Africa Office</p>
              <p className="mb-4">
                789 Media Park, Rosebank<br />
                Johannesburg, South Africa
              </p>
              <p className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                +27 123 456 789
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                joburg@kontactmeafrica.com
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
} 