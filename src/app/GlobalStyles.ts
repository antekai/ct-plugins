import { createGlobalStyle } from "antd-style";

const GlobalStyles = createGlobalStyle`
*, *::before, *::after{
    box-sizing: border-box; 
}

body{
    margin: 0; 
    padding: 0; 
}

body, html{
    height: 100%; 
    scroll-behavior: smooth; 
}
`;

export default GlobalStyles;
