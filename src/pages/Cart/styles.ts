import styled from 'styled-components'

export const CartContainer = styled.div`
  margin-right: 5rem;
  height: 90vh;
`

export const CartTitleArea = styled.strong`
  display: flex;
  align-items: flex-start;
  gap: 31.375rem;
`
export const CartTitles = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;

  margin-bottom: 0.93rem;
  color: ${({ theme }) => theme.colors['gray-700']};
`

export const FormArea = styled.form`
  width: 35rem;
  height: 13.5rem;
  display: flex;
`

export const AddressArea = styled.div`
  padding: 2rem;
  width: 40rem;
  height: 23.25rem;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors['gray-100']};
`

export const HeaderWrapper = styled.header`
  display: flex;
  margin-bottom: 2rem;
  gap: 0.5rem;

  .subtitle {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['gray-700']};
    margin-bottom: 2px;
  }

  .description {
    font-size: 0.93rem;
    color: ${({ theme }) => theme.colors['gray-600']};
  }
`

export const DefaultInput = styled.input`
  background: #dedede;

  border: 2px solid ${({ theme }) => theme.colors['gray-300']};
  border-radius: 5px;

  height: 2.625rem;
  margin-bottom: 1rem;

  padding: 1rem;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors['purple-200']};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const PaymentContainer = styled.div`
  min-width: 40rem;
  height: 12.93rem;
  margin-top: 0.75rem;
  margin-right: 2rem;

  border-radius: 8px;
  background: ${({ theme }) => theme.colors['gray-100']};

  padding: 2rem;

  .header {
    display: flex;
  }

  .subtitle {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors['gray-700']};
    margin-left: 0.5rem;
  }

  .description {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['gray-600']};
    margin-left: 0.5rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  border: none;

  justify-content: center;
  max-width: 40rem;
  gap: 0.75rem;

  margin-top: 3.437rem;

  .iconButton {
    margin-right: 0.75rem;
  }

  .money {
    margin-left: -3.5rem;
    display: flex;
    align-items: center;
  }
`

interface ButtonProps {
  isSelected?: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 11.125rem;
  height: 3.187rem;

  border-radius: 8px;

  background: ${({ theme }) => theme.colors['gray-300']};

  color: ${({ theme }) => theme.colors['gray-600']};

  font-size: 0.75rem;

  transition: 0.2s ease;

  border: 1px solid
    ${({ theme, isSelected }) =>
      isSelected ? theme.colors['purple-200'] : 'transparent'};

  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors['purple-100'] : theme.colors['gray-300']};

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`
