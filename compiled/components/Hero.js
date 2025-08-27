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
        var _a;
        (_a = document.querySelector("#about")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return (React.createElement("section", { className: "min-h-screen flex items-center justify-center relative overflow-hidden" },
        React.createElement("div", { className: "absolute inset-0 bg-gradient-hero" }),
        React.createElement("div", { className: "absolute top-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" }),
        React.createElement("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float", style: { animationDelay: "-1.5s" } }),
        React.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" },
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" },
                React.createElement("div", { className: "space-y-8 animate-fade-up" },
                    React.createElement("div", { className: "space-y-4" },
                        React.createElement("p", { className: "font-mono text-accent text-sm uppercase tracking-wider animate-slide-in" }, "Ol\u00E1, eu sou"),
                        React.createElement("h1", { className: "text-6xl lg:text-8xl font-bold leading-tight" },
                            React.createElement("span", { className: "text-gradient block" }, "Giordana"),
                            React.createElement("span", { className: "text-primary/80 font-mono text-3xl lg:text-4xl mt-4 block" }, "Desenvolvedora Full Stack")),
                        React.createElement("p", { className: "text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed" }, "Criando experi\u00EAncias digitais modernas e funcionais com c\u00F3digo limpo e design pensado no usu\u00E1rio. Especializada em desenvolvimento web e manuten\u00E7\u00E3o de hardware.")),
                    React.createElement("div", { className: "flex flex-col sm:flex-row gap-4" },
                        React.createElement(Button, { size: "lg", className: "bg-gradient-accent hover:shadow-accent transition-all duration-300 hover:scale-105", onClick: () => { var _a; return (_a = document.querySelector("#projects")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" }); } },
                            "Ver Projetos",
                            React.createElement(ArrowDown, { className: "ml-2 w-4 h-4" })),
                        React.createElement(Button, { variant: "outline", size: "lg", className: "hover-lift", onClick: () => window.open("https://wa.me/554999527071", "_blank") }, "Vamos conversar")),
                    React.createElement("div", { className: "flex items-center space-x-6 pt-8" },
                        React.createElement("span", { className: "font-mono text-sm text-muted-foreground" }, "Conecte-se:"),
                        React.createElement("div", { className: "flex space-x-4" }, socialLinks.map((link, index) => (React.createElement("a", { key: index, href: link.href, target: "_blank", rel: "noopener noreferrer", className: "p-2 rounded-lg bg-surface hover:bg-surface-hover transition-all duration-300 hover:scale-110 hover-glow", "aria-label": link.label },
                            React.createElement(link.icon, { className: "w-5 h-5 text-muted-foreground hover:text-primary transition-colors" }))))))),
                React.createElement("div", { className: "flex justify-center lg:justify-end animate-fade-in", style: { animationDelay: "0.3s" } },
                    React.createElement("div", { className: "relative" },
                        React.createElement("div", { className: "w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-card p-1 hover-lift" },
                            React.createElement("div", { className: "w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden" },
                                React.createElement("div", { className: "w-full h-full bg-gradient-primary rounded-full flex items-center justify-center" },
                                    React.createElement("span", { className: "text-6xl lg:text-8xl font-bold text-gradient" }, "G")))),
                        React.createElement("div", { className: "absolute -top-6 -right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float shadow-accent" },
                            React.createElement("span", { className: "font-mono text-sm font-bold text-accent-foreground" }, "DEV")),
                        React.createElement("div", { className: "absolute -bottom-6 -left-6 w-16 h-16 bg-surface-elevated rounded-full flex items-center justify-center animate-float border border-border", style: { animationDelay: "-2s" } },
                            React.createElement("span", { className: "font-mono text-xs text-muted-foreground" }, "2024"))))),
            React.createElement("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" },
                React.createElement("button", { onClick: scrollToAbout, className: "p-2 rounded-full hover:bg-surface-hover transition-colors", "aria-label": "Scroll to about section" },
                    React.createElement(ArrowDown, { className: "w-6 h-6 text-muted-foreground" }))))));
};
export default Hero;
