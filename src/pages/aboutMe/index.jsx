import { Book, Briefcase, GraduationCap } from "lucide-react";

export function AboutMe() {
  return (
    <section
      className="flex flex-col p-3 justify-center items-center mt-10 "
      id="aboutMe"
    >
      <div className="lg:flex flex-col">
        <h1 className="font-bold text-2xl text-center">
          Sobre mim
          <span className="flex items-center justify-center bg-blue-700 m-auto w-[90px] h-[3px] mt-2"></span>
        </h1>
        <p className="text-gray-700 mt-5 text-center">
          Minha jornada da gastronomia ao desenvolvimento web
        </p>
      </div>

      <div className="lg:flex gap-15">
        <div className=" flex flex-col lg:w-[500px] mt-13">
        <h2 className="font-bold mt-10 text-2xl">Olá! Sou o João Lucas 👋</h2>
        <p className="text-gray-700 mt-5 lg:mb-10 ">
          Sou um desenvolvedor web em transição de carreira, com experiência
          profissional anterior como sushiman na área da gastronomia. Essa
          experiência me trouxe disciplina, atenção aos detalhes e habilidades
          de trabalho em equipe que aplico agora no desenvolvimento de software.
        </p>

        <p className="text-gray-700 mt-5 lg:mb-10 ">
          Atualmente estou cursando Análise e Desenvolvimento de Sistemas e me
          dedicando intensamente ao estudo de tecnologias web modernas. Tenho
          uma base sólida em HTML, CSS, JavaScript e React com Tailwind, e estou
          sempre buscando expandir meus conhecimentos com projetos práticos.
        </p>

        <p className="text-gray-700 mt-5 ">
          Sou apaixonado por resolver problemas com código, aprender
          constantemente e trabalhar em equipe. Busco oportunidades para crescer
          na área de tecnologia e contribuir com projetos desafiadores.
        </p>
      </div>

      <div className=" mt-10">
        <div className=" flex gap-3 border border-gray-700 p-4 rounded-md">
          <div>
            <GraduationCap
              size={"35px"}
              className="bg-blue-200 p-1 text-blue-700  rounded-md"
            />
          </div>
          <div>
            <h2 className="font-bold ">Educação</h2>
            <p className="text-sm text-gray-700 mb-2">
              Minha Formação academica
            </p>
            <h2 className="font-bold">Análise e Desenvolvimento de Sistemas</h2>
            <p className="text-sm text-gray-700 mb-2">
              Estácio, 2024 - Presente
            </p>
            <h2 className="font-bold">Cursos Complementares</h2>
            <p className="text-sm text-gray-700">
              Desenvolvimento Web, React, JavaScript
            </p>
          </div>
        </div>

        <div className=" flex gap-3 mt-5 border border-gray-700 p-4 rounded-md">
          <div>
            <Briefcase
              size={"35px"}
              className="bg-blue-200 p-1 text-blue-700  rounded-md"
            />
          </div>
          <div>
            <h2 className="font-bold ">Experiência</h2>
            <p className="text-sm text-gray-700 mb-2">
              Minha trajetória profissional
            </p>
            <h2 className="font-bold">Sushiman</h2>
            <p className="text-sm text-gray-700 mb-2">
              Restaurante Japonês, 2018 - 2022
            </p>
            <h2 className="font-bold">
              Projetos Freelance em Desenvolvimento Web
            </h2>
            <p className="text-sm text-gray-700">2025 - Presente</p>
          </div>
        </div>
        <div className=" flex gap-3 mt-5 border border-gray-700 p-4 rounded-md">
          <div>
            <Book
              size={"35px"}
              className="bg-blue-200 p-1 text-blue-700  rounded-md"
            />
          </div>
          <div>
            <h2 className="font-bold ">Aprendizado Contínuo</h2>
            <p className="text-sm text-gray-700 mb-2">
              O que estou estudando agora
            </p>
            <h2 className="font-bold">React Avançado e Tailwind</h2>
            <p className="text-sm text-gray-700 mb-2">
              Desenvolvimento de aplicações web modernas
            </p>
            <h2 className="font-bold">Node.js e Express</h2>
            <p className="text-sm text-gray-700">
              Desenvolvimento de APIs e backend
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
