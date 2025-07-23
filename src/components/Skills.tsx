import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Git"],
    icon: "☁️"
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis"],
    icon: "🗄️"
  },
  {
    title: "Backend",
    skills: ["NestJS", "Node.js", "Go", "ASP.NET", "Express.js"],
    icon: "⚙️"
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "TypeScript"],
    icon: "🎨"
  },
  {
    title: "Mobile & Desktop",
    skills: ["React Native", "ElectronJS"],
    icon: "📱"
  },
  {
    title: "Other",
    skills: ["Redux", "REST APIs", "Tailwind CSS"],
    icon: "🔧"
  }
];

const allSkills = [
  "AWS", "GCP", "Docker", "Git", "Kubernetes", "PostgreSQL", "MongoDB", "Redis",
  "NestJS", "Next.js", "React", "Vue.js", "Node.js", "Go", "ASP.NET", "TypeScript",
  "Redux", "REST", "Express.js"
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies and development tools
          </p>
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow transition-smooth">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-skill-badge border-primary/20 text-foreground/80 hover:bg-primary/10 transition-smooth"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* All Skills Cloud */}
        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-glow">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-center mb-6 text-primary">
              Technical Skills Overview
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {allSkills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-smooth hover:scale-105"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}