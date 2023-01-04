import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import {
  CoffeeCartCardContainer,
  CounterButton,
  CounterWrapper,
  MidWrapper,
  ProductValue,
  RemoveItemButton,
} from './styles'

interface CartItemProps {
  id: number
  name: string
  photo: string
  price: number
  amount: number
}

export function CoffeeCartCard({
  id,
  name,
  photo,
  price,
  amount,
}: CartItemProps) {
  const { changeCartItem, removeCartItem } = useCart()
  const [totalValue, setTotalValue] = useState(price * amount)

  function handleIncreaseAmount() {
    changeCartItem(id, 'increase')
    setTotalValue(totalValue + price)
  }

  function handleDeacreaseAmount() {
    if (amount > 1) {
      changeCartItem(id, 'decrease')
      setTotalValue(totalValue - price)
    } else if (amount >= 1) {
      alert('Teste')
    }
  }

  function handleRemoveCoffe() {
    removeCartItem(id)
  }

  return (
    <CoffeeCartCardContainer>
      <img
        className="coffeImg"
        src={`/CoffeesImg/${photo}`}
        alt="Coffee image"
      />

      <MidWrapper>
        <p className="coffeTypeText">{name}</p>
        <div className="buttonsWrapper">
          <CounterWrapper>
            <CounterButton type="button" onClick={handleDeacreaseAmount}>
              <Minus weight="bold" />
            </CounterButton>
            <p className="itemsInCart">{amount}</p>
            <CounterButton type="button" onClick={handleIncreaseAmount}>
              <Plus weight="bold" />
            </CounterButton>
          </CounterWrapper>
          <RemoveItemButton type="button" onClick={handleRemoveCoffe}>
            <Trash size={16} color="#8047F8" />
            REMOVER
          </RemoveItemButton>
        </div>
      </MidWrapper>
      <ProductValue>
        <p>R$</p>
        <span>{totalValue.toFixed(2)}</span>
      </ProductValue>
    </CoffeeCartCardContainer>
  )
}
