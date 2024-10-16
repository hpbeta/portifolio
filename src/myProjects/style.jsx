import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #202124;
  color: #ffffff;
  margin-top: 70px;
`;

export const ContainerProject = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  margin-bottom: 30px;
  border: 1px solid #808080;
  padding: 25px 20px;
  border-radius: 10px;

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 0;
    height: 350px;

    p,
    h2,
    li {
      display: none;
    }
  }

  @media (max-width: 592px) {
    height: 350px;
  }
  @media (max-width: 548px) {
    height: 250px;
  }

  img {
    width: 600px;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      box-shadow: 0px 0px 0px 4px rgba(248, 246, 246, 0.918),
        0px 10px 15px -3px rgba(255, 255, 255, 0.966);
    }

    @media (max-width: 1200px) {
      width: 550px;
    }
    @media (max-width: 560px) {
      width: 350px;
    }
  }
  p {
    width: 500px;
    margin-top: 10px;
    line-height: 20px;
  }
`;

export const ContainerList = styled.div`
  list-style: none;
  display: flex;
  gap: 10px;
  margin-top: 30px;

  svg {
    font-size: 30px;
    cursor: pointer;
  }
`;
