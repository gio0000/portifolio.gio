import { Code, Cpu, Globe, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Experiência completa em desenvolvimento frontend e backend com tecnologias modernas.",
    },
    {
      icon: Cpu,
      title: "Hardware Specialist",
      description: "Conhecimento técnico em manutenção, montagem e upgrade de equipamentos.",
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Criação de sites e aplicações web responsivas e otimizadas.",
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Técnica em Informática com certificações em desenvolvimento e linguagens.",
    },
  ];

  const journey = [
    {
      year: "2022",
      title: "Início na Programação",
      description: "Primeiros passos com Python e lógica de programação no curso técnico.",
    },
    {
      year: "2023",
      title: "Desenvolvimento Web",
      description: "Aprofundamento em HTML, CSS, JavaScript e primeiros projetos web.",
    },
    {
      year: "2024",
      title: "Especialização Full Stack",
      description: "Domínio de tecnologias avançadas e início dos projetos profissionais.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="font-mono text-accent text-sm uppercase tracking-wider mb-4">
            Conheça minha história
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Sobre Giordana
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-card-foreground">
                Desenvolvedora Full Stack & Técnica em Informática
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Olá! Sou <span className="text-accent font-semibold">Giordana Stumm</span>, 
                  uma desenvolvedora apaixonada por tecnologia e inovação. Minha jornada começou 
                  com a curiosidade sobre como as coisas funcionam no mundo digital.
                </p>
                
                <p>
                  Tenho experiência sólida em <span className="text-accent">desenvolvimento de interfaces modernas</span> 
                  com HTML, CSS, JavaScript e Qt Designer, além de trabalhar no backend com 
                  <span className="text-accent"> Python, Java e MySQL</span>. 
                </p>

                <p>
                  Minha formação técnica também inclui <span className="text-accent">manutenção de hardware</span>, 
                  o que me permite oferecer soluções completas, desde a concepção do software 
                  até a infraestrutura física necessária.
                </p>

                <p>
                  Acredito que a tecnologia deve ser acessível e funcional, sempre priorizando 
                  a <span className="text-accent">experiência do usuário</span> e a 
                  <span className="text-accent"> qualidade do código</span>.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-card-border">
                <div className="text-2xl font-bold text-gradient mb-1">2+</div>
                <div className="text-muted-foreground font-mono text-sm">Anos Desenvolvendo</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg border border-card-border">
                <div className="text-2xl font-bold text-gradient mb-1">15+</div>
                <div className="text-muted-foreground font-mono text-sm">Projetos Concluídos</div>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-card p-1 hover-lift">
                <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center overflow-hidden relative">
                  {/* Decorative elements */}
                  <div className="absolute inset-0 bg-gradient-accent opacity-10"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">👩‍💻</div>
                    <div className="font-mono text-accent text-sm">Giordana.dev</div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-accent rounded-full w-16 h-16 flex items-center justify-center animate-float shadow-accent">
                <Code className="w-8 h-8 text-accent-foreground" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-surface-elevated rounded-full w-12 h-12 flex items-center justify-center animate-float border border-border" style={{ animationDelay: "-1s" }}>
                <Cpu className="w-6 h-6 text-accent" />
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-card rounded-xl border border-card-border hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <item.icon className="w-12 h-12 text-accent mx-auto" />
              </div>
              <h4 className="font-bold text-card-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="bg-gradient-card rounded-xl p-8 border border-card-border animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Minha Jornada
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma evolução constante na busca por conhecimento e excelência técnica
            </p>
          </div>

          <div className="space-y-8">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 group animate-slide-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-accent">
                    <span className="font-mono font-bold text-accent-foreground">
                      {item.year}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 pb-8">
                  <h4 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;