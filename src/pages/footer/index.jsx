import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-bold text-2xl bg-[linear-gradient(to_right,#7b90d5_0%,#131b2e_100%)] bg-clip-text text-transparent">
              João Lucas
            </h3>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} - Todos os direitos reservados
            </p>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <a
              href="https://github.com/hpbeta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-600 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/hpbeta"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-blue-600  transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-2 p-2  rounded-full hover:text-blue-600  cursor-pointer transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
