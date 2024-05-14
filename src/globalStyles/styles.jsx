import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   }
   body{
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.color};
   }
   ul{
    list-style: none;
   }
   a{
    text-decoration: none;
    color: #ffffff;
   }
`;
