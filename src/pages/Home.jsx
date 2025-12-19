import React from "react";

import { Logo } from "../components/Logo";
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

      {/* {Logo} */}
      <Logo />
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
