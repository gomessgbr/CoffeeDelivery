import { CartForm } from './components/CartForm'
import { ShoppingCart } from './components/ShoppingCart'

import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <CartForm />

      <ShoppingCart />
    </CartContainer>
  )
}
