import { Swiper, SwiperSlide } from "swiper/react"
import { Container, Image } from "./styles"
import  { useState, useEffect } from "react"
import data from"../../data/index"

export function Projetcs(){

    const [slidePerview, setSlidePerview] = useState(3)
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