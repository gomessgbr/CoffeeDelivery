import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors['gray-100']};
  height: 19.375rem;
  width: 16rem;

  border-radius: 6px 36px 6px 36px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2rem 2.5rem 0;
  padding: 1.25rem;
  padding-top: 0;

  img {
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
  width: 15rem;
  display: flex;
  justify-content: center;

  p {
    font-size: 0.875rem;

    color: ${({ theme }) => theme.colors['gray-800']};
    span {
      font-family: 'baloo 2', sans-serif;
      font-size: 1.5rem;
      font-weight: 800;
      margin-right: 1.43rem;
    }
  }

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
    transition: 0.2s;
    &:hover {
      background: ${({ theme }) => theme.colors['purple-200']};
    }
  }
`

export const AmountWrapper = styled.div`
  width: 7.375rem;

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
    transition: 0.2s;
    &:hover {
      background: ${({ theme }) => theme.colors['purple-200']};
    }
  }
`

export const AmountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 4.5rem;
  border-radius: 8px;
  margin-right: 0.5rem;
  background: ${({ theme }) => theme.colors['gray-300']};

  p {
    color: ${({ theme }) => theme.colors['gray-800']};
  }
`

export const AmountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;

  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors['purple-200']};
  background: transparent;
  border: none;
  border-radius: 999px;
  margin: 0.5rem;

  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    filter: brightness(0.7);
  }
`
