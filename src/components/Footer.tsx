import { Heart, Code, Coffee } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-gradient-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="font-mono text-sm font-bold text-white">G</span>
              </div>
              <span className="font-inter font-bold text-lg text-gradient">
                Giordana.dev
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Desenvolvendo soluções digitais modernas com paixão pela tecnologia 
              e foco na experiência do usuário.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold text-card-foreground uppercase tracking-wider">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "Sobre" },
                { href: "#projects", label: "Projetos" },
                { href: "#skills", label: "Habilidades" },
                { href: "#services", label: "Serviços" },
                { href: "#contact", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm font-mono hover:translate-x-1 transform"
                  >
                    → {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-mono text-sm font-bold text-card-foreground uppercase tracking-wider">
              Contato
            </h3>
            <div className="space-y-3">
              <div className="text-sm">
                <span className="text-muted-foreground font-mono">Email: </span>
                <a 
                  href="mailto:giordanastumm7@gmail.com"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  giordanastumm7@gmail.com
                </a>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground font-mono">WhatsApp: </span>
                <a 
                  href="https://wa.me/554999527071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 transition-colors"
                >
                  +55 49 9952-7071
                </a>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground font-mono">Local: </span>
                <span className="text-card-foreground">Carazinho, RS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span className="font-mono">© {currentYear} Giordana Stumm.</span>
            <span>Todos os direitos reservados.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span className="font-mono">Feito com</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <Code className="w-4 h-4 text-accent" />
            <span className="font-mono">e</span>
            <Coffee className="w-4 h-4 text-amber-500" />
          </div>
        </div>

        {/* Tech Stack Credit */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs font-mono">
            Desenvolvido com React, TypeScript, Tailwind CSS e muito ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;