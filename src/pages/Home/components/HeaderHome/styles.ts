import styled from 'styled-components'
import backgroundIntroImg from '../../../../assets/backgroundIntroPNG.png'
export const HeaderHomeContainer = styled.div`
  display: flex;
  height: 36rem;
  align-items: center;
  justify-content: center;
  background: url(${backgroundIntroImg});
  margin: 0 5.5rem;
  left: 5.5rem;
  right: -5.5rem;
  top: 8.0625rem;
`

export const HeaderHomeContent = styled.div`
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
  margin-bottom: 3.75rem;
  gap: 1rem;
  left: calc(50% - 36.75rem / 2 - 16.625rem);
  top: calc(50% - 12rem / 2 - 5.125rem);
`

export const HomeTitle = styled.text`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 3rem;
  line-height: 3.875rem;
`

export const HomeHeaderSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 5.25rem;
  justify-content: space-around;
  align-items: baseline;

  span {
    display: flex;
    height: 2rem;

    gap: 0.75rem;
    align-items: center;
    justify-content: center;
    line-height: 1.3rem;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 1rem;
    font-weight: 400;
  }

  .shopIcon {
    background-color: aqua;
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
  }
  .timerIcon {
    background-color: aqua;
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
  }
  .coffeeIcon {
    background-color: aqua;
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
  }
  .packageIcon {
    background-color: aqua;
    height: 2rem;
    width: 2rem;
    padding: 0.5rem;
    border-radius: 50%;
  }
`

export const HomeHeaderContainer = styled.div``

export const HomeHeaderImg = styled.img``
