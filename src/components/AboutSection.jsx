import { RevealOnScroll } from "./RevealOnScroll";
import { ArrowRight, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-2 px-2 relative bg-background">
      <RevealOnScroll>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-3">
              <User className="w-8 h-8 md:w-10 md:h-10" />
              About <span className="text-primary">Me</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Left Column: Image */}
            <div className="w-full md:w-5/12 flex justify-center md:justify-end ">
              <div className="relative w-full max-w-[350px] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gray-800">
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover  hover: transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="w-full md:w-7/12 text-left space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                I'm <span className="text-foreground">Pankaj Lohani</span>
              </h3>
              <p className="text-xl font-bold text-primary">React Developer</p>

              <p className="text-gray-400 leading-relaxed text-lg">
                I am a React developer based in India. I am an Information
                Technology undergraduate passionate about improving my coding
                skills & developing applications & websites.
              </p>

              <div className="space-y-2 text-lg">
                <p className="text-gray-300">
                  <span className="text-primary font-bold mr-2">Email :</span>
                  pankajlohani123@gmail.com
                </p>
                <p className="text-gray-300">
                  <span className="text-primary font-bold mr-2">Place :</span>
                  Delhi
                </p>
              </div>

              <div className="pt-6">
                <a
                  href="/PankuResume.pdf"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-violet-700 hover:bg-violet-800 text-white rounded-lg font-bold transition-all shadow-lg hover:-translate-y-1"
                >
                  Resume <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
