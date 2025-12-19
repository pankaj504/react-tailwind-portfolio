import { useState } from "react";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "./RevealOnScroll";
import { User, Mail, MessageSquare, Send, Phone } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
      alert("Message sent!");
      setFormData({ name: "", email: "", mobile: "", message: "" });
    }).catch(() => {
      alert("Oops! Something went wrong. Please try again.");
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-10 px-4 bg-background relative overflow-hidden">
      <RevealOnScroll>
        {/* Main Container */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.2)] border border-white/5 mx-auto">

          {/* Left Column (Abstract Graphic) */}
          <div className="w-full md:w-1/2 relative bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1a] flex flex-col justify-center items-center p-12 text-center md:text-left overflow-hidden">
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 space-y-6">
              <User className="w-20 h-20 text-white/20 mx-auto md:mx-0 mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Welcome.
              </h2>
              <p className="text-gray-400 text-lg max-w-sm mx-auto md:mx-0">
                Looking to build something amazing? Let's connect and turn your ideas into reality.
              </p>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#050505] flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-8 text-white">Get In Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors">
                  <Mail size={20} />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                />
              </div>

              {/* Mobile Input */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-500 transition-colors">
                  <Phone size={20} />
                </div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Your Mobile Number"
                  required
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                />
              </div>

              {/* Message Input */}
              <div className="relative group">
                <div className="absolute left-4 top-5 text-gray-500 group-focus-within:text-purple-500 transition-colors">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white rounded-xl pl-12 pr-5 py-4 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 resize-none"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
