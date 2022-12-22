import styled from 'styled-components'

export const CartContainer = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`
