import React from "react";
import { } from "@/components/StarBackground";
import { StarBackground } from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { Footer } from "../components/FooterSection";
import { ProjectsSection } from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* {Background effect} */}
      <StarBackground />
      {/* {Navbar} */}
      <Navbar />
      {/* {Main Content} */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* {Footer} */}
      <Footer />
    </div>
  );
};

export default Home;
