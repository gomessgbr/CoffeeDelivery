import styled from 'styled-components'

export const OurCoffeesContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

export const HomeTitle = styled.p`
  margin-left: 10rem;
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors['gray-700']};
`
