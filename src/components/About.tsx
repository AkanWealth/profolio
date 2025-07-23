import { Card, CardContent } from "@/components/ui/card";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about creating innovative solutions and leading development teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-glow border-2 border-primary/20">
                <img
                  src={profilePlaceholder}
                  alt="Asanga Akan - Software Developer"
                  className=""
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-hero-gradient rounded-full flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-lg">👨‍💻</span>
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="space-y-6">
            <Card className="bg-card-gradient border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  I am a skilled Software Developer with extensive experience in full-stack development, 
                  specializing in building scalable and efficient applications. I enjoy leading teams and 
                  mentoring junior developers, and I work closely with stakeholders to deliver high-quality 
                  software aligned with business goals.
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-skill-badge border-border/50 shadow-elegant">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-skill-badge border-border/50 shadow-elegant">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-card-gradient border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">What I Do</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Full-stack development with modern technologies
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Team leadership and mentoring junior developers
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Scalable application architecture design
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Stakeholder collaboration and project delivery
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Awards & Recognition</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>🏆 Most Outstanding Team Honor Graduate</li>
                  <li>🎖️ Exceptional Voluntary Service Honors Award</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}