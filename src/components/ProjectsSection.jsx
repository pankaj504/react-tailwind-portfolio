import { RevealOnScroll } from "./RevealOnScroll";
import { ThreeDCard } from "./ThreeDCard";

const projects = [
  {
    id: 1,
    title: "AI Travel Companion",
    description: "Full-stack travel planner with OpenAI integration.",
    image: "/landing.png",
    tags: ["React 19", "FastAPI", "OpenAI"],
    link: "https://travel-ai-sable.vercel.app",
    code: "https://github.com/pankaj504/Travel-Ai",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <ThreeDCard containerClassName="w-full h-[400px]">
      <div className="absolute inset-0 rounded-xl overflow-hidden group border border-white/10 hover:border-white/20">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end p-6">
          <div className="flex flex-wrap gap-2 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-2 py-1 bg-primary/20 text-primary rounded-full border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 line-clamp-2">
            {project.description}
          </p>

          <div className="flex gap-4 mb-4 relative z-50 pointer-events-auto">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="  inline-block px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-300 text-sm"
            >
              View Project
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="  inline-block px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 delay-300 text-sm"
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </ThreeDCard>
  );
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-10 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">
        <RevealOnScroll>
          {/* Header */}
          <div className="mb-16 text-center max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Works
            </h2>
            <p className="text-lg text-muted-foreground">
              A curated selection of projects that push the boundaries of design
              and technology.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
