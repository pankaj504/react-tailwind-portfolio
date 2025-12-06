import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Travel Assistant Application",
    description:
      "Developed a full-stack travel planning platform using React 19 and Vite, featuring an interactive AI chat assistant powered by Google Gemini, reducing trip planning time by an estimated 40%.",
    image: "/landing.png",
    tags: [
      "JavaScript (ES6+)",
      " React.js",
      "Leaflet.js",
      "FastAPI",
      "Uvicorn",
      "Prompt Engineering",
      " LLM Integration",
    ],
    demoUrl: "https://snapgram-delta-sable.vercel.app/saved",
    githubUrl: "https://github.com/pankaj504/snapgram",
  },
  // {
  //   id: 2,
  //   title: "Orbit Analytics Dashboard",
  //   description:
  //     "Interactive analytics dashboard with data visualization and filtering capabilities.",
  //   image: "/projects/project2.png",
  //   tags: ["TypeScript", "D3.js", "Next.js"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "E-commerce Platform",
  //   description:
  //     "Full-featured e-commerce platform with user authentication and payment processing.",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoUrl: "#",
  //   githubUrl: "#",
  // },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group glass rounded-lg overflow-hidden card-hover border-none"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="text-center mt-12">
                  <a
                    className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://travel-ai-sable.vercel.app/"
                  >
                    Check To Interact <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://travel-ai-sable.vercel.app/"
          >
            Check To Interact <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  );
};
