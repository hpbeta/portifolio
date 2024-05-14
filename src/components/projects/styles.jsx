import { styled } from "styled-components"

export const Container = styled.div`
  text-align: center;
  margin: 0 auto ;
  width: 300px;
h2{
  margin-bottom: 20px;
  font-size: 30px;
}
`

export const Image = styled.img`
  width: 500px;
  height: 400px;
  @media(max-width: 414px){
     width: 100%;
     height: 240px;
    }
`