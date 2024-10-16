import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 50px;
  border-top: 1px solid #808080;
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
