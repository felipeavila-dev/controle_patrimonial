import {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 10px;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    overflow: hidden;

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }
  }  
  
`;
