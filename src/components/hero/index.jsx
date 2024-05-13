import MinhaImagem from "../../assets/images/minhaImagem.png"
import { Container } from "./styles"

export function Hero(){
    return(
        <Container id="hero">
        <div>
        <p>Olá ✌</p>
        <h2>Sou o João Lucas</h2>
        <h3>Desenvolvedor Frontend</h3>
        </div>
        <img src={MinhaImagem} alt="Minha foto" />
        </Container>
    )
}