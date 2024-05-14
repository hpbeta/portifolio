import { Container, Icon } from "./styles";
import { FaLinkedin, FaInstagramSquare, FaWhatsappSquare, FaGithubSquare,} from "react-icons/fa";

export function Footer() {
  return (
    <Container id="footer">
      <h2>Contato</h2>
      <div>
        <a href="https://www.linkedin.com/in/hpbeta/" target="_blank"><Icon as={FaLinkedin} /></a>
        <a href="https://www.instagram.com/hp.beta/" target="_blank"><Icon as={FaInstagramSquare} /></a>
        <a href="https://api.whatsapp.com/send?phone=5531988309036" target="_blank"><Icon as={FaWhatsappSquare} /></a>
        <a href="https://github.com/hpbeta" target="_blank"><Icon as={FaGithubSquare} /></a>
      </div>
    </Container>
  );
}
