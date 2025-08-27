import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram, Mail } from "lucide-react";

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/gio0000", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/giordana-stumm-13786133a", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/gio__tech", label: "Instagram" },
    { icon: Mail, href: "mailto:giordanastumm7@gmail.com", label: "Email" },
  ];

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-1.5s" }} />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="font-mono text-accent text-sm uppercase tracking-wider animate-slide-in">
                Olá, eu sou
              </p>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="text-gradient block">Giordana</span>
                <span className="text-primary/80 font-mono text-3xl lg:text-4xl mt-4 block">
                  Desenvolvedora Full Stack
                </span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed">
                Criando experiências digitais modernas e funcionais com código limpo e design pensado no usuário. 
                Especializada em desenvolvimento web e manutenção de hardware.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-accent transition-all duration-300 hover:scale-105"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Projetos
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover-lift"
                onClick={() => window.open("https://wa.me/554999527071", "_blank")}
              >
                Vamos conversar
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-8">
              <span className="font-mono text-sm text-muted-foreground">Conecte-se:</span>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-surface hover:bg-surface-hover transition-all duration-300 hover:scale-110 hover-glow"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Image/Avatar Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-card p-1 hover-lift">
                <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                  <div className="w-full h-full bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-6xl lg:text-8xl font-bold text-gradient">G</span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float shadow-accent">
                <span className="font-mono text-sm font-bold text-accent-foreground">DEV</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-surface-elevated rounded-full flex items-center justify-center animate-float border border-border" style={{ animationDelay: "-2s" }}>
                <span className="font-mono text-xs text-muted-foreground">2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="p-2 rounded-full hover:bg-surface-hover transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;