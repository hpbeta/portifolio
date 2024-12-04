import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-top: 80px;
  }
`;

export const ContainerProject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 30px;
  height: 400px;
  border: 1px solid #808080;
  padding: 20px 30px;
  border-radius: 10px;

  @media (max-width: 820px) {
    height: 500px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 820px) {
      display: flex;
      flex-direction: column;
      text-align: center;
      width: 400px;

      img {
        width: 400px;
      }
    }
    @media (max-width: 430px) {
      width: 350px;
    }
    @media (max-width: 393px) {
      width: 300px;

      img {
        width: 340px;
      }
    }
  }

  img {
    width: 600px;
  }
`;

export const ContainerInfo = styled.div`
  width: 600px;

  h3 {
    font-size: 25px;
    margin-bottom: 20px;
  }

  @media (max-width: 820px) {
    width: 300px;
    margin: 0 auto;
  }
`;

export const Containerlist = styled.ul`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  list-style: none;

  svg {
    font-size: 25px;
  }

  @media (max-width: 820px) {
    justify-content: center;
  }
`;
