import { Mail, Phone, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              Asanga Akan
            </h3>
            <p className="text-muted-foreground">
              Software Developer passionate about creating innovative solutions 
              and building scalable applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="block text-muted-foreground hover:text-primary transition-smooth"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:akan.asanga@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="h-4 w-4" />
                akan.asanga@gmail.com
              </a>
              <a
                href="tel:+2348131208722"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Phone className="h-4 w-4" />
                +234-813-120-8722
              </a>
              <a
                href="https://www.linkedin.com/in/akanwealth/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Asanga Akan. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-glow hover:shadow-elegant transition-smooth hover:scale-110 flex items-center justify-center"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </footer>
  );
}