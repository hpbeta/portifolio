import { styled } from "styled-components"

export const Container = styled.div`
  text-align: center;
  margin: 90px ;
h2{
  margin-bottom: 20px;
  font-size: 30px;
}
`

export const Image = styled.img`
  width: 500px;
  height: 400px;
  @media(max-width: 414px){
     width: 350px;
     height: 300px;
    }
`