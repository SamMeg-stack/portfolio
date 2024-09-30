"use client";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import { ProjectsSection } from "@/sections/ProjectsSection";
import Tape from "@/sections/Tape";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <Tape />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
