
import { Abilities } from "./components/abilities";
import { AboutMe } from "./components/aboutMe";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { GlobalStyles } from "./globalStyles/styles";
import { MyProjects } from "./myProjects";


export function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
 
  
    return(
      <>
        <Header scrollToSection={scrollToSection} />
        <Hero />
        <AboutMe />
        <Abilities />
        <MyProjects />
        <Footer />
        <GlobalStyles />
      </>
    )
}


