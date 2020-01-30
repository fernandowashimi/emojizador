import { createGlobalStyle } from 'styled-components';

const GlobalStyle: any = createGlobalStyle`
    body, html, #root {
        height: 100vh;
        padding: 0;
        margin: 0;
        outline: none;
    }

    body {
        background-color: #fce4ec;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Comic Sans MS', sans-serif;
    }
`;

export default GlobalStyle;