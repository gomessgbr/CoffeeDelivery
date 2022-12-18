import { HomeContainer, HomeContent, HomeTitle } from './styles'

import { CoffeeCard } from './components/CoffeCards'
import { HeaderHome } from './components/HeaderHome'

import { coffees } from '../../data/coffees'

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />
      <HomeTitle>Nossos Cafés</HomeTitle>
      <HomeContent>
        {coffees.map((coffe) => (
          <CoffeeCard key={coffe.id} />
        ))}
      </HomeContent>
    </HomeContainer>
  )
}
