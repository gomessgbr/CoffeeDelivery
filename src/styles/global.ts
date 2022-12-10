import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }



body{
    background: ${({ theme }) => theme['white-100']};
    max-width: 90rem;

    -webkit-font-smoothing: antialiased
}
    body, input, button, text{
        font-family: 'Roboto', sans-serif;
       
    }

`
