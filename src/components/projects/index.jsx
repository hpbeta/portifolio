import { Swiper, SwiperSlide } from "swiper/react"
import Projectcep from "../../assets/images/image-cep.png"
import ProjecCompras from "../../assets/images/image-compras.png"
import ProjecFormulario from "../../assets/images/image-formulario-js.png"
import ProjectGithub from "../../assets/images/image-github.png"
import ProjecPokedex from "../../assets/images/image-pokedex.png"
import ProjectCountries from "../../assets/images/image-countries.png"
import ProjectList from "../../assets/images/image-list.png"
import { Container, Image } from "./styles"
import  { useState, useEffect } from "react"

export function Projetcs(){

    const [slidePerview, setSlidePerview] = useState(3)

    const data = [
        {id: "1", image: Projectcep, url:"https://github.com/hpbeta/via-cep" },
        {id: "2", image: ProjecCompras },
        {id: "3", image: ProjecFormulario, url: "https://github.com/hpbeta/quest-js-intermediario" },
        {id: "4", image: ProjectGithub, url: "https://github.com/hpbeta/project-github-react" },
        {id: "5", image: ProjecPokedex, url:"https://github.com/hpbeta/pokedex-react"},
        {id: "6", image: ProjectCountries, url: "https://github.com/hpbeta/rest-countries" },
        {id: "7", image: ProjectList, url: "https://github.com/hpbeta/lista-de-presenca" }
    ]
    useEffect(()=>{
        function HandleResize(){
            if(window.innerWidth < 900){
                setSlidePerview(1)
            }else{
                setSlidePerview(3)
            }
        }
        HandleResize()
        window.addEventListener("resize", HandleResize)

        return() =>{
            window.removeEventListener("resize", HandleResize)
        }
    },[])
    return(
    <Container id="projects">
         <h2>Meus Projetos</h2>
     <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     coverflowEffect={{
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: true,
     }}
      slidesPerView={slidePerview}
     pagination={{clickable: true}}
     navigation
     loop
     >
        {data.map((item)=>(
            <SwiperSlide key={item.id}>
                <a href={item.url} target="_blank">
                <Image src={item.image} alt="Slider" />
                </a>
            </SwiperSlide>
        ))}
     </Swiper>
    </Container>
    )
}