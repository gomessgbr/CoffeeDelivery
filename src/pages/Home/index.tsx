import { HomeContainer } from './styles'

import { HeaderHome } from './components/HeaderHome'

import { OurCoffees } from './components/OurCoffee'

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />
      <OurCoffees />
    </HomeContainer>
  )
}
