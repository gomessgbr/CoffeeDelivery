import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: #6123;
`

export const CoffeeContent = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors['gray-100']};
  width: 16rem;
  height: 19.4rem;

  flex-wrap: wrap;
  margin-bottom: 1rem;
`

export const CoffeeCardDescription = styled.div``

export const CoffeCardFooter = styled.div``
