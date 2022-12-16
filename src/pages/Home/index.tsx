import { HomeContainer, HomeTitle } from './styles'

import { CoffeeCard } from './components/CoffeCards'
import { HeaderHome } from './components/HeaderHome'

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />
      <HomeTitle>Nossos Cafés</HomeTitle>

      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </HomeContainer>
  )
}
