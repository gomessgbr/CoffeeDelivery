import styled from 'styled-components'

export const CheckoutContainer = styled.div``

export const Title = styled.header`
  display: flex;
  flex-direction: column;

  .title {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;

    color: ${({ theme }) => theme.colors['yellow-300']};

    margin-bottom: 2.5rem;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      font-weight: 400;

      color: ${({ theme }) => theme.colors['gray-500']};
    }
  }
`

export const Main = styled.main`
  height: 16.875rem;
  width: 32.875rem;

  border: 1px solid ${({ theme }) => theme.colors['purple-200']};
  border-radius: 6px 36px;
  padding: 2rem;

  font-size: 1rem;
  color: ${({ theme }) => theme.colors['gray-800']};

  .clientInformation {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 2rem;
  }
  .column {
    display: flex;
    flex-direction: column;
  }

  .icon {
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors['purple-200']};
    border-radius: 50%;
  }

  .timer {
    background: ${({ theme }) => theme.colors['yellow-200']};
  }

  .dollar {
    background: ${({ theme }) => theme.colors['yellow-300']};
  }
`

export const Content = styled.div`
  display: flex;
  gap: 6.375rem;
`
