import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Amount } from '../../../../components/Amount'
import {
  CoffeeCardContainer,
  CoffeCardFooter,
  Tags,
  AmountWrapper,
} from './styles'

export interface CoffeeInt {
  id: string
  tags: string[]
  name: string
  price: number
  description: string
  photo: string
}

interface CoffeeProps {
  coffee: CoffeeInt
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const [amount, setAmount] = useState(1)

  function handleIncrease() {
    setAmount((prevState) => prevState + 1)
  }
  function handleDecrease() {
    setAmount((prevState) => prevState - 1)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/CoffeesImg/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={`${coffee.id}${tag}`}>{tag}</span>
        })}
        <span>Tradicional</span>
      </Tags>
      <span className="CoffeeName">{coffee.name}</span>
      <span className="CoffeeDescription">{coffee.description}</span>

      <CoffeCardFooter>
        <div>
          <p>R$</p> <h1>{coffee.price}</h1>
        </div>

        <AmountWrapper>
          <Amount
            amount={amount}
            onDecrease={handleDecrease}
            onIncrease={handleIncrease}
          />

          <button>
            <ShoppingCart size={20} weight="fill" />
          </button>
        </AmountWrapper>
      </CoffeCardFooter>
    </CoffeeCardContainer>
  )
}
