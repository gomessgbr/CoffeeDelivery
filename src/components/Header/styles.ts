import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 6.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
  margin: 0 10rem;
`

export const HeaderNav = styled.nav`
  display: flex;
  gap: 0.75rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors[`yellow-100`]};
    border-radius: 6px;
  }
`

export const LocaleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors['purple-100']};
  padding: 0.5rem;
  gap: 0.25rem;
  border-radius: 6px;
`

export const CountOfItensonCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 0.75rem;
  font-weight: bold;

  width: 1.25rem;
  height: 1.25rem;

  background: ${({ theme }) => theme.colors['yellow-300']};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`
