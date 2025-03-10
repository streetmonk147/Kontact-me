"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, User, Tag, ArrowLeft, Share2, ChevronRight } from "lucide-react";

// Blog posts data (placeholders) - this would typically come from a database or API
const blogPosts = [
  {
    id: 1,
    title: "The Rise of African Documentary Filmmaking",
    excerpt: "Exploring the growth and global impact of documentary filmmaking across Africa, showcasing authentic stories and perspectives.",
    content: `
      <p>Documentary filmmaking across Africa has experienced a remarkable surge in recent years, with filmmakers from across the continent gaining international recognition for their authentic storytelling and unique perspectives. This rise represents not just an increase in production volume, but a fundamental shift in how African narratives are captured and shared with global audiences.</p>
      
      <h2>A New Wave of Storytellers</h2>
      
      <p>The new generation of African documentary filmmakers is characterized by their commitment to telling stories that challenge stereotypes and present nuanced views of the continent's diverse cultures, challenges, and triumphs. Armed with both traditional filmmaking techniques and innovative approaches, these directors are creating compelling works that resonate with audiences worldwide.</p>
      
      <p>Unlike previous eras where African stories were primarily told through a foreign lens, today's documentaries are largely created by Africans themselves, ensuring authentic representation and deeper cultural context. This shift has been facilitated by increased access to film education, more affordable production equipment, and digital distribution platforms that bypass traditional gatekeepers.</p>
      
      <h2>Themes and Approaches</h2>
      
      <p>Contemporary African documentaries cover a wide range of themes, from environmental conservation and political activism to cultural preservation and personal journeys. What unites them is often a commitment to social impact and a desire to use film as a tool for positive change.</p>
      
      <p>Many filmmakers are employing innovative narrative techniques that blend traditional documentary approaches with elements of performance, animation, and experimental filmmaking. This creative hybridization has resulted in works that are not only informative but artistically significant.</p>
      
      <h2>International Recognition</h2>
      
      <p>African documentaries are increasingly featured at prestigious international film festivals, winning awards and critical acclaim. Films like "Félicité" (Senegal), "I Am Not a Witch" (Zambia), and "Rafiki" (Kenya) have garnered attention at events like Cannes, Sundance, and the Berlin International Film Festival.</p>
      
      <p>Streaming platforms have also played a crucial role in bringing African documentaries to global audiences. Netflix, Amazon Prime, and specialized platforms focused on African content have created unprecedented opportunities for these films to reach viewers around the world.</p>
      
      <h2>Challenges and Opportunities</h2>
      
      <p>Despite the positive trends, African documentary filmmakers still face significant challenges, including limited funding options, restricted distribution networks within Africa itself, and sometimes political resistance to controversial topics.</p>
      
      <p>However, these challenges have also spurred innovation. Many filmmakers have embraced collaborative models, international co-productions, and creative funding approaches to bring their projects to life. Organizations dedicated to supporting African cinema, such as the Durban FilmMart, DocuBox, and the Hot Docs-Blue Ice Group Documentary Fund, have provided crucial resources and networking opportunities.</p>
      
      <h2>The Future of African Documentary</h2>
      
      <p>The future of African documentary filmmaking looks promising, with increasing investment in film infrastructure, growing recognition of the commercial potential of authentic African content, and a new generation of filmmakers eager to share their perspectives.</p>
      
      <p>As digital technology continues to evolve and become more accessible, we can expect to see even more diverse voices emerging from across the continent, further enriching the global documentary landscape with uniquely African stories and viewpoints.</p>
      
      <p>The rise of African documentary filmmaking represents not just a trend in cinema but a significant cultural shift that is redefining how Africa is portrayed and understood globally. Through the lens of these talented filmmakers, audiences worldwide are gaining access to authentic, nuanced perspectives on a continent that has too often been reduced to simplistic narratives.</p>
    `,
    image: "/images/blog-1.jpg", // Placeholder
    category: "Film",
    date: "May 15, 2023",
    author: "Nala Mbeki",
    authorRole: "Head of Publishing",
    authorImage: "/images/team-2.jpg", // Placeholder
    tags: ["Documentary", "Filmmaking", "African Cinema", "Storytelling"],
    slug: "rise-african-documentary-filmmaking",
    featured: true,
    relatedPosts: [3, 4, 9],
  },
  {
    id: 2,
    title: "Publishing African Literature in the Digital Age",
    excerpt: "How digital platforms are transforming the publishing landscape for African authors and reaching global audiences.",
    content: `
      <p>The digital revolution has fundamentally transformed the publishing industry worldwide, and African literature has been no exception to this change. Digital platforms have created unprecedented opportunities for African authors to reach global audiences, bypassing traditional publishing gatekeepers and connecting directly with readers across the world.</p>
      
      <h2>Breaking Down Traditional Barriers</h2>
      
      <p>For decades, African writers faced significant challenges in getting their work published and distributed internationally. Limited publishing infrastructure in many African countries, combined with the reluctance of international publishers to take risks on "unknown" African voices, meant that many talented writers remained unread outside their immediate communities.</p>
      
      <p>Digital publishing has dramatically altered this landscape. E-books, print-on-demand services, and self-publishing platforms have given African authors direct access to global markets without requiring substantial upfront investment or approval from established publishing houses.</p>
      
      <h2>The Rise of Digital-First Publishers</h2>
      
      <p>Alongside individual self-publishing efforts, we've seen the emergence of digital-first publishing houses specifically focused on African literature. Companies like Okada Books in Nigeria, Magunga Bookstore in Kenya, and Cassava Republic (which embraces both print and digital formats) are creating new pathways for African writers to reach readers.</p>
      
      <p>These publishers understand the unique challenges and opportunities of the African literary landscape and have developed business models that work within the continent's technological and economic realities while also serving the diaspora and international readers interested in African perspectives.</p>
      
      <h2>Mobile Reading Revolution</h2>
      
      <p>Perhaps the most significant aspect of digital publishing in Africa is the mobile reading revolution. With smartphone penetration continuing to increase across the continent, millions of Africans now have a potential library in their pockets. Platforms like Worldreader and African Storybook have leveraged this mobile connectivity to bring thousands of books to readers who previously had limited access to physical libraries or bookstores.</p>
      
      <p>This mobile-first approach has also influenced content creation, with some authors developing serialized fiction specifically designed for consumption on phones, often in shorter formats that can be read during commutes or brief breaks.</p>
      
      <h2>Social Media and Literary Communities</h2>
      
      <p>Social media platforms have become vital spaces for African literary discourse, promotion, and community-building. Twitter hashtags like #AfricanLiterature and #AfricanPoetry have created virtual gathering places for writers, readers, and critics to discover new works and engage in conversations about African writing.</p>
      
      <p>Book bloggers, bookstagrammers, and BookTok creators focused on African literature have emerged as influential tastemakers, helping to amplify voices that might otherwise struggle to gain visibility in mainstream literary coverage.</p>
      
      <h2>Challenges in the Digital Landscape</h2>
      
      <p>Despite these positive developments, digital publishing in Africa faces significant challenges. Uneven internet access, the cost of data, and electricity reliability issues in some regions create a digital divide that affects both creators and consumers of literature.</p>
      
      <p>Additionally, piracy remains a serious concern, with unauthorized digital copies cutting into the already modest earnings of many African authors. Developing effective, accessible payment systems that work across different African countries has also proven challenging for digital publishers.</p>
      
      <h2>The Future of African Digital Publishing</h2>
      
      <p>Looking ahead, the future of African digital publishing appears promising but will require continued innovation. Blockchain technology may offer new solutions for rights management and royalty payments. Artificial intelligence could help with translation, making African literature more accessible across the continent's many language groups and internationally.</p>
      
      <p>As digital infrastructure continues to improve across Africa, we can expect to see even more diverse voices emerging from previously underrepresented regions and communities, further enriching the global literary landscape with uniquely African perspectives and storytelling traditions.</p>
      
      <p>The digital transformation of African publishing represents not just a technological shift but a democratization of storytelling that has profound cultural implications. By enabling more African authors to share their work with the world on their own terms, digital platforms are helping to ensure that the rich tapestry of African experiences and imaginations takes its rightful place in global literature.</p>
    `,
    image: "/images/blog-2.jpg", // Placeholder
    category: "Publishing",
    date: "April 22, 2023",
    author: "Kofi Addo",
    authorRole: "Talent Manager",
    authorImage: "/images/team-3.jpg", // Placeholder
    tags: ["Publishing", "Digital Media", "African Literature", "E-books"],
    slug: "publishing-african-literature-digital-age",
    featured: true,
    relatedPosts: [5, 8, 7],
  },
  {
    id: 3,
    title: "Storytelling Techniques from West African Traditions",
    excerpt: "Lessons from traditional West African storytelling that can enhance modern narrative approaches in film and literature.",
    content: `
      <p>West African storytelling traditions represent some of the oldest and most sophisticated narrative systems in the world. These time-honored techniques, developed over centuries and passed down through generations, offer valuable insights and approaches that can significantly enrich contemporary storytelling in film, literature, and other media.</p>
      
      <h2>The Griot Tradition</h2>
      
      <p>Central to West African storytelling is the figure of the griot (also known as jeli, jali, or gewel in different regions). These professional storytellers, historians, and musicians serve as living archives of their communities, preserving and transmitting cultural knowledge, genealogies, and historical events through oral performance.</p>
      
      <p>The griot's approach to narrative—combining historical fact with artistic interpretation, music with spoken word, and personal reflection with communal wisdom—offers a multidimensional model for contemporary storytellers seeking to create rich, layered narratives that engage audiences on multiple levels.</p>
      
      <h2>Call and Response</h2>
      
      <p>One of the most distinctive features of West African storytelling is the call-and-response pattern, where the storyteller actively engages the audience through questions, refrains, or prompts that invite participation. This technique transforms storytelling from a passive experience into an interactive exchange.</p>
      
      <p>Modern filmmakers and writers can adapt this approach by creating narrative structures that leave space for audience interpretation and engagement, rather than presenting completely closed narratives. This might involve strategic ambiguity, breaking the fourth wall, or creating works that invite multiple interpretations.</p>
      
      <h2>Circular Narrative Structures</h2>
      
      <p>While Western storytelling often follows a linear progression, many West African narratives employ circular structures where endings connect back to beginnings, reflecting cyclical views of time and experience. These structures emphasize patterns, repetitions, and the interconnectedness of events rather than strict chronological progression.</p>
      
      <p>This approach can be particularly effective in stories exploring themes of history, memory, and intergenerational experiences. Films like "Daughters of the Dust" by Julie Dash demonstrate how circular narrative structures can create powerful, poetic explorations of time and community.</p>
      
      <h2>Integration of Music and Movement</h2>
      
      <p>In traditional West African storytelling, narrative is rarely separated from music, rhythm, and movement. Stories are often sung or chanted, accompanied by instruments, and may incorporate dance or gesture as integral elements of the narrative experience.</p>
      
      <p>Contemporary storytellers can draw inspiration from this holistic approach by considering how sound design, music, and visual rhythm contribute to narrative. Rather than treating these as supplementary elements, they can be conceived as fundamental components of the storytelling process itself.</p>
      
      <h2>Communal Wisdom and Moral Framework</h2>
      
      <p>West African stories frequently embed ethical teachings and communal values within entertaining narratives. Rather than explicit moralizing, these lessons emerge organically through character experiences, consequences, and the resolution of conflicts.</p>
      
      <p>This approach offers an alternative to both didactic messaging and value-neutral entertainment, demonstrating how stories can engage with ethical questions and social values while remaining compelling and authentic rather than preachy or simplistic.</p>
      
      <h2>Animism and the Living World</h2>
      
      <p>Many West African storytelling traditions reflect animist worldviews where animals, plants, natural features, and even objects possess consciousness and agency. This perspective creates narratives where humans exist within a web of relationships with non-human entities, rather than standing apart from or above the natural world.</p>
      
      <p>Contemporary storytellers can draw on this tradition to create more ecological narratives that challenge anthropocentric perspectives and explore the interconnectedness of all life. This approach resonates strongly with current environmental concerns and efforts to reimagine humanity's relationship with nature.</p>
      
      <h2>Applying Traditional Techniques in Contemporary Contexts</h2>
      
      <p>Filmmakers, writers, and other creative professionals can thoughtfully incorporate these traditional techniques while avoiding cultural appropriation by approaching them with respect, research, and appropriate attribution. Many African creators are already leading the way in this synthesis, creating works that bridge traditional and contemporary approaches.</p>
      
      <p>By studying and adapting these sophisticated narrative systems, storytellers of all backgrounds can expand their creative toolkit while helping to ensure that these valuable traditions continue to evolve and thrive in the modern world.</p>
      
      <p>The rich storytelling heritage of West Africa offers not just techniques but entire philosophical approaches to narrative that can help contemporary creators develop more engaging, multidimensional, and culturally resonant work. As global audiences increasingly seek authentic and diverse stories, these ancient traditions provide timeless wisdom for the art of connecting through narrative.</p>
    `,
    image: "/images/blog-3.jpg", // Placeholder
    category: "Storytelling",
    date: "March 10, 2023",
    author: "Amara Diop",
    authorRole: "Marketing & Partnerships",
    authorImage: "/images/team-6.jpg", // Placeholder
    tags: ["Traditional Storytelling", "West Africa", "Narrative Techniques", "Cultural Heritage"],
    slug: "storytelling-techniques-west-african-traditions",
    featured: true,
    relatedPosts: [1, 7, 5],
  },
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogPosts.find(p => p.slug === params.slug);
  
  // If post not found, return 404
  if (!post) {
    notFound();
  }
  
  // Find related posts
  const relatedPosts = post.relatedPosts
    ? blogPosts.filter(p => post.relatedPosts?.includes(p.id))
    : [];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px]">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative container h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center mb-4">
              <span className="bg-primary text-white text-sm py-1 px-3 rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center text-white/80">
              <div className="flex items-center mr-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none mb-12"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, index) => (
                    <Link 
                      key={index} 
                      href={`/blog?tag=${tag}`}
                      className="bg-background-alt text-text-dark text-sm py-1 px-3 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      <Tag className="h-3 w-3 inline mr-1" />
                      {tag}
                    </Link>
                  ))}
                </div>
                
                {/* Share */}
                <div className="flex items-center space-x-4 border-t border-gray-200 pt-8">
                  <span className="font-bold">Share this article:</span>
                  <div className="flex space-x-2">
                    <button className="bg-[#1877F2] text-white p-2 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="bg-[#1DA1F2] text-white p-2 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="bg-[#E4405F] text-white p-2 rounded-full">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="bg-background-alt p-6 rounded-lg mt-12 flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={post.authorImage}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-1 text-center md:text-left">
                      {post.author}
                    </h3>
                    <p className="text-primary mb-4 text-center md:text-left">
                      {post.authorRole}
                    </p>
                    <p className="text-text-muted">
                      A passionate advocate for African storytelling with extensive experience in the creative industries across the continent. Dedicated to amplifying authentic African voices and narratives on the global stage.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="sticky top-24 space-y-8"
              >
                {/* Back to Blog */}
                <div className="bg-background-alt p-6 rounded-lg">
                  <Link 
                    href="/blog"
                    className="flex items-center text-primary font-medium"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to All Articles
                  </Link>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-background-alt p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-heading mb-6">Related Articles</h3>
                    <div className="space-y-6">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.id} className="group">
                          <Link href={`/blog/${relatedPost.slug}`}>
                            <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                              <Image
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                            <h4 className="font-bold group-hover:text-primary transition-colors">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center text-sm text-text-muted mt-2">
                              <Calendar className="h-4 w-4 mr-1" />
                              {relatedPost.date}
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Categories */}
                <div className="bg-background-alt p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-heading mb-6">Categories</h3>
                  <div className="space-y-2">
                    <Link 
                      href="/blog?category=Film"
                      className="block py-2 px-3 rounded-md hover:bg-white transition-colors"
                    >
                      Film
                    </Link>
                    <Link 
                      href="/blog?category=Publishing"
                      className="block py-2 px-3 rounded-md hover:bg-white transition-colors"
                    >
                      Publishing
                    </Link>
                    <Link 
                      href="/blog?category=Storytelling"
                      className="block py-2 px-3 rounded-md hover:bg-white transition-colors"
                    >
                      Storytelling
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
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