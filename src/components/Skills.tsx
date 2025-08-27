const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "HTML5", level: 90, color: "from-orange-500 to-red-500" },
        { name: "CSS3", level: 85, color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "React", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Tailwind CSS", level: 85, color: "from-teal-400 to-blue-500" },
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
        { name: "Excel", level: 75, color: "from-green-600 to-teal-600" },
      ]
    }
  ];

  const certifications = [
    "Técnico em Informática - Senac Carazinho",
    "Java e Lógica de Programação",
    "Inglês - Nível B2",
    "Excel Avançado",
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <p className="font-mono text-accent text-sm uppercase tracking-wider mb-4">
            Expertise técnica
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold text-gradient mb-6">
            Habilidades & Certificações
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Tecnologias que domino e uso para criar soluções eficientes e modernas.
            Sempre aprendendo e evoluindo com as melhores práticas do mercado.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-gradient-card rounded-xl p-8 border border-card-border hover-lift animate-fade-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <div className="text-4xl mb-4 animate-float">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {category.title}
                </h3>
                <div className="w-16 h-1 bg-gradient-accent rounded mx-auto"></div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm text-card-foreground group-hover:text-accent transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-card rounded-xl p-8 border border-card-border animate-fade-up">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-2xl font-bold text-card-foreground mb-2">
              Certificações & Formação
            </h3>
            <div className="w-16 h-1 bg-gradient-accent rounded mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-surface rounded-lg border border-border hover:border-accent/30 transition-colors group"
              >
                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                <span className="text-card-foreground font-mono text-sm group-hover:text-accent transition-colors">
                  {cert}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground text-sm font-mono">
              Sempre aprendendo e me atualizando com as últimas tecnologias
            </p>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up">
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-card-border hover-lift">
            <div className="text-3xl font-bold text-gradient mb-2">2+</div>
            <p className="text-muted-foreground font-mono text-sm">Anos de experiência</p>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-card-border hover-lift">
            <div className="text-3xl font-bold text-gradient mb-2">15+</div>
            <p className="text-muted-foreground font-mono text-sm">Projetos desenvolvidos</p>
          </div>
          <div className="text-center p-6 bg-gradient-card rounded-xl border border-card-border hover-lift">
            <div className="text-3xl font-bold text-gradient mb-2">10+</div>
            <p className="text-muted-foreground font-mono text-sm">Tecnologias dominadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;