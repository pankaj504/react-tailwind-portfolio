import { RevealOnScroll } from "./RevealOnScroll";
import ParticleBackground from "./ParticleBackground";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = ["Web Developer", "React Developer", "React Enthusiast"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter Effect
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (index >= fullText.length) {
          setIndex(0);
          return;
        }

        const currentFullText = fullText[index];

        if (isDeleting) {
          setText(currentFullText.substring(0, subIndex - 1));
          setSubIndex((prev) => prev - 1);
        } else {
          setText(currentFullText.substring(0, subIndex + 1));
          setSubIndex((prev) => prev + 1);
        }

        if (!isDeleting && subIndex === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause at end
        } else if (isDeleting && subIndex === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % fullText.length);
        }
      },
      isDeleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, fullText]);

  // Cursor Blinking Effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/pankaj-lohani-dev",
      color: "bg-blue-600",
    },
    {
      icon: <Github size={24} />,
      href: "https://github.com/pankaj504",
      color: "bg-gray-800",
    },
    {
      icon: <Instagram size={24} />,
      href: "https://www.instagram.com/panku.lohani/?utm_source=qr&igsh=eG9uNTZuMWdtcHZl#",
      color: "bg-blue-400",
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:pankajlohani123@gmail.com",
      color: "bg-red-500",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground"
    >
      {/* Particle Background */}
      <ParticleBackground />

      <RevealOnScroll>
        <div className="container mx-auto px-20 relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Column: Text & Content */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Hi There, <br />
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 via-blue-600 to-primary">
                  Pankaj Lohani
                </span>
              </h2>

              <h3 className="text-2xl md:text-4xl font-semibold">
                I Am Into <span className="text-red-700">{text}</span>
                <span className={`${blink ? "opacity-100" : "opacity-0"} ml-1`}>
                  |
                </span>
              </h3>

              <div className="flex justify-center md:justify-start">
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#6d25e1] text-white rounded-full font-bold shadow-lg hover:bg-[#3b1575] transition-all transform hover:-translate-y-1"
                >
                  About Me <ArrowDown size={18} />
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black text-white rounded-full hover:bg-[#6d25e1] hover:text-white transition-all duration-300 transform hover:scale-100 shadow-[0_0_10px_rgba(0,0,0,0.2)]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Avatar */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
              {/* Yellow Circle Background */}
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                {/* <div className="absolute inset-0 bg-[#000000] rounded-full animate-pulse-subtle blur-xl opacity-80 scale-10"></div> */}
                <div className="absolute inset-0 bg-[#9d05de] rounded-full  overflow-hidden border-1 border-white/10 flex items-end justify-center">
                  <img
                    src="/profile.jpg"
                    alt="Pankaj Lohani"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
