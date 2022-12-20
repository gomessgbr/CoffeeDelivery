import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeCards'

import { CoffeeList, OurCoffeesContainer, HomeTitle } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="container">
      <HomeTitle>Nossos Cafés</HomeTitle>

      <CoffeeList>
        {coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />
        })}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
