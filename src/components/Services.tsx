import { Globe, Wrench, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Sites Personalizados",
      description: "Criação de sites modernos e responsivos para pequenas empresas e empreendedores que buscam presença online profissional.",
      features: [
        "Design responsivo e moderno",
        "Otimização para SEO",
        "Integração com redes sociais",
        "Formulários de contato",
        "Performance otimizada",
      ],
      price: "A partir de R$ 800",
      highlight: false,
    },
    {
      icon: Code,
      title: "Desenvolvimento Full Stack",
      description: "Sistemas web completos e personalizados com tecnologias robustas para atender necessidades específicas do seu negócio.",
      features: [
        "Frontend moderno (React, HTML, CSS)",
        "Backend escalável (Python, Java)",
        "Banco de dados (MySQL)",
        "APIs RESTful",
        "Deploy e manutenção",
      ],
      price: "A partir de R$ 2.500",
      highlight: true,
    },
    {
      icon: Wrench,
      title: "Manutenção de Hardware",
      description: "Serviços completos de manutenção, upgrade e suporte técnico para computadores e equipamentos.",
      features: [
        "Formatação e instalação de SO",
        "Upgrade de componentes",
        "Limpeza e montagem de PCs",
        "Diagnóstico de problemas",
        "Backup e recuperação de dados",
      ],
      price: "A partir de R$ 100",
      highlight: false,
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Consulta inicial",
      description: "Conversamos sobre suas necessidades e objetivos para entender o escopo do projeto."
    },
    {
      step: "02", 
      title: "Proposta & Orçamento",
      description: "Envio uma proposta detalhada com cronograma, funcionalidades e investimento."
    },
    {
      step: "03",
      title: "Desenvolvimento",
      description: "Inicio o desenvolvimento mantendo você atualizado sobre o progresso."
    },
    {
      step: "04",
      title: "Entrega & Suporte",
      description: "Entrego o projeto finalizado com suporte para eventuais ajustes."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="font-mono text-accent text-sm uppercase tracking-wider mb-4">
            Como posso ajudar
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Serviços Oferecidos
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Soluções completas em tecnologia, desde criação de sites até desenvolvimento 
            de sistemas complexos e manutenção técnica.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-gradient-card rounded-xl p-8 border hover-lift animate-fade-up ${
                service.highlight 
                  ? "border-accent shadow-accent scale-105" 
                  : "border-card-border hover:border-accent/30"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-accent text-accent-foreground text-sm font-mono rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-accent group-hover:scale-110 transition-transform" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-card-foreground font-mono">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-accent">
                      {service.price}
                    </span>
                    <Button
                      size="sm"
                      variant={service.highlight ? "default" : "outline"}
                      className={service.highlight ? "bg-gradient-accent hover:shadow-accent" : "hover-scale"}
                      asChild
                    >
                      <a 
                        href="https://wa.me/554999527071" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Solicitar
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div className="bg-gradient-card rounded-xl p-8 border border-card-border animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Como Funciona
            </h3>
            <p className="text-muted-foreground">
              Meu processo de trabalho é simples e transparente
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div
                key={index}
                className="text-center group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-accent">
                    <span className="font-mono font-bold text-accent-foreground">
                      {item.step}
                    </span>
                  </div>
                  
                  {/* Connector line */}
                  {index < workflow.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -z-10" />
                  )}
                </div>
                
                <h4 className="font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="bg-gradient-card rounded-xl p-8 border border-card-border">
            <h3 className="text-2xl font-bold text-gradient mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato e vamos conversar sobre como posso ajudar a 
              transformar sua ideia em realidade digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-accent hover:shadow-accent hover-scale"
                asChild
              >
                <a 
                  href="https://wa.me/554999527071" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Conversar no WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver mais contatos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;