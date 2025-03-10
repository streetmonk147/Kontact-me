import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  pageHeaders, 
  teamMembers, 
  projectImages, 
  blogImages, 
  talentImages, 
  serviceImages 
} from "@/lib/placeholder-images";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={pageHeaders.about}
            alt="About Kontact Me Africa"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative container h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-heading mb-4">
            Our Story
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Connecting Africa&apos;s stories with the world, one narrative at a time
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-white" id="mission">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Mission & Vision</h2>
              <p className="mb-6 text-lg">
                At Kontact Me Africa, we believe in the transformative power of storytelling. Our mission is to amplify authentic African narratives and connect them with global audiences through innovative production, publishing, and talent management.
              </p>
              <p className="mb-6">
                We envision a world where African stories, in all their diversity and richness, are recognized and celebrated globally. A world where African creatives have the platform, resources, and representation they need to share their unique perspectives.
              </p>
              <p>
                Through our work in film production, publishing, talent management, and educational workshops, we&apos;re committed to nurturing the next generation of African storytellers and creating sustainable pathways for their success.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={projectImages.documentary[0]}
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-background-alt" id="story">
        <div className="container">
          <h2 className="section-title text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="relative pl-10 md:pl-0">
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20"></div>
                
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-10 relative">
                    <div className="hidden md:block absolute right-0 top-6 w-10 h-1 bg-primary"></div>
                    <div className="hidden md:block absolute right-0 top-4 w-5 h-5 rounded-full border-4 border-primary bg-white"></div>
                    <h3 className="text-xl font-bold mb-2">2016</h3>
                    <p>Founded with a vision to showcase African stories through documentary filmmaking</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-10 relative">
                    <div className="absolute left-0 top-0 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-2 h-2 rounded-full bg-primary"></div>
                    <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={projectImages.documentary[0]}
                        alt="Founding of Kontact Me Africa"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:order-2 md:pl-10 relative">
                    <div className="hidden md:block absolute left-0 top-6 w-10 h-1 bg-primary"></div>
                    <div className="hidden md:block absolute left-0 top-4 w-5 h-5 rounded-full border-4 border-primary bg-white"></div>
                    <h3 className="text-xl font-bold mb-2">2018</h3>
                    <p>Expanded into publishing to bring African literature to wider audiences</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pr-10 md:order-1 relative">
                    <div className="absolute left-0 top-0 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-2 h-2 rounded-full bg-primary"></div>
                    <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={blogImages[1]}
                        alt="Expansion into publishing"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:pr-10 relative">
                    <div className="hidden md:block absolute right-0 top-6 w-10 h-1 bg-primary"></div>
                    <div className="hidden md:block absolute right-0 top-4 w-5 h-5 rounded-full border-4 border-primary bg-white"></div>
                    <h3 className="text-xl font-bold mb-2">2020</h3>
                    <p>Launched talent management division to represent African creatives globally</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pl-10 relative">
                    <div className="absolute left-0 top-0 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-2 h-2 rounded-full bg-primary"></div>
                    <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={talentImages[0]}
                        alt="Talent management launch"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative pl-10 md:pl-0">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                  <div className="md:text-right md:order-2 md:pl-10 relative">
                    <div className="hidden md:block absolute left-0 top-6 w-10 h-1 bg-primary"></div>
                    <div className="hidden md:block absolute left-0 top-4 w-5 h-5 rounded-full border-4 border-primary bg-white"></div>
                    <h3 className="text-xl font-bold mb-2">2023</h3>
                    <p>Introduced educational workshops to empower the next generation of African storytellers</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:pr-10 md:order-1 relative">
                    <div className="absolute left-0 top-0 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-1 h-full bg-primary/20"></div>
                    <div className="absolute left-0 top-6 md:hidden w-2 h-2 rounded-full bg-primary"></div>
                    <div className="relative h-60 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={serviceImages[3]}
                        alt="Educational workshops launch"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-white" id="team">
        <div className="container">
          <h2 className="section-title text-center">Meet Our Team</h2>
          <p className="section-subtitle text-center mx-auto mb-16">
            A diverse team of passionate professionals dedicated to showcasing authentic African narratives
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={teamMembers[0]}
                  alt="Ade Olusola"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-1">Ade Olusola</h3>
                <p className="text-primary font-medium mb-4">Founder & Creative Director</p>
                <p className="text-text-muted">
                  With over 15 years in film production across Africa, Ade brings vision and expertise to every project.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={teamMembers[1]}
                  alt="Nala Mbeki"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-1">Nala Mbeki</h3>
                <p className="text-primary font-medium mb-4">Head of Publishing</p>
                <p className="text-text-muted">
                  A passionate advocate for African literature with experience at leading publishing houses.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={teamMembers[2]}
                  alt="Kofi Addo"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-1">Kofi Addo</h3>
                <p className="text-primary font-medium mb-4">Talent Manager</p>
                <p className="text-text-muted">
                  Dedicated to discovering and nurturing African creative talent and connecting them with global opportunities.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={teamMembers[3]}
                  alt="Zara Nkosi"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-1">Zara Nkosi</h3>
                <p className="text-primary font-medium mb-4">Documentary Director</p>
                <p className="text-text-muted">
                  Award-winning filmmaker focused on telling impactful stories about African cultural heritage.
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={teamMembers[4]}
                  alt="Jamal Ibrahim"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-1">Jamal Ibrahim</h3>
                <p className="text-primary font-medium mb-4">Workshop Coordinator</p>
                <p className="text-text-muted">
                  Experienced educator passionate about developing the next generation of African storytellers.
                </p>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="card group">
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={teamMembers[5]}
                  alt="Amara Diop"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-heading mb-1">Amara Diop</h3>
                <p className="text-primary font-medium mb-4">Marketing & Partnerships</p>
                <p className="text-text-muted">
                  Strategic thinker focused on building meaningful relationships and amplifying African stories globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container">
          <h2 className="section-title text-center text-white">Our Values</h2>
          <p className="text-white/80 max-w-3xl mx-auto text-center mb-16">
            These core principles guide everything we do at Kontact Me Africa
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="bg-primary/20 text-accent-gold w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m22 16.92-3.6-1.8L14 18.08l-4.4-2.96-3.6 1.8V5.8l3.6-1.8L14 6.92l4.4-2.96 3.6 1.8"></path>
                  <path d="M14 6v12"></path>
                  <path d="M10 12v6"></path>
                  <path d="M18 6v12"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Authenticity</h3>
              <p className="text-white/80 text-center">
                We are committed to telling genuine African stories that reflect the rich diversity of the continent.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="bg-primary/20 text-accent-gold w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 2H2v5h20zM13 7H2v5h11zM13 12H2v5h11zM22 7h-5v10h5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Excellence</h3>
              <p className="text-white/80 text-center">
                We strive for the highest quality in all our creative endeavors and business practices.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="bg-primary/20 text-accent-gold w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M15 22v-4"></path>
                  <path d="M7 22v-4"></path>
                  <path d="M11 22v-4"></path>
                  <path d="M11 14h2"></path>
                  <path d="M3 5V3h18v2"></path>
                  <path d="M3 10v11h18V10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Community</h3>
              <p className="text-white/80 text-center">
                We believe in fostering supportive communities that empower creatives across Africa.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="bg-primary/20 text-accent-gold w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 2v1"></path>
                  <path d="M12 21v1"></path>
                  <path d="M4.22 4.22l.77.77"></path>
                  <path d="M19.01 19.01l.77.77"></path>
                  <path d="M2 12h1"></path>
                  <path d="M21 12h1"></path>
                  <path d="M4.22 19.78l.77-.77"></path>
                  <path d="M19.01 4.99l.77-.77"></path>
                  <path d="M12 17V8"></path>
                  <path d="M12 12 6 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Innovation</h3>
              <p className="text-white/80 text-center">
                We embrace new ideas and approaches to share African narratives in fresh and compelling ways.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Join Us in Telling Africa&apos;s Stories
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a creative looking for representation, a partner interested in collaboration, or simply want to learn more about what we do.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary hover:bg-accent-gold hover:text-white py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center"
            >
              Contact Us
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 py-3 px-6 rounded-md font-medium transition-colors inline-flex items-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 