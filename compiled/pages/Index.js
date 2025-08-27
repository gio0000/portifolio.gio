import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
    return (React.createElement("div", { className: "min-h-screen bg-gradient-hero" },
        React.createElement(Navigation, null),
        React.createElement(Hero, null),
        React.createElement(About, null),
        React.createElement(Projects, null),
        React.createElement(Skills, null),
        React.createElement(Services, null),
        React.createElement(Contact, null),
        React.createElement(Footer, null)));
};
export default Index;
