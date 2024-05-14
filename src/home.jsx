import { useContext } from "react";
import { Abilities } from "./components/abilities";
import { AboutMe } from "./components/aboutMe";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Projetcs } from "./components/projects";
import { GlobalStyles } from "./globalStyles/styles";
import { ThemeContext } from "./contexts/theme-contexts";

export function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { theme } = useContext(ThemeContext)
  
    return(
      <>
        <Header scrollToSection={scrollToSection} />
        <Hero />
        <AboutMe />
        <Abilities />
        <Projetcs />
        <Footer />
        <GlobalStyles theme={theme} />
      </>
    )
}


