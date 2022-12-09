import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 6.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`

export const HeaderNav = styled.nav`
  display: flex;
  gap: 2rem;
`

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme['purple-100']};
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
`
