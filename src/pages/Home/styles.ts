import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-bottom: 9.8rem;
  h1 {
    margin-left: 10rem;
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.colors['gray-700']};
  }
`

export const CoffeesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10rem 0 10rem 10rem;
  gap: 2rem;
`
