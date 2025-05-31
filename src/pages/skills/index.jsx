import * as Tabs from '@radix-ui/react-tabs';
import * as Progress from '@radix-ui/react-progress';

export function Skills() {
  const frontendSkills = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Responsive Design", level: 95 },
  ];

  const tools = [
    { name: "Git & GitHub", level: 85 },
    { name: "VS Code", level: 90 },
  ];

  const softSkills = [
    { name: "Trabalho em Equipe", level: 95 },
    { name: "Resolução de Problemas", level: 90 },
    { name: "Comunicação", level: 85 },
    { name: "Adaptabilidade", level: 95 },
    { name: "Gerenciamento de Tempo", level: 80 },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className=" mt-10 text-3xl md:text-4xl font-bold mb-4">Minhas Habilidades</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Tecnologias e ferramentas com as quais trabalho
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tabs.Root defaultValue="frontend">
            <Tabs.List className="grid w-full grid-cols-3 mb-8">
              <Tabs.Trigger
                value="frontend"
                className="py-2 text-center cursor-pointer border-b-2 border-transparent data-[state=active]:border-blue-600"
              >
                Frontend
              </Tabs.Trigger>
              <Tabs.Trigger
                value="tools"
                className="py-2 text-center cursor-pointer border-b-2 border-transparent data-[state=active]:border-blue-600"
              >
                Ferramentas
              </Tabs.Trigger>
              <Tabs.Trigger
                value="soft"
                className="py-2 text-center cursor-pointer border-b-2 border-transparent data-[state=active]:border-blue-600"
              >
                Soft Skills
              </Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="frontend">
              <div className="pt-6 space-y-6">
                {frontendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress.Root
                      className="h-2 bg-gray-300 rounded overflow-hidden"
                      value={skill.level}
                      max={100}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <Progress.Indicator
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </Progress.Root>
                  </div>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="tools">
              <div className="pt-6 space-y-6">
                {tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress.Root
                      className="h-2 bg-gray-300 rounded overflow-hidden"
                      value={skill.level}
                      max={100}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <Progress.Indicator
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </Progress.Root>
                  </div>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="soft">
              <div className="pt-6 space-y-6">
                {softSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress.Root
                      className="h-2 bg-gray-300 rounded overflow-hidden"
                      value={skill.level}
                      max={100}
                      aria-label={`${skill.name} proficiency`}
                    >
                      <Progress.Indicator
                        className="bg-blue-600 h-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      />
                    </Progress.Root>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
}