import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * { 
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Inter', sans-serif;
    }

  body { 
    background-image: url("../public/gemini.png");
    color: #ffff;
    display: flex;
    
    @media (max-width: 980px) {
      
      /* background-size: 100%; */
    }
  }

` 