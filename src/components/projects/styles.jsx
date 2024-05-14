import { styled } from "styled-components"

export const Container = styled.div`
  text-align: center;
  margin: 100px auto ;
  
h2{
  margin-bottom: 80px;
  font-size: 30px;
}
`

export const Image = styled.img`
  width: 500px;
  height: 400px;
  @media(max-width: 414px){
     width: 90%;
     height: 240px;
    }
`