import { useEffect, useState } from 'react'
import { useCart } from '../../../../hooks/useCart'
import { CoffeeCartCard } from '../CoffeeCartCard'

import { ConfirmCartContainer } from './styles'

export function ConfirmCart() {
  const { cartItems } = useCart()

  const deliveryFee = 3.99
  const [subTotalPrice, setSubTotalPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const subTotal = cartItems.reduce((total, item) => {
      return total + item.price * item.amount
    }, 0)
    setSubTotalPrice(subTotal)
    setTotalPrice(subTotal + deliveryFee)
  }, [cartItems])

  return (
    <ConfirmCartContainer>
      <h1
        style={{
          fontFamily: 'Baloo 2',
          fontWeight: '700',
          fontSize: '1.125rem',
          lineHeight: '130%',
        }}
      >
        Cafés selecionados
      </h1>
      <div>
        {cartItems.map((card) => {
          return (
            <CoffeeCartCard
              key={card.id}
              id={card.id}
              name={card.name}
              photo={card.photo}
              price={card.price}
              amount={card.amount}
            />
          )
        })}
        <div>
          <div className="items">
            <p className="minSize">Total de itens</p>
            <p className="minSize">Entrega</p>
            <h3 className="maxSize">Total</h3>
          </div>

          <div className="itemsValue">
            <p className="minSize">R$ {subTotalPrice.toFixed(2)}</p>
            <p className="minSize">R$ {deliveryFee}</p>
            <h3 className="maxSize">R$ {totalPrice.toFixed(2)}</h3>
          </div>
        </div>

        <button
          form="checkoutForm"
          type="submit"
          style={{ fontFamily: 'Roboto' }}
        >
          CONFIRMAR PEDIDO
        </button>
      </div>
    </ConfirmCartContainer>
  )
}
