import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex fixed bg-white  justify-between p-6 shadow-sm md:fixed w-full top-0 z-50 ">
      <div>
        <a href="/" className=" font-bold text-2xl bg-[linear-gradient(to_right,#7b90d5_0%,#131b2e_100%)] bg-clip-text text-transparent">JL</a>
      </div>

      {/* mobile */}
      <nav
        className={`flex flex-col gap-7 mt-13 text-center md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#hero" className="group relative inline-block overflow-hidden">
          <span className="relative z-10">Início</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#aboutMe"
          className="group relative inline-block overflow-hidden"
        >
          <span className="relative z-10">Sobre</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#abilities"
          className="group relative inline-block overflow-hidden"
        >
          <span className="relative z-10">Habilidades</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#contact"
          className="group relative inline-block overflow-hidden"
        >
          <span className="relative z-10">Contato</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
      </nav>

      <div>
        <button className="cursor-pointer md:hidden" onClick={open}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* desktop */}

      <nav className="hidden md:flex gap-10">
        <a href="#hero" className="group relative inline-block overflow-hidden">
          <span className="relative z-10">Início</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#aboutMe"
          className="group relative inline-block overflow-hidden"
        >
          <span className="relative z-10">Sobre</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#skills"
          className="group relative inline-block overflow-hidden"
        >
          <span className="relative z-10">Habilidades</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
        <a
          href="#projects"
          className="group relative inline-block overflow-hidden"
        >
          <span className="relative z-10">Projetos</span>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-indigo-600 transition-all duration-300 ease-out group-hover:w-full"></span>
        </a>
      </nav>
    </header>
  );
}
