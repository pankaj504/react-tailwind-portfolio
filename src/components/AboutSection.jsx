import { Blocks, BlocksIcon, Briefcase, Code, Key, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12  ">
          <div className="space-y-5 text-left ">
            <h3 className="text-2xl font-semibold mt-10">
              The Developer Behind the Screen
            </h3>

            <p className="text-muted-foreground ">
              I’m a self-taught React Developer with a strong foundation in
              JavaScript, UI development, component architecture, and responsive
              design. I enjoy building fast and modern interfaces using React,
              Tailwind, ShadCN/UI, and Framer Motion.
            </p>

            <p className="text-muted-foreground">
              As a fresher, I may be early in my journey, but I bring strong
              problem-solving skills, consistency, and the ability to quickly
              adapt to new technologies. I'm excited to contribute to real
              projects and grow in a professional environment.”
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center mr-37">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/PankajResume.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Frontend Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building responsive and interactive user interfaces using
                    React, JavaScript, and modern web technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover ">
              <div className="flex items-start gap-4 ">
                <div className="p-3 rounded-full bg-primary/10">
                  <Blocks className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Modern UI Styling</h4>
                  <p className="text-muted-foreground">
                    Designing clean and consistent interfaces using Tailwind CSS
                    and component libraries.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Key className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Integration</h4>
                  <p className="text-muted-foreground">
                    Connecting applications with real-time data using REST APIs
                    and async JavaScript.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
