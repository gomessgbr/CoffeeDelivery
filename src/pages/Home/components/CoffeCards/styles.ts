import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors['gray-100']};
  width: 16rem;
  height: 19.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 2.5rem 0;
`

export const CoffeeCardDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    text-align: center;
    margin: 0.5rem;
  }
`

export const CoffeCardFooter = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`

export const PlusButton = styled.button``
export const MinusButton = styled.button``
