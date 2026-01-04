import { FaGithubSquare } from "react-icons/fa";
import { RevealOnScroll } from "./RevealOnScroll";
import {
  Code,
  Terminal,
  Database,
  LayoutTemplate,
  Smartphone,
  Server,
  Globe,
  Cpu,
  Layers,
} from "lucide-react";
import { FaHtml5, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiAppwrite,
  SiCss3,
  SiFastapi,
  SiIntellijidea,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiVscodium,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";

export const SkillsSection = () => {
  const skills = [
    {
      name: "Java",
      icon: <DiJava size={40} />,
      color: "#009688",
      category: "backend",
    },
    {
      name: "ReactJS",
      icon: <FaReact size={40} />,
      color: "#61DAFB",
      category: "frontend",
    },

    {
      name: "JavaScript",
      icon: <IoLogoJavascript size={40} />,
      color: "#F7DF1E",
      category: "frontend",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 size={40} />,
      color: "#E34F26",
      category: "frontend",
    },
    {
      name: "CSS3",
      icon: <SiCss3 size={40} />,
      color: "#1572B6",
      category: "frontend",
    },
    {
      name: "Github",
      icon: <FaGithubSquare size={40} />,
      color: "#F05032",
      category: "tools",
    },
    {
      name: "MySql",
      icon: <SiMysql size={40} />,
      color: "#F02E65",
      category: "backend",
    },
    {
      name: "RestAPI",
      icon: <SiFastapi size={40} />,
      color: "#009688",
      category: "backend",
    },
    {
      name: "Vs Code",
      icon: <VscVscode size={40} />,
      color: "#009688",
      category: "backend",
    },
    {
      name: "Intellijidea",
      icon: <SiIntellijidea size={40} />,
      color: "#009688",
      category: "backend",
    },
    {
      name: "Postman",
      icon: <SiPostman size={40} />,
      color: "#009688",
      category: "backend",
    },
    // Add more as needed to fill the grid
  ];

  return (
    <section
      id="skills"
      className="py-14 px-4 relative overflow-hidden bg-background"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Skills & Interests
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I love to explore new technologies and build things with them.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <RevealOnScroll key={index} delay={index * 50}>
              <div
                className="group relative p-6 bg-[#111] dark:bg-[#0a0a0a] rounded-xl border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center gap-4 h-full aspect-square"
                style={
                  {
                    // Optional: Add a subtle glow of the brand color on hover
                    // boxShadow: `0 0 0 1px ${skill.color}20`
                  }
                }
              >
                {/* Icon Container with subtle glow based on brand color */}
                <div
                  className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Bottom line with brand color */}
                <div
                  className="absolute bottom-0 left-0 w-full h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
