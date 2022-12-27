import styled from 'styled-components'

export const ConfirmCartContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CartSection = styled.section`
  .title {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;

    margin-bottom: 0.93rem;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`

export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 15.125rem;
  max-height: 999rem;
  width: 28rem;
  background: ${({ theme }) => theme.colors['gray-100']};
  border-radius: 6px 36px;
  padding: 0 1.5rem;
`
