import { Github, Linkedin, Mail, MoveDown } from "lucide-react";
import joao from "../../assets/joao.jpg"

export function Hero() {
  return (
    <section id="hero" className=" flex  items-center justify-center p-2 lg:px-10">
      <div className="mt-10 flex flex-col items-center">
        <span className="text-blue-500 font-semibold mb-3 ">Olá, eu sou</span>
        <h1 className="font-bold text-2xl sm:text-4xl ">João Lucas</h1>
        <h2 className="font-bold bg-[linear-gradient(to_right,#7b90d5_0%,#131b2e_100%)] bg-clip-text text-transparent text-2xl sm:text-4xl"> Desenvolvedor web </h2>
        <p className="text-center mt-7 text-gray-500 sm:px-4">
          Desenvolvedor front-end especializado em criar experiências web
          modernas e responsivas com React e Tailwind CSS. Em transição de
          carreira da gastronomia para o desenvolvimento web.
        </p>

        <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row md:mt-15">
          <button className="flex items-center text-center  bg-blue-500 rounded-md px-12 py-2 text-white font-bold hover:opacity-90 cursor-pointer ">
            Ver Projetos <MoveDown size={"20px"} />
          </button>
          <button className= " border border-gray-200 cursor-pointer hover:bg-blue-400 px-4 py-2 rounded-md transition-all">Download CV</button>
        </div>
        <div className="flex items-center gap-4 mt-7 ">
          <a href="">
            <Github />
          </a>
          <a href="">
            <Linkedin />
          </a>
          <a href="">
            <Mail />
          </a>
        </div>
      </div>

      <div>
        <img className="hidden  border-2 border-gray-500  md:flex mt-30 w-[1250px] h-[600px] rounded-full lg:w-[900px]  " src={joao} alt="" />
      </div>
    </section>
  );
}
