import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


  ::-webkit-scrollbar {
    display: none;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    scrollbar-color: transparent transparent !important;
    scrollbar-width: none;
    transition: scrollbar-color .3s;
    /* transition: all 0.3s; */
    -webkit-touch-callout: none;
    
    -webkit-tap-highlight-color: transparent;

    font-family: 'Poppins', sans-serif;

    /* transition: all 0.3s ease; */

    &::-moz-selection {
      /* Code for Firefox */
      color: #1d1b31;
      background: #ffb300;
    }

    &::selection {
      color: #1d1b31;
      background: #ffb300;
    }
  }

  *:not(:hover) {
    scrollbar-color: transparent transparent !important;
  }
`;
