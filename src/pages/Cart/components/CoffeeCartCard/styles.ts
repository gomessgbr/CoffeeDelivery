import styled from 'styled-components'

export const CoffeeCartCardContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 23rem;
  height: 5rem;
  margin-top: 2.5rem;

  .coffeImg {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  }

  &::after {
    display: block;
    position: absolute;
    bottom: -2rem;

    content: '';
    height: 1px;
    width: 23rem;

    background: ${({ theme }) => theme.colors['gray-300']};
  }
`

export const MidWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .coffeTypeText {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['gray-500']};
  }

  .buttonsWrapper {
    display: flex;
    margin-top: 0.5rem;
  }
`

export const RemoveItemButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 6rem;
  height: 2.375rem;

  border: none;
  border-radius: 6px;

  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors['gray-800']};
  background: ${({ theme }) => theme.colors['gray-300']};

  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`

export const ProductValue = styled.div`
  display: flex;
  align-self: flex-start;
  font-weight: bold;
  font-size: 1rem;
  gap: 0.25rem;

  margin-left: 3.125rem;
  margin-top: 0.5rem;

  color: ${({ theme }) => theme.colors['gray-800']};
`

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.375rem;
  width: 4.5rem;

  border-radius: 8px;
  margin-right: 0.5rem;
  background: ${({ theme }) => theme.colors['gray-300']};

  .itemsInCart {
    color: ${({ theme }) => theme.colors['gray-800']};
  }
`

export const CounterButton = styled.button`
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
