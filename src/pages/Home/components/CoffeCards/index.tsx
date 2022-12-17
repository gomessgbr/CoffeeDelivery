import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeCardFooter,
  PlusButton,
  MinusButton,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardDescription>
        <img src="/CoffeesImg/tradicional.png" alt="" />
        <span>Tradicional</span>
        <span>Expresso tradicional</span>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeCardDescription>
      <CoffeCardFooter>
        <span>R$ 9,90</span>
        <div>
          <MinusButton>-</MinusButton>
          <span>1</span>

          <PlusButton>+</PlusButton>
        </div>
        <ShoppingCart size={20} weight="fill" />
      </CoffeCardFooter>
    </CoffeeCardContainer>
  )
}
