import {IoLogoHtml5, IoLogoJavascript, IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import { Container, ContainerAbilities, Icon } from "./styles";


export function Abilities(){
    return(
        <Container id="abilities">
            <h1>Habilidades</h1>

            <ContainerAbilities>
                <div>
                    <Icon as={IoLogoHtml5} />
                    <h2>HTML</h2>
                    <p>É uma linguagem de marcação usada para criar a estrutura e o conteúdo básico de páginas da web. Na programação web, o HTML é uma das tecnologias fundamentais junto com o CSS (Cascading Style Sheets) e o JavaScript.</p>
                </div>

                <div>
                    <Icon as={IoLogoCss3} />
                    <h2>CSS</h2>
                    <p>CSS, ou Cascading Style Sheets (Folhas de Estilo em Cascata), é uma linguagem de estilo usada para controlar a apresentação visual de documentos HTML e XML. Ela descreve como os elementos HTML devem ser exibidos na tela, incluindo layout, cores, fontes e outros aspectos visuais.</p>
                </div>

                <div>
                    <Icon as={IoLogoJavascript} />
                    <h2>JavaScript</h2>
                    <p>JavaScript é uma linguagem de programação de alto nível, dinâmica e orientada a objetos amplamente utilizada para desenvolvimento web. Foi originalmente criada para adicionar interatividade às páginas web.</p>
                </div>

                <div>
                    <Icon as={FaReact} />
                    <h2>React</h2>
                    <p>React é uma biblioteca JavaScript de código aberto desenvolvida pelo Facebook que é usada para criar interfaces de usuário (UI) interativas e dinâmicas. É uma das bibliotecas mais populares para o desenvolvimento de aplicativos web modernos e é amplamente adotada pela comunidade de desenvolvedores.</p>
                </div>
            </ContainerAbilities>
        </Container>
    )
}