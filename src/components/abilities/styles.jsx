import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 50px;
    margin: 50px 0 70px;
  }
  p {
    width: 400px;
    text-align: center;
  }
`;

export const ContainerAbilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 20px;
  max-width: 1200px;
  div {
    &:hover {
      color: #ffff00;
    }
    p {
      @media (max-width: 414px) {
        width: 300px;
      }
    }
  }
`;

export const Icon = styled.div`
  width: 100px;
  height: 100px;
`;
