import { CartForm } from './components/CartForm'
import { ConfirmCart } from './components/ConfirmCart'

import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <CartForm />
      <ConfirmCart />
    </CartContainer>
  )
}
