import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const experiences = [
  {
    title: "Lead Full Stack Developer",
    company: "Bountip Technologies Ltd",
    period: "Jan 2025 – Present",
    location: "Remote",
    technologies: ["NestJS", "Next.js", "ElectronJS", "PostgreSQL", "Redis"],
    current: true
  },
  {
    title: "Senior Developer & Team Lead",
    company: "ReCreax Ltd",
    period: "Jul 2024 – Present",
    location: "Remote",
    technologies: ["Go", "ASP.NET", "Architecture", "Team Leadership"],
    current: true
  },
  {
    title: "Lead Full Stack Developer",
    company: "BreezeLearn",
    period: "Oct 2023 – Dec 2023",
    location: "Remote",
    technologies: ["Mentorship", "Web Services", "API Enhancement"]
  },
  {
    title: "Full Stack Developer",
    company: "Summitech Computing Ltd",
    period: "Dec 2022 – Jun 2023",
    location: "Nigeria",
    technologies: ["React.js", "Node.js", "MongoDB", "Redux"]
  },
  {
    title: "Full Stack Developer",
    company: "Olivermead Investment",
    period: "Jul 2020 – Nov 2023",
    location: "Nigeria",
    technologies: ["Express.js", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Frontend Developer",
    company: "weKurnect",
    period: "Jan 2019 – Jun 2019",
    location: "Nigeria",
    technologies: ["Vue.js", "Nuxt.js", "Tailwind CSS", "Supabase"]
  },
  {
    title: "Frontend Developer",
    company: "Konga",
    period: "Jan 2018 – Dec 2018",
    location: "Nigeria",
    technologies: ["E-commerce Frontend", "Payment API Integration"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            6+ years of professional software development experience
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`bg-card-gradient border-border/50 shadow-elegant transition-smooth hover:shadow-glow hover:scale-[1.02] ${
                exp.current ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                      {exp.current && (
                        <Badge className="bg-primary text-primary-foreground">Current</Badge>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building className="h-4 w-4" />
                      <span className="text-lg font-medium">{exp.company}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-skill-badge border-primary/20 text-foreground/80 hover:bg-primary/10 transition-smooth"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}