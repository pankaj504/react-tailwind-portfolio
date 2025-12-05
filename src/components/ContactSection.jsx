import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapIcon,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";
const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    console.log("variableName:", e);

    e.preventDefault();
    emailjs
      .sendForm(
        "service_9io7ajj",
        "template_6c0tnhw",
        e.target,
        "XHRU6qKqKDFrlSYAN"
      )
      .then(() => {
        toast({
          title: "Message Sent!",
          description: "hank you! I'll get back to you soon.",
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast({
          title: "Email Failed",
          description: "Something went wrong. Please try again.",
        });
        console.error(error);
        setIsSubmitting(false);
      });
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className=" container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Looking for a React Developer ? I’d be excited to collaborate. Let’s
          connect!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:pankajlohani504@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    pankajlohani504@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:(+91)7505303805"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+91)7505303805
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapIcon className="h-6 w-6 text-primary" />
                </div>
                <div className="">
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Delhi,India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/pankaj-lohani-dev">
                  <Linkedin />
                </a>{" "}
                <a
                  href="https://www.instagram.com/panku.lohani/"
                  target="_blank"
                >
                  <Instagram />
                </a>{" "}
                <a href="https://github.com/pankaj504" target="_blank">
                  <Github />
                </a>{" "}
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="John Cartel..."
                />
              </div>

              <div>
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background"
                  placeholder="John@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary resize-none"
                  placeholder="Hello I'd to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending" : "  Send Message"}

                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
