import { HeroSection } from '@/components/home/hero-section';
import { MissionSection } from '@/components/home/mission-section';
import { FeaturedBookSection } from '@/components/home/featured-book-section';
import { ServicesGrid } from '@/components/home/services-grid';
import { ProjectsShowcase } from '@/components/home/projects-showcase';
import { TestimonialsSection } from '@/components/home/testimonials-section';
import { CTASection } from '@/components/home/cta-section';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <FeaturedBookSection />
      <ServicesGrid />
      <ProjectsShowcase />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
