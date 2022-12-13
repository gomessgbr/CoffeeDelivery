import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }



body{
    background: ${({ theme }) => theme.colors['white-100']};
    color: ${({ theme }) => theme.colors['gray-600']};  
    -webkit-font-smoothing: antialiased
}
    body, input, button, text{
        font-family: ${({ theme }) => theme.fonts.regular};
        font-weight: 400;
       
    }

`
