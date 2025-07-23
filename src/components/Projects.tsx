import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application built with Next.js and NestJS. Real-time updates with WebSocket integration.",
    technologies: ["Next.js", "NestJS", "MongoDB", "Socket.io", "TypeScript"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Real Estate Platform",
    description: "Property listing and management platform with advanced search filters, virtual tours, and agent dashboard.",
    technologies: ["Vue.js", "Express.js", "MySQL", "AWS S3", "Tailwind"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Learning Management System",
    description: "Educational platform with course creation, video streaming, progress tracking, and interactive quizzes.",
    technologies: ["React", "Go", "PostgreSQL", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication, transaction history, and bill payments.",
    technologies: ["React Native", "ASP.NET", "SQL Server", "Azure"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + projectsPerView >= projects.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, projects.length - projectsPerView) : prev - 1
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);
  
  // Fill remaining slots if needed
  while (visibleProjects.length < projectsPerView && projects.length > projectsPerView) {
    const remaining = projectsPerView - visibleProjects.length;
    visibleProjects.push(...projects.slice(0, remaining));
  }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="relative">
          {/* Carousel Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="border-primary/30 text-primary hover:bg-primary/10"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * projectsPerView)}
                  className={`w-2 h-2 rounded-full transition-smooth ${
                    Math.floor(currentIndex / projectsPerView) === index
                      ? 'bg-primary'
                      : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="border-primary/30 text-primary hover:bg-primary/10"
              disabled={currentIndex + projectsPerView >= projects.length}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((project, index) => (
              <Card key={`${project.title}-${index}`} className="bg-card-gradient border-border/50 shadow-elegant hover:shadow-glow transition-smooth hover:scale-[1.02] group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                    />
                    <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-80 transition-smooth flex items-center justify-center">
                      <div className="flex gap-3">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-skill-badge border-primary/20 text-foreground/80 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={nextSlide}
              disabled={currentIndex + 1 >= projects.length}
              className="border-primary/30 text-primary hover:bg-primary/10"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}