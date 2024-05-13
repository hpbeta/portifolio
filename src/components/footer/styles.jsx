import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(0,0,0,1) 9%, rgba(128,128,128,1) 100%);

  padding: 50px;
  margin-top: 20px;
  color: #000;
  h2 {
    margin-bottom: 20px;
    color: #ffffff;
  }
`;

export const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 5px;
  cursor: pointer;
  &:hover {
    color: #ffff00;
  }
`;
