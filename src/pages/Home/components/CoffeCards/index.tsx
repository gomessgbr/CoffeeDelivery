import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Amount } from '../../../../components/Amount'
import {
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeCardFooter,
  Tags,
  AmountWrapper,
} from './styles'

export interface CoffeeInt {
  id: string
  tags: string[]
  name: string
  price: string
  description: string
  photo: string
}

interface CoffeeProps {
  coffee: CoffeeInt
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState(1)
  
  return (
    <CoffeeCardContainer>
      <CoffeeCardDescription>
        <img src="/CoffeesImg/tradicional.png" alt="" />
        <Tags>
          <span>Tradicional</span>
        </Tags>
        <span className="CoffeeName">Expresso tradicional</span>
        <span className="CoffeeDescription">
          O tradicional café feito com água quente e grãos moídos
        </span>
      </CoffeeCardDescription>

      <CoffeCardFooter>
        <div>
          <p>R$</p> <h1>9,90</h1>
        </div>

        <AmountWrapper>
          <Amount amount={10} onDecrease={() => {}} onIncrease={() => {}} />

          <button>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AmountWrapper>
      </CoffeCardFooter>
    </CoffeeCardContainer>
  )
}
