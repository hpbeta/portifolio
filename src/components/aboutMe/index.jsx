
import { Container, ContainerAboutMe } from "./styles"

export function AboutMe(){
    return(
        <Container id="aboutMe">
            <h1>Sobre mim</h1>
            <ContainerAboutMe>
                
                <p>Olá! Me chamo João Lucas e sou um desenvolvedor frontend em formação! Estou focado em estudar e aprimorar minhas habilidades em desenvolvimento web front-end. Já possuo uma base sólida em <span>HTML, CSS, JavaScript e React</span>, e atualmente estou me dedicando ao estudo do <span>TypeScript</span>. Estou constantemente buscando novas oportunidades para aprender e colaborar. Que tal uma troca de ideias para explorarmos possíveis oportunidades de colaboração?</p>
            </ContainerAboutMe>
        </Container>
    )
}