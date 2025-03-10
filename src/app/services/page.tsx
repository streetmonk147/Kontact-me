"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { pageHeaders, serviceImages } from "@/lib/placeholder-images";

// Define services data
const services = [
  {
    id: "film-production",
    title: "Film & Documentary Production",
    description: "We create compelling films and documentaries that showcase authentic African narratives to global audiences.",
    image: serviceImages[0],
    features: [
      "Feature Film Production",
      "Documentary Production",
      "Short Film Creation",
      "Post-Production Services",
      "Distribution & Festival Strategy",
    ],
    process: [
      { title: "Concept Development", description: "We work with you to develop your story concept and create a compelling narrative." },
      { title: "Pre-Production", description: "Our team handles all aspects of pre-production, from location scouting to talent selection." },
      { title: "Production", description: "State-of-the-art equipment and experienced crew bring your vision to life with the highest quality." },
      { title: "Post-Production", description: "Expert editing, color grading, sound design, and visual effects to perfect your story." },
      { title: "Distribution", description: "Strategic distribution to ensure your film reaches the right audiences across global platforms." },
    ],
  },
  {
    id: "publishing",
    title: "Publishing Services",
    description: "We help African authors and storytellers publish and distribute their work to reach broader audiences.",
    image: serviceImages[1],
    features: [
      "Manuscript Development",
      "Book Publishing",
      "Digital Distribution",
      "Marketing & Promotion",
      "Translation Services",
    ],
    process: [
      { title: "Manuscript Review", description: "Our editorial team evaluates your manuscript and provides constructive feedback." },
      { title: "Editing & Design", description: "Professional editing, proofreading, and design to ensure your book meets industry standards." },
      { title: "Production", description: "High-quality printing and e-book conversion for multiple platforms and formats." },
      { title: "Distribution", description: "We handle distribution to major retailers, both physical and digital, across global markets." },
      { title: "Marketing Support", description: "Strategic promotional campaigns to increase visibility and connect with your target readers." },
    ],
  },
  {
    id: "talent",
    title: "Talent Management",
    description: "We represent and promote African creative talent, connecting them with opportunities on the global stage.",
    image: serviceImages[2],
    features: [
      "Talent Representation",
      "Career Development",
      "Contract Negotiation",
      "Brand Partnerships",
      "Media Training",
    ],
    process: [
      { title: "Talent Assessment", description: "We evaluate your work, skills, and potential to determine the best representation strategy." },
      { title: "Career Strategy", description: "Personalized planning to advance your career goals and develop your unique creative voice." },
      { title: "Opportunity Creation", description: "Active sourcing of projects, partnerships, and platforms that align with your vision." },
      { title: "Business Support", description: "Handling negotiations, contracts, and business aspects so you can focus on your craft." },
      { title: "Growth & Development", description: "Continuous coaching and resources to help you evolve as a creative professional." },
    ],
  },
  {
    id: "workshops",
    title: "Workshops & Training",
    description: "We provide educational workshops and training programs to develop the next generation of African storytellers.",
    image: serviceImages[3],
    features: [
      "Storytelling Masterclasses",
      "Technical Training",
      "Industry Insights",
      "Mentorship Programs",
      "Professional Networking",
    ],
    process: [
      { title: "Needs Assessment", description: "We identify your learning goals and areas for development to customize the training approach." },
      { title: "Curriculum Design", description: "Expert instructors develop a comprehensive curriculum tailored to your specific needs." },
      { title: "Hands-on Training", description: "Interactive sessions that combine theory with practical application and real-world scenarios." },
      { title: "Feedback & Evaluation", description: "Constructive assessment of your work with actionable insights for improvement." },
      { title: "Ongoing Support", description: "Resources and community access to continue your learning journey beyond the workshop." },
    ],
  },
];

