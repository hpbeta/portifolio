import { AboutMe } from "./pages/aboutMe";
import { ChatbotFAQ } from "./pages/chatBot";
import { Footer } from "./pages/footer";
import { Header } from "./pages/header";
import { Hero } from "./pages/hero";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";


function App() {

  return (
    <>
    <Header />
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
    <Footer />
    <ChatbotFAQ />
    </>
  )
}

export default App
