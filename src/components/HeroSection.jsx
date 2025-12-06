import { ArrowDown } from "lucide-react";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in block mb-2">Hi, I'm</span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-pink-400 opacity-0 animate-fade-in-delay-1 inline-block">
              Pankaj
            </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-400 via-purple-400 to-primary ml-4 opacity-0 animate-fade-in-delay-2 inline-block">
              Lohani
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I enjoy transforming ideas into intuitive UIs using <span className="text-foreground font-medium">React</span>, <span className="text-foreground font-medium">Tailwind</span>,
            and reusable component patterns — while continually improving my
            skills through hands-on projects.
          </p>
          <div className="pt-8 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button text-lg px-8 py-3 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
