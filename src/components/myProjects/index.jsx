import Projectcep from "../../assets/images/via-cep.png";
import ProjectCoffeDelivery from "../../assets/images/coffe-delivery.png";
import ProjecDtMoney from "../../assets/images/dt-money.png";
import ProjectGithub from "../../assets/images/github-react.png";
import ProjectTranslator from "../../assets/images/translator.png";
import ProjectPomodoro from "../../assets/images/pomodoro.png";
import { Container, ContainerList, ContainerProject } from "./style";
import { FaHtml5, FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";

export function MyProjects() {
  return (
    <Container id="projects">
      <h1>Projetos</h1>

      <ContainerProject>
        <a target="_blank" href="https://github.com/hpbeta/coffe-delivery">
          <div>
            <h2>Projeto Coffe Delivery</h2>
            <p>
              A aplicação simula uma experiência de compras de café online, com
              foco em funcionalidade e design.
            </p>
            <ContainerList>
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <BiLogoTypescript />
              </li>
              <li>
                <FaCss3Alt />
              </li>
            </ContainerList>
          </div>
          <img src={ProjectCoffeDelivery} alt="Projeto Coffe Delivery" />
        </a>
      </ContainerProject>

      <ContainerProject>
        <a target="_blank" href="https://github.com/hpbeta/dt-money">
          <img src={ProjecDtMoney} alt="Projeto Dt-Money" />
          <div>
            <h2>Dt-Money</h2>
            <p>
              Nesse projeto, desenvolvo um projeto que simula um controle
              financeiro, onde dá pra registrar e gerenciar transações de um
              jeito bem prático.
            </p>
            <ContainerList>
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <FaCss3Alt />
              </li>
              <li>
                <BiLogoTypescript />
              </li>
            </ContainerList>
          </div>
        </a>
      </ContainerProject>

      <ContainerProject>
        <a target="_blank" href="https://github.com/hpbeta/project-pomodoro">
          <img src={ProjectPomodoro} alt="Projeto Pomodoro" />
          <div>
            <h2>Projeto Pomodoro</h2>
            <p>
              Nesse projeto, desenvolvi uma aplicação Pomodoro para ajudar na organização do tempo e produtividade.
            </p>
            <ContainerList>
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <FaCss3Alt />
              </li>
              <li>
                <BiLogoTypescript />
              </li>
            </ContainerList>
          </div>
        </a>
      </ContainerProject>

      <ContainerProject>
        <a target="_blank" href="https://github.com/hpbeta/buscador-de-cep">
          <div>
            <h2>Projeto via-cep</h2>
            <p>
              Nesse projeto, desenvolvo uma aplicação que consome a API do
              ViaCEP, onde o usuário insere um CEP e a aplicação retorna
              automaticamente o endereço completo, incluindo rua, bairro, cidade
              e estado. Isso facilita o preenchimento de formulários e garante a
              precisão dos dados postais.
            </p>
            <ContainerList>
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <FaJs />
              </li>
              <li>
                <FaCss3Alt />
              </li>
            </ContainerList>
          </div>

          <img src={Projectcep} alt="Projeto via cep" />
        </a>
      </ContainerProject>

     

      <ContainerProject>
        <a target="_blank" href="https://github.com/hpbeta/github-react">
          <div>
            <h2>Projeto Git-Hub</h2>
            <p>
              Nesse projeto, desenvolvo uma aplicação que consome a API do
              GitHub para exibir informações sobre repositórios e usuários. O
              usuário pode buscar por um nome de usuário e visualizar detalhes,
              como repositórios públicos e informações do perfil.
            </p>
            <ContainerList>
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaJs />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <FaCss3Alt />
              </li>
            </ContainerList>
          </div>

          <img src={ProjectGithub} alt="Projeto Git-Hub" />
        </a>
      </ContainerProject>

      <ContainerProject>
        <a target="_blank" href="https://github.com/hpbeta/translator-api">
          <img src={ProjectTranslator} alt="Projeto tradutor" />

          <div>
            <h2>Projeto Tradutor</h2>
            <p>
              Nesse projeto, desenvolvo uma aplicação que consome uma API de
              tradutor, utilizando Tailwind CSS para estilização. A interface
              permite que os usuários insiram texto em um idioma e escolham o
              idioma de destino para tradução. Após o envio, a aplicação faz uma
              requisição à API e exibe a tradução de forma clara e acessível.{" "}
            </p>
            <ContainerList>
              <li>
                <FaHtml5 />
              </li>
              <li>
                <FaReact />
              </li>
              <li>
                <FaJs />
              </li>
              <li>
                <FaCss3Alt />
              </li>
            </ContainerList>
          </div>
        </a>
      </ContainerProject>
    </Container>
  );
}
