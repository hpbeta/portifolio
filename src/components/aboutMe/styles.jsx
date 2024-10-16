import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
  margin: 150px auto;
`;
export const ContainerAboutMe = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  margin-top: 70px;
  span {
    color: #ffff00;
  }

  p {
    line-height: 30px;
    font-size: 20px;
    width: 1100px;
    text-align: center;
    @media (max-width: 1024px) {
      width: 850px;
    }
    @media (max-width: 867px) {
      width: 690px;
      margin-bottom: -90px;
      
    }
    @media (max-width: 688px) {
      width: 550px;
    }
    @media (max-width: 574px) {
      width: 450px;
      
    }
    @media (max-width: 470px) {
      width: 350px;
      
    }
  }
`;
