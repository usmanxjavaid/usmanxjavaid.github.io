import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { Experience } from "@/components/sections/experience";
import { Testimonials, CTA } from "@/components/sections/testimonials-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <Services />
      <Process />
      <Experience />
      <Testimonials />
      <CTA />
    </>
  );
}