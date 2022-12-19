import { ShoppingCart } from 'phosphor-react'
import {
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeCardFooter,
  PlusButton,
  MinusButton,
  Tags,
} from './styles'

export interface CoffeeProps {
  id: string
  tags: string[]
  name: string
  price: string
  description: string
  photo: string
}

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardDescription>
        <img src="/CoffeesImg/tradicional.png" alt="" />
        <Tags>
          <span>Tradicional</span>
        </Tags>
        <span>Expresso tradicional</span>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeCardDescription>
      <CoffeCardFooter>
        <p>R$</p> <h1>9,90</h1>
        <div>
          <MinusButton>-</MinusButton>
          <span>1</span>

          <PlusButton>+</PlusButton>
        </div>
        <button>
          <ShoppingCart size={20} weight="fill" />
        </button>
      </CoffeCardFooter>
    </CoffeeCardContainer>
  )
}
