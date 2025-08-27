import { Mail, MessageCircle, Linkedin, Github, Instagram, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Resposta rápida para projetos e orçamentos",
      value: "+55 49 9952-7071",
      href: "https://wa.me/554999527071",
      color: "from-green-500 to-emerald-500",
      primary: true,
    },
    {
      icon: Mail,
      title: "Email",
      description: "Para propostas mais detalhadas",
      value: "giordanastumm7@gmail.com",
      href: "mailto:giordanastumm7@gmail.com",
      color: "from-blue-500 to-indigo-500",
      primary: false,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Conecte-se profissionalmente",
      value: "Giordana Stumm",
      href: "https://www.linkedin.com/in/giordana-stumm-13786133a",
      color: "from-blue-600 to-blue-800",
      primary: false,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/gio0000",
      color: "hover:text-gray-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/gio__tech",
      color: "hover:text-pink-400",
    },
  ];

  const info = [
    {
      icon: MapPin,
      text: "Carazinho, RS - Brasil",
    },
    {
      icon: Clock,
      text: "Seg-Sex: 8h às 18h",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="font-mono text-accent text-sm uppercase tracking-wider mb-4">
            Vamos trabalhar juntos
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Tem um projeto em mente? Precisa de suporte técnico? Ou quer apenas 
            conversar sobre tecnologia? Estou sempre disponível para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8 animate-fade-up">
            <div>
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Formas de Contato
              </h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block p-6 bg-gradient-card rounded-xl border hover-lift group transition-all duration-300 ${
                      method.primary 
                        ? "border-accent shadow-accent scale-102" 
                        : "border-card-border hover:border-accent/30"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform`}>
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-bold text-card-foreground group-hover:text-accent transition-colors">
                            {method.title}
                          </h4>
                          {method.primary && (
                            <span className="px-2 py-1 text-xs font-mono bg-accent/10 text-accent rounded border border-accent/20">
                              Preferencial
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {method.description}
                        </p>
                        <p className="font-mono text-accent text-sm">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-card rounded-xl p-6 border border-card-border">
              <h4 className="font-bold text-card-foreground mb-4">
                Informações Adicionais
              </h4>
              <div className="space-y-3">
                {info.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground font-mono text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Card */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-card rounded-xl p-8 border border-card-border h-full flex flex-col">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                  <MessageCircle className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-2">
                  Vamos Conversar!
                </h3>
                <p className="text-muted-foreground">
                  A melhor forma de começar é uma conversa simples
                </p>
              </div>

              <div className="flex-1 space-y-6">
                <div className="grid grid-cols-1 gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-accent hover:shadow-accent hover-scale"
                    asChild
                  >
                    <a
                      href="https://wa.me/554999527071"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Conversar no WhatsApp
                    </a>
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="hover-lift"
                    asChild
                  >
                    <a
                      href="mailto:giordanastumm7@gmail.com"
                      className="flex items-center justify-center gap-3"
                    >
                      <Mail className="w-5 h-5" />
                      Enviar Email
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-border">
                  <p className="text-center text-muted-foreground text-sm mb-4 font-mono">
                    Ou me encontre nas redes sociais
                  </p>
                  <div className="flex justify-center space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-surface hover:bg-surface-hover transition-all duration-300 hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 text-center">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-mono text-sm text-accent">
                    Resposta em até 2 horas
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl lg:text-2xl text-muted-foreground italic leading-relaxed">
              "A melhor forma de prever o futuro é criá-lo. 
              Vamos construir algo incrível juntos!"
            </blockquote>
            <p className="mt-4 font-mono text-accent">
              — Giordana Stumm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;