// FAQ data
const faqs = [
  {
    question: "How do I get started with your film production services?",
    answer: "Contact us through our website to schedule an initial consultation. We'll discuss your project vision, budget, timeline, and objectives before creating a customized proposal that fits your needs."
  },
  {
    question: "What types of books do you publish?",
    answer: "We specialize in publishing works that showcase authentic African narratives across genres including fiction, non-fiction, poetry, history, and cultural studies. We're particularly interested in stories that offer unique perspectives on African experiences."
  },
  {
    question: "Who can apply for your talent management services?",
    answer: "We represent creative professionals including filmmakers, writers, actors, photographers, and other storytellers from across Africa. We look for talent with unique voices, dedication to their craft, and a commitment to sharing African narratives."
  },
  {
    question: "Do you offer virtual workshops or only in-person training?",
    answer: "We offer both in-person and virtual workshops to accommodate different needs and locations. Our virtual programs maintain the same quality of instruction and interactive elements as our in-person training."
  },
  {
    question: "What areas of Africa do you currently operate in?",
    answer: "While our headquarters are in [Location], we work with clients and talent from across the African continent. Our services are available to creators from all African countries, and we're continually expanding our regional presence."
  },
  {
    question: "How much do your services cost?",
    answer: "Our pricing varies based on the specific service, project scope, and requirements. We offer customized quotes after an initial consultation to ensure we provide solutions that fit your budget and needs. Contact us for a personalized discussion."
  },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("film-production");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={pageHeaders.services}
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Comprehensive solutions to bring African stories to the global stage
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Services Tabs */}
            <div className="md:w-1/4 lg:w-1/5">
              <div className="sticky top-24 space-y-1">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setActiveTab(service.id)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors flex items-center ${
                      activeTab === service.id
                        ? "bg-primary text-white"
                        : "hover:bg-background-alt"
                    }`}
                  >
                    <span className="block truncate">{service.title}</span>
                    {activeTab === service.id && (
                      <ArrowRight className="ml-auto h-4 w-4" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Content */}
            <div className="md:w-3/4 lg:w-4/5">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={activeTab === service.id ? "block" : "hidden"}
                >
                  <div className="grid lg:grid-cols-2 gap-10">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-3xl font-bold font-heading mb-4">{service.title}</h2>
                      <p className="text-lg mb-6">{service.description}</p>

                      <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="text-primary h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Link 
                        href={`/services/${service.id}`}
                        className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-md transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <h3 className="text-xl font-semibold mb-4">Our Process</h3>
                      <div className="space-y-4">
                        {service.process.map((step, index) => (
                          <div key={index} className="flex">
                            <div className="flex-shrink-0 mr-4">
                              <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                                {index + 1}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-bold">{step.title}</h4>
                              <p className="text-text-muted">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background-alt">
        <div className="container">
          <h2 className="section-title text-center mb-16">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-1.jpg" // Placeholder
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Kwame Onyango</h4>
                  <p className="text-primary text-sm">Filmmaker</p>
                </div>
              </div>
              <p className="italic">
                "Working with Kontact Me Africa on my documentary was transformative. Their team's dedication to authentic storytelling and technical expertise elevated my project beyond my expectations."
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-2.jpg" // Placeholder
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Fatima Nkrumah</h4>
                  <p className="text-primary text-sm">Author</p>
                </div>
              </div>
              <p className="italic">
                "Their publishing team understood my vision and helped me share my story with readers across the world. The guidance I received throughout the process was invaluable."
              </p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src="/images/testimonial-3.jpg" // Placeholder
                    alt="Client"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Chiwetel Ndongo</h4>
                  <p className="text-primary text-sm">Actor</p>
                </div>
              </div>
              <p className="italic">
                "Since joining Kontact Me Africa's talent roster, I've had opportunities I never thought possible. Their management approach is personalized and focused on long-term career growth."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="section-title text-center mb-4">Frequently Asked Questions</h2>
          <p className="section-subtitle text-center mx-auto mb-16">
            Find answers to common questions about our services
          </p>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-4 flex justify-between items-center bg-background-alt hover:bg-background-alt/80 rounded-lg transition-colors"
                >
                  <span className="font-bold">{faq.question}</span>
                  <ChevronDown
                    className={`transition-transform h-5 w-5 ${
                      activeFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 bg-background-alt/50">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Ready to Bring Your African Story to Life?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you share your unique narrative with the world.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-primary hover:bg-accent-gold hover:text-white py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
} 