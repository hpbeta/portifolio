import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

   *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #202124;
   }
   body{
      color: #ffffff;
      font-family: "Roboto", sans-serif;      
   }
   ul{
    list-style: none;
   }
   a{
    text-decoration: none;
    color: #ffffff;
   }
`;
