import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Pedaleira Virtual para Guitarras",
      description: "Simulação avançada de pedais para guitarra desenvolvida com Python e Qt Designer. Interface intuitiva com efeitos em tempo real.",
      tech: ["Python", "Qt Designer", "Audio Processing"],
      github: "https://github.com/gio0000/Pedaleira-para-guitarra",
      image: "🎸",
      category: "Desktop App"
    },
    {
      title: "E-commerce de Guitarras",
      description: "Plataforma moderna de vendas online com foco em guitarras. Design responsivo e experiência de usuário otimizada.",
      tech: ["HTML", "CSS", "JavaScript", "E-commerce"],
      github: "https://github.com/gio0000/ecommerce-guitarras",
      image: "🛒",
      category: "Web App"
    },
    {
      title: "Plataforma de Agronomia",
      description: "Site especializado em serviços agrícolas com conteúdo técnico e ferramentas para profissionais do setor.",
      tech: ["Web Development", "Agricultural Tech"],
      github: "https://github.com/gio0000/site-agroneg-cios",
      image: "🌾",
      category: "Website"
    },
    {
      title: "Simulador de Planetas",
      description: "Ferramenta interativa para criação e análise de planetas com base em condições específicas e possibilidade de vida.",
      tech: ["JavaScript", "Physics Engine", "3D Graphics"],
      live: "https://gio0000.github.io/Planetario/",
      image: "🪐",
      category: "Simulation"
    },
    {
      title: "Sistema de Manutenção",
      description: "Projeto integrador focado em suporte técnico, manutenção preventiva e gestão de equipamentos.",
      tech: ["Hardware", "System Management"],
      linkedin: "https://www.linkedin.com/posts/giordana-stumm-13786133a_projeto-integrador-activity-7335079937172779008-zHq5",
      image: "🔧",
      category: "System"
    },
    {
      title: "Portfólio Interativo",
      description: "Portfólio moderno desenvolvido com React e design system avançado. Animações e interações fluidas.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      image: "⭐",
      category: "Portfolio"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="font-mono text-accent text-sm uppercase tracking-wider mb-4">
            Meu trabalho
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Projetos Destacados
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Uma seleção dos meus projetos mais significativos, desde aplicações desktop 
            até plataformas web modernas e ferramentas especializadas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-card rounded-xl p-6 border border-card-border hover-lift hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent rounded-full border border-accent/20">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-card-foreground group-hover:text-gradient transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono bg-surface rounded border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover-scale"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  
                  {project.live && (
                    <Button
                      size="sm"
                      className="bg-gradient-accent hover:shadow-accent hover-scale"
                      asChild
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}

                  {project.linkedin && (
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover-scale"
                    >
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Detalhes
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <p className="text-muted-foreground mb-6">
            Interessado em ver mais do meu trabalho?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="hover-glow"
            asChild
          >
            <a
              href="https://github.com/gio0000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos os projetos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;