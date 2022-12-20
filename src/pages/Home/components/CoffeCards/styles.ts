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

  .CoffeeName {
    font-family: 'Baloo 2';
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors['gray-700']};
    line-height: 130%;
    font-weight: 700;
  }

  .CoffeeDescription {
    font-family: 'Roboto';
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['gray-500']};
    line-height: 130%;
    font-weight: 400;
    margin-bottom: 2rem;
  }
`

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
    font-size: 0.625rem;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
    font-weight: 700;
  }
`

export const CoffeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    gap: 3px;
    p {
      line-height: 0.75rem;
    }
  }
`

export const AmountWrapper = styled.div`
  width: 7.5rem;
  > button {
    width: 2.375rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors['purple-300']};
    color: ${({ theme }) => theme.colors['gray-100']};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: 0.4s;
    &:hover {
      background: ${({ theme }) => theme.colors['purple-200']};
    }
  }
`
