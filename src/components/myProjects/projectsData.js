import Projectcep from "../../assets/images/via-cep.png";
import ProjectCoffeDelivery from "../../assets/images/coffe-delivery.png";
import ProjecDtMoney from "../../assets/images/dt-money.png";
import ProjectGithub from "../../assets/images/github-react.png";
import ProjectTranslator from "../../assets/images/translator.png";
import ProjectPomodoro from "../../assets/images/pomodoro.png";
import { FaHtml5, FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";

const projectData = [
  {
    id: 1,
    link: "https://github.com/hpbeta/coffe-delivery",
    image: ProjectCoffeDelivery,
    title: "Projeto Coffe Delivery",
    description:
      "A aplicação simula uma experiência de compras de café online, com foco em funcionalidade e design.",
    icons: [FaHtml5, FaReact, FaCss3Alt, BiLogoTypescript],
  },

  {
    id: 2,
    link: "https://github.com/hpbeta/dt-money",

    title: "Projeto Dt-Money",
    description:
      "Nesse projeto, desenvolvo uma aplicação que simula um controle financeiro, onde dá pra registrar e gerenciar transações de um jeito bem prático",
    icons: [FaHtml5, FaReact, FaCss3Alt, BiLogoTypescript],
    image: ProjecDtMoney,
  },

  {
    id: 3,
    link: "https://github.com/hpbeta/project-pomodoro",
    image: ProjectPomodoro,
    title: "Projeto Pomodoro",
    description:
      "Nesse projeto, desenvolvi uma aplicação Pomodoro para ajudar na organização do tempo e produtividade.",
    icons: [FaHtml5, FaReact, FaCss3Alt, BiLogoTypescript],
  },

  {
    id: 4,
    link: "https://github.com/hpbeta/buscador-de-cep",

    title: "Projeto Via-Cep",
    description:
      "Nesse projeto, desenvolvo uma aplicacão de consome a Api do ViaCep, onde usuários insere um Cep e a aplicação retorna automaticamente os dados",
    icons: [FaHtml5, FaReact, FaCss3Alt],
    image: Projectcep,
  },

  {
    id: 5,
    link: "https://github.com/hpbeta/github-react",
    image: ProjectGithub,
    title: "Projeto Git-Hub",
    description:
      "Nesse projeto, desenvolvo uma aplicação que consome a Api do GitHub e retorno todos os dados dos usuários",
    icons: [FaHtml5, FaReact, FaCss3Alt],
  },

  {
    id: 6,
    link: "https://github.com/hpbeta/translator-api",

    title: "Projeto Tradutor",
    description:
      "Nesse projeto, desenvolvo uma aplicação que consome a Api de tradutor, utilizando Tailwind CSS para estilização",
    icons: [FaHtml5, FaReact, FaCss3Alt, RiTailwindCssFill, FaJs],
    image: ProjectTranslator,
  },
];

export default projectData;
