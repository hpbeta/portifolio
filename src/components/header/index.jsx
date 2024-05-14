import { useContext } from "react";
import { ContainerHeader, Icon } from "./styles";
import { ThemeContext, themes } from "../../contexts/theme-contexts";

export function Header({scrollToSection}){
    const {theme, setTheme } = useContext(ThemeContext)

    function HandleClick(){
    
        if(theme === themes.light){
            setTheme(themes.dark)
        }else{
            setTheme(themes.light)
        }
    }

    return(
        <ContainerHeader id="header">
           <a href="#"><p>João <span>Lucas</span></p></a>
            <nav>
                <ul>
                     <a><li onClick={()=>scrollToSection("home")}>Home</li></a>
                     <a><li onClick={()=>scrollToSection("aboutMe")}>Sobre mim</li></a>
                     <a><li onClick={()=>scrollToSection("abilities")}>Habilidades</li></a>
                     <a><li onClick={()=>scrollToSection("projects")}>Projetos</li></a>
                     <a><li onClick={()=>scrollToSection("footer")}>Contato</li></a>
                </ul>
            </nav>
            <Icon onClick={HandleClick} />
        </ContainerHeader>
    )
}