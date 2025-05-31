import converz from "../../assets/lp-converz.png"
import lbMarketing from "../../assets/lp-marketing.png"
import sistemaPedidos from "../../assets/sistema-pedidos.png"
import coffeDelivery from "../../assets/coffe-delivery.png"
import furia from "../../assets/furia.png"
import avanti from "../../assets/avanti.png"
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      id: 1,
      name: "Agência converz",
      image: converz,
      tags: ["React", "Styled-Components"],
      description: "Site de portifólio para mostrar meu trabalho como freelancer",
       code: "https://github.com/hpbeta/converz",
      site: "https://www.converz.com.br/"
      
    },
    {
      id: 2,
      name: "LB-Marketing",
      image: lbMarketing,
      tags: ["React", "Tailwind Css"],
      description: "Serviço de freelancer para uma agência de Marketing com integração de google sheets, google analytics e meta Pixel.",
      code: "https://github.com/hpbeta/lb-marketing",
      site: "https://www.lbmarketing.com.br/"
    },
    {
      id: 3,
      name: "Sistema de Pedidos",
      image: sistemaPedidos,
      tags: ["React", "Styled-Components"],
      description: "Uma aplicação simples de sistema de pedidos onde você pode colocar o número da mesa, o nome do cliente e escolher o prato disponível no cardápio.",
      code: "https://github.com/hpbeta/gestor-pedidos",
      site: "https://gestor-pedidos-tau.vercel.app/"
    },
    {
      id: 4,
      name: "Coffe Delivery",
      image: coffeDelivery,
      tags: ["React", "Styled-Components"],
      description: "Uma aplicação que simula um delivery e cafés. Aqui você pode escolher qual café e a quantidade e enviar pro check-out, e também colocar o endereço para onde você queria enviar e também escolher a forma de pagamento",
      code: "https://github.com/hpbeta/coffe-delivery",
      site: "https://coffe-delivery-khaki.vercel.app/"
    },
    {
      id: 5,
      name: "Fúria chat-bot",
      image: furia,
      tags: ["React", "Styled-Components"],
      description: "Teste técnico para Fúria, onde o desafio era criar um chat-bot para fans da Fúria.",
      code: "https://github.com/hpbeta/chatbot-furia",
      site: "https://chatbot-furia-f7lzmh25e-hpbetas-projects.vercel.app/"
    },
    {
      id: 6,
      name: "Teste técnico Avanti",
      image: avanti,
      tags: [ "Java Script" ],
      description: "Este projeto foi desenvolvido como parte de um processo seletivo. A proposta foi criar a interface de um e-commerce fictício, utilizando HTML, CSS e JavaScript puro, com foco em responsividade e boa apresentação visual.",
      code: "https://github.com/hpbeta/desafio-tecnico-1",
      site: "https://hpbeta.github.io/desafio-tecnico-1/"
    },
  ];
  return (
    <main id="projects" className=" mt-20">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold">Meus projetos</h1>
        <span className="flex items-center justify-center bg-blue-700 m-auto w-[90px] h-[3px] mt-2"></span>
        <p className="mt-5 text-gray-600 text-center">
          Uma seleção dos meus trabalhos recentes em desenvolvimento web
        </p>
      </div>

      <div className="mt-10">
        <ul className="flex flex-wrap  justify-center m-auto gap-4  ">
          {projects.map((project) => (
            <li className=" bg-white w-90 rounded-t-xl" key={project.id}>
              {
                <>
                 <div className="flex items-center justify-center">
                     <img
                    className="w-90 h-50 rounded-t-xl"
                    src={project.image}
                    alt="Imagem do projeto"
                  />
                 </div>
                  <div className="p-5 h-70">
                    <h2 className="text-gray-900 text-2xl mb-2">
                      {project.name}
                    </h2>
                  <div className="flex flex-wrap gap-2 ">
                      {project.tags.map((tag, index) => (
                      <p className="bg-gray-200 rounded-md p-1 text-xs" key={index}> {tag}</p>
                    ))}
                  </div>
                    <p className="text-gray-500 mt-3 mb-4 h-20 overflow-hidden overflow-y-scroll ">{project.description}</p>
                    <div className="flex justify-between mt-10">
                        <a className="flex items-center gap-2 bg-gray-300 rounded-md p-1 w-25 hover:bg-blue-500 hover:text-white" href={project.code} target="_blank" >
                      <Github size={"18px"} />
                      Código
                    </a>
                    <a className="flex items-center gap-3 bg-blue-600 py-2 w-28 pl-4 rounded-md text-white hover:opacity-90" 
                    href={project.site} target="_blank">
                      <ExternalLink size={"18px"} />
                      Demo
                    </a>
                    </div>
                  </div>
                </>
              }
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
