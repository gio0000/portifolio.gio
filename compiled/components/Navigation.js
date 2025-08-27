import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItems = [
        { href: "#about", label: "Sobre" },
        { href: "#projects", label: "Projetos" },
        { href: "#skills", label: "Habilidades" },
        { href: "#services", label: "Serviços" },
        { href: "#contact", label: "Contato" },
    ];
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        element === null || element === void 0 ? void 0 : element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };
    return (React.createElement("nav", { className: `fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-dark shadow-xl" : "bg-transparent"}` },
        React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement("div", { className: "flex items-center justify-between h-16" },
                React.createElement("div", { className: "flex items-center space-x-2" },
                    React.createElement("div", { className: "w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center" },
                        React.createElement("span", { className: "font-mono text-sm font-bold text-white" }, "G")),
                    React.createElement("span", { className: "font-inter font-bold text-lg text-gradient" }, "Giordana.dev")),
                React.createElement("div", { className: "hidden md:flex items-center space-x-8" },
                    navItems.map((item) => (React.createElement("button", { key: item.href, onClick: () => scrollToSection(item.href), className: "text-muted-foreground hover:text-primary transition-colors duration-200 font-mono text-sm hover:scale-110 transform" }, item.label))),
                    React.createElement(Button, { variant: "outline", size: "sm", onClick: () => scrollToSection("#contact"), className: "hover-glow" }, "Vamos conversar")),
                React.createElement(Button, { variant: "ghost", size: "sm", className: "md:hidden", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen) },
                    React.createElement("div", { className: "w-6 h-6 flex flex-col justify-center space-y-1" },
                        React.createElement("div", { className: `w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}` }),
                        React.createElement("div", { className: `w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}` }),
                        React.createElement("div", { className: `w-6 h-0.5 bg-primary transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}` })))),
            isMobileMenuOpen && (React.createElement("div", { className: "md:hidden absolute top-16 left-0 right-0 glass-dark border-t border-border animate-fade-in" },
                React.createElement("div", { className: "px-4 py-6 space-y-4" },
                    navItems.map((item) => (React.createElement("button", { key: item.href, onClick: () => scrollToSection(item.href), className: "block w-full text-left text-muted-foreground hover:text-primary transition-colors duration-200 font-mono py-2" }, item.label))),
                    React.createElement(Button, { variant: "outline", className: "w-full hover-glow", onClick: () => scrollToSection("#contact") }, "Vamos conversar")))))));
};
export default Navigation;
