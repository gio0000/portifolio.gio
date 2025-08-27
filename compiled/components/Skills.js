const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: "💻",
            skills: [
                { name: "HTML5", level: 90, color: "from-orange-500 to-red-500" },
                { name: "CSS3", level: 85, color: "from-blue-500 to-cyan-500" },
                { name: "JavaScript", level: 80, color: "from-yellow-500 to-orange-500" },
                
            ]
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: [
                { name: "Python", level: 90, color: "from-green-500 to-blue-500" },
                { name: "Java", level: 85, color: "from-red-500 to-orange-500" },
                { name: "MySQL", level: 80, color: "from-blue-600 to-indigo-600" },
                { name: "Flask", level: 75, color: "from-gray-500 to-gray-700" },
                { name: "POO", level: 85, color: "from-purple-500 to-pink-500" },
            ]
        },
        {
            title: "Ferramentas & Outras",
            icon: "🛠️",
            skills: [
                { name: "Git/GitHub", level: 85, color: "from-gray-600 to-black" },
                { name: "Qt Designer", level: 80, color: "from-green-400 to-green-600" },
                { name: "Hardware", level: 90, color: "from-indigo-500 to-purple-600" },
                { name: "SQL", level: 80, color: "from-blue-500 to-purple-500" },
                { name: "PL", level: 75, color: "from-green-600 to-teal-600" },
            ]
        }
    ];
    const certifications = [
        "Técnico em Informática - Senac Carazinho",
        "Java e Lógica de Programação",
        "Inglês - Nível B2",
        "SQL/PL",
    ];
    return (React.createElement("section", { id: "skills", className: "py-20 px-4 sm:px-6 lg:px-8" },
        React.createElement("div", { className: "max-w-7xl mx-auto" },
            React.createElement("div", { className: "text-center mb-16 animate-fade-up" },
                React.createElement("p", { className: "font-mono text-accent text-sm uppercase tracking-wider mb-4" }, "Expertise t\u00E9cnica"),
                React.createElement("h2", { className: "text-4xl lg:text-6xl font-bold text-gradient mb-6" }, "Habilidades & Certifica\u00E7\u00F5es"),
                React.createElement("p", { className: "text-muted-foreground text-lg max-w-3xl mx-auto" }, "Tecnologias que domino e uso para criar solu\u00E7\u00F5es eficientes e modernas. Sempre aprendendo e evoluindo com as melhores pr\u00E1ticas do mercado.")),
            React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" }, skillCategories.map((category, categoryIndex) => (React.createElement("div", { key: categoryIndex, className: "bg-gradient-card rounded-xl p-8 border border-card-border hover-lift animate-fade-up", style: { animationDelay: `${categoryIndex * 0.2}s` } },
                React.createElement("div", { className: "text-center mb-8" },
                    React.createElement("div", { className: "text-4xl mb-4 animate-float" }, category.icon),
                    React.createElement("h3", { className: "text-2xl font-bold text-card-foreground mb-2" }, category.title),
                    React.createElement("div", { className: "w-16 h-1 bg-gradient-accent rounded mx-auto" })),
                React.createElement("div", { className: "space-y-6" }, category.skills.map((skill, skillIndex) => (React.createElement("div", { key: skillIndex, className: "group" },
                    React.createElement("div", { className: "flex items-center justify-between mb-2" },
                        React.createElement("span", { className: "font-mono text-sm text-card-foreground group-hover:text-accent transition-colors" }, skill.name),
                        React.createElement("span", { className: "font-mono text-xs text-muted-foreground" },
                            skill.level,
                            "%")),
                    React.createElement("div", { className: "w-full bg-surface rounded-full h-2 overflow-hidden" },
                        React.createElement("div", { className: `h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`, style: {
                                width: `${skill.level}%`,
                                animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                            } })))))))))),
            React.createElement("div", { className: "bg-gradient-card rounded-xl p-8 border border-card-border animate-fade-up" },
                React.createElement("div", { className: "text-center mb-8" },
                    React.createElement("div", { className: "text-4xl mb-4" }, "\uD83C\uDF93"),
                    React.createElement("h3", { className: "text-2xl font-bold text-card-foreground mb-2" }, "Certifica\u00E7\u00F5es & Forma\u00E7\u00E3o"),
                    React.createElement("div", { className: "w-16 h-1 bg-gradient-accent rounded mx-auto mb-6" })),
                React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, certifications.map((cert, index) => (React.createElement("div", { key: index, className: "flex items-center space-x-4 p-4 bg-surface rounded-lg border border-border hover:border-accent/30 transition-colors group" },
                    React.createElement("div", { className: "w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" }),
                    React.createElement("span", { className: "text-card-foreground font-mono text-sm group-hover:text-accent transition-colors" }, cert))))),
                React.createElement("div", { className: "mt-8 text-center" },
                    React.createElement("p", { className: "text-muted-foreground text-sm font-mono" }, "Sempre aprendendo e me atualizando com as \u00FAltimas tecnologias"))),
            React.createElement("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" },
                React.createElement("div", { className: "text-center p-6 bg-gradient-card rounded-xl border border-card-border hover-lift" },
                    React.createElement("div", { className: "text-3xl font-bold text-gradient mb-2" }, "2+"),
                    React.createElement("p", { className: "text-muted-foreground font-mono text-sm" }, "Anos de experi\u00EAncia")),
                React.createElement("div", { className: "text-center p-6 bg-gradient-card rounded-xl border border-card-border hover-lift" },
                    React.createElement("div", { className: "text-3xl font-bold text-gradient mb-2" }, "15+"),
                    React.createElement("p", { className: "text-muted-foreground font-mono text-sm" }, "Projetos desenvolvidos")),
                React.createElement("div", { className: "text-center p-6 bg-gradient-card rounded-xl border border-card-border hover-lift" },
                    React.createElement("div", { className: "text-3xl font-bold text-gradient mb-2" }, "10+"),
                    React.createElement("p", { className: "text-muted-foreground font-mono text-sm" }, "Tecnologias dominadas"))))));
};
export default Skills;
