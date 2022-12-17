import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
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

export const HomeContent = styled.div`
  display: flex;
  height: 86rem;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  margin: 3.375rem 10rem 10rem 10rem;
`
