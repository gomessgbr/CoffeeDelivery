import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  max-height: 34rem;
  align-items: center;
  justify-content: center;
  margin: 0 5.5rem;
  padding: 0;
  left: 5.5rem;
  right: -5.5rem;
  top: 8.0625rem;
`

export const HomeHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
`

export const HomeHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  width: 36.75rem;
  height: 12rem;
  gap: 1rem;
  left: calc(50% - 36.75rem / 2 - 16.625rem);
  top: calc(50% - 12rem / 2 - 5.125rem);
  background-color: aquamarine;
`

export const HomeTitle = styled.text`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.875rem;
`

export const HomeHeaderSubTitle = styled.div``

export const HomeHeaderImg = styled.img``
