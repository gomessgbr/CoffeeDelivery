import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors['gray-100']};
  width: 100%;

  border-radius: 6px 36px 6px 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 2.5rem 0;
  padding: 1.25rem;
  padding-top: 0;
  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
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

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;
  span {
    background: ${({ theme }) => theme.colors['yellow-100']};
    color: ${({ theme }) => theme.colors['yellow-300']};
    font-size: 'Roboto';
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`
