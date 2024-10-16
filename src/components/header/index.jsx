import { ContainerHeader } from "./styles";

export function Header({ scrollToSection }) {
  return (
    <ContainerHeader id="header">
      <a href="#">
        <p>
          João <span>Lucas</span>
        </p>
      </a>
      <nav>
        <ul>
          <a>
            <li onClick={() => scrollToSection("home")}>Home</li>
          </a>
          <a>
            <li onClick={() => scrollToSection("aboutMe")}>Sobre mim</li>
          </a>
          <a>
            <li onClick={() => scrollToSection("abilities")}>Habilidades</li>
          </a>
          <a>
            <li onClick={() => scrollToSection("projects")}>Projetos</li>
          </a>
          <a>
            <li onClick={() => scrollToSection("footer")}>Contato</li>
          </a>
        </ul>
      </nav>
    </ContainerHeader>
  );
}
