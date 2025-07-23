import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github, Download } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Asanga Akan
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/90 font-light">
            Software Developer
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Skilled Full-Stack Developer with extensive experience building scalable applications.
            I enjoy leading teams, mentoring developers, and delivering high-quality software
            aligned with business goals.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Lagos, Nigeria</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+234-813-120-8722</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>akan.asanga@gmail.com</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-glow"
            >
              Get In Touch
            </Button>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/akanwealth/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent"
              >
                <Download className="h-5 w-5" />
                <span className="ml-2">Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}