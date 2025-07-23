import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-border/50 shadow-elegant">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-hero-gradient rounded-full flex items-center justify-center shadow-glow">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Software Engineering
                  </h3>
                  <p className="text-xl text-primary font-medium mb-4">TIIDELab</p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>2018</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Abuja, Nigeria</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-3 flex items-center gap-2">
                        <Award className="h-5 w-5 text-primary" />
                        Achievements
                      </h4>
                      <div className="space-y-2">
                        <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-foreground mr-2 mb-2">
                          🏆 Most Outstanding Team Honor Graduate
                        </Badge>
                        <Badge className="bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-foreground mr-2 mb-2">
                          🎖️ Exceptional Voluntary Service Honors Award
                        </Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-medium text-foreground mb-3">Key Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Software Engineering Principles",
                          "Full-Stack Development",
                          "Team Collaboration",
                          "Project Management",
                          "Problem Solving",
                          "Code Quality"
                        ].map((skill, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="bg-skill-badge border-primary/20 text-foreground/80"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Learning */}
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 shadow-glow">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-center mb-4 text-primary">
                Continuous Learning
              </h3>
              <p className="text-center text-muted-foreground">
                Constantly exploring new technologies and best practices through online courses, 
                documentation, and hands-on projects. Committed to staying current with industry trends 
                and emerging technologies in software development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}