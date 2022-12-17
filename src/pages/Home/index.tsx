import { HomeContainer, HomeContent, HomeTitle } from './styles'

import { CoffeeCard } from './components/CoffeCards'
import { HeaderHome } from './components/HeaderHome'

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />
      <HomeTitle>Nossos Cafés</HomeTitle>
      <HomeContent>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </HomeContent>
    </HomeContainer>
  )
}
