import { Minus, Plus, Trash } from 'phosphor-react'
import { useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCardContainer } from './styles'

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
  console.log(photo)

  return (
    <CoffeeCartCardContainer>
      <img
        className="coffeImg"
        src={`/CoffeesImg/${photo}`}
        alt="Coffee image"
      />

      <div>
        <p className="coffeTypeText">{name}</p>
        <div className="buttonsWrapper">
          <div>
            <button onClick={handleDeacreaseAmount}>
              <Minus weight="bold" />
            </button>
            <p className="itemsInCart">{amount}</p>
            <button onClick={handleIncreaseAmount}>
              <Plus weight="bold" />
            </button>
          </div>
          <button onClick={handleRemoveCoffe}>
            <Trash size={16} color="#8047F8" />
            REMOVER
          </button>
        </div>
      </div>
      <div>
        <p>R$</p>
        <span>{totalValue.toFixed(2)}</span>
      </div>
    </CoffeeCartCardContainer>
  )
}
