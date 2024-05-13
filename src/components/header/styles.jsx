import { styled } from "styled-components";
import { HiOutlineLightBulb } from "react-icons/hi";

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  @media (max-width: 688px) {
    display: flex;
    flex-direction: column;
  }
  p {
    margin-left: 200px;
    font-size: 22px;
    transition: 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    @media (max-width: 688px) {
      text-align: center;
      margin: 0 auto;
    }
  }
  span {
    color: #ffff00;
  }
  ul {
    display: flex;
    gap: 20px;
    padding: 30px;
    a {
      &:hover {
        color: #ffff00;
        text-decoration: underline;
        cursor: pointer;
      }
    }
    @media(max-width: 414px){
      font-size: 12px;
    }
  }
`;

export const Icon = styled(HiOutlineLightBulb)`
  width: 28px;
  height: 28px;
  cursor: pointer;
`;
