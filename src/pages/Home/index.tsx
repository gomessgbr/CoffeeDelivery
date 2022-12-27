import { CoffeesContent, HomeContainer } from './styles'

import { HeaderHome } from './components/HeaderHome'

// import { OurCoffees } from './components/OurCoffee'
import { coffees } from '../../data/coffees'
import { CoffeeCard } from './components/CoffeCards'

export function Home() {
  return (
    <HomeContainer>
      <HeaderHome />
      <h1>Nossos Cafés</h1>
      <CoffeesContent>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffeesContent>
    </HomeContainer>
  )
}
