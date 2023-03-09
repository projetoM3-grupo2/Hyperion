import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary-color: #FF008A;
        --secondary-color: #131313;
        --grey-0:#ffffff;
        --grey-1:#B1B1B1;
        --grey-2:#747474;
        --grey-3:#444444;
        --grey-35:#3C3C3C;
        --grey-4:#171717;
        --grey-5:#0A0708;
        --grey-rgba:rgba(15, 15, 15, 0.8);

        --Titles:1.6rem;
        --Subtitles:1.2rem;
        --text:1rem;
        --min-text:.5rem;

        --default-border: 4px;
        --border-secondary: 8px;
    }

    * {
        list-style: none;
        box-sizing: border-box;
        color: var(--grey-4)
    }

    button{
        cursor: pointer;
    }
`