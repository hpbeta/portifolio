import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 150px;
  margin-top: 30px;
  @media (max-width: 855px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
    transition: 0.3s;
    &:hover {
      box-shadow: 0px 0px 0px 4px rgba(248, 246, 246, 0.918),
        0px 10px 15px -3px rgba(255, 255, 255, 0.966);
    }

    @media (max-width: 855px) {
      margin: -90px 0;
    }

    @media (max-width: 1024px) {
      width: 300px;
      height: 300px;
    }
  }
  p {
    font-size: 20px;
  }
  h2 {
    font-size: 50px;
    margin: 15px 0;
    @media (max-width: 414px) {
      font-size: 20px;
    }
  }
  h3 {
    font-size: 25px;
  }

  @keyframes float {
    0% {
      transform: translatey(0); 
    }
    50% {
      transform: translatey(-10px); 
    }
    100% {
      transform: translatey(0); 
    }
  }
`;
