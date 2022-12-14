import { HomeContainer } from './styles'

import { CoffeeCard } from './components/CoffeCards'
import { HeaderHome } from './components/HeaderHome'

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />
      <CoffeeCard />
    </HomeContainer>
  )
}
