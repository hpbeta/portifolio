import Projectcep from "../../assets/images/via-cep.png";
import ProjecListaDeTarefas from "../../assets/images/lista-de-tarefas.png";
import ProjecFormulario from "../../assets/images/image-formulario-js.png";
import ProjectGithub from "../../assets/images/github-react.png";
import ProjectTranslator from "../../assets/images/translator.png";
import { Container, ContainerList, ContainerProject } from "./style";
import { FaHtml5, FaReact, FaJs, FaCss3Alt } from "react-icons/fa";

export function MyProjects() {
  return (
    <Container id="projects">
      <h1>Projetos</h1>
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
        <a
          target="_blank"
          href="https://github.com/hpbeta/quest-js-intermediario">
          <img src={ProjecFormulario} alt="Projeto formulário com js" />
          <div>
            <h2>Projeto Formulário</h2>
            <p>
              Nesse projeto, desenvolvo um formulário com validação utilizando
              JavaScript. A aplicação permite que os usuários preencham
              informações, como nome, e-mail e mensagem. Ao enviar o formulário,
              o JavaScript verifica se todos os campos obrigatórios estão
              preenchidos corretamente, exibindo mensagens de erro quando
              necessário.
            </p>
            <ContainerList>
              <li>
                <FaHtml5 />
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

      <ContainerProject>
        <a target="_blank" href="https://github.com/hpbeta/lista-de-tarefas">
          <div>
            <h2>Projeto Lista de tarefas</h2>
            <p>
              Nesse projeto, desenvolvo uma aplicação de lista de tarefas (to-do
              list), onde os usuários podem adicionar, marcar como concluídas e
              remover tarefas. A interface permite que o usuário insira uma nova
              tarefa em um campo de texto, visualize a lista completa de tarefas
              pendentes e gerencie suas atividades com facilidade.
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
          <img src={ProjecListaDeTarefas} alt="Projeto via cep" />
        </a>
      </ContainerProject>
    </Container>
  );
}
