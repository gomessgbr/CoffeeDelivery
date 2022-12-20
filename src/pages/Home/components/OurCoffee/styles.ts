import styled from 'styled-components'

export const OurCoffeesContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`

export const CoffeeList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 3.5rem;
`

export const HomeTitle = styled.p`
  margin-left: 10rem;
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.6rem;
  color: ${({ theme }) => theme.colors['gray-700']};
`
