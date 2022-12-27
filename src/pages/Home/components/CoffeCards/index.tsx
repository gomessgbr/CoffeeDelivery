import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'
import {
  CoffeeCardContainer,
  CoffeCardFooter,
  Tags,
  AmountButton,
  AmountContent,
} from './styles'

export interface CoffeeInt {
  id: number
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
  const { addToCart } = useCart()
  function handleIncrease() {
    setAmount((prevState) => prevState + 1)
  }
  function handleDecrease() {
    setAmount((prevState) => prevState - 1)
  }

  function handleAddToCart() {
    const AddCoffee = {
      ...coffee,
      amount,
    }

    addToCart(AddCoffee)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <CoffeeCardContainer>
      <img src={`/CoffeesImg/${coffee.photo}`} alt="" />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={`${coffee.id}${tag}`}>{tag}</span>
        })}
      </Tags>
      <span className="CoffeeName">{coffee.name}</span>
      <span className="CoffeeDescription">{coffee.description}</span>
      <CoffeCardFooter>
        <p>
          R$ <span>{formattedPrice}</span>
        </p>

        <AmountContent>
          <AmountButton disabled={amount <= 1} onClick={handleDecrease}>
            <Minus weight="bold" />
          </AmountButton>
          <p className="itemsInCart">{amount}</p>
          <AmountButton onClick={handleIncrease}>
            <Plus weight="bold" />
          </AmountButton>
        </AmountContent>
        <button className="cartButton" onClick={handleAddToCart}>
          <ShoppingCart size={20} weight="fill" />
        </button>
      </CoffeCardFooter>
    </CoffeeCardContainer>
  )
}
