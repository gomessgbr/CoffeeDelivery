import { CartForm } from './components/CartForm'
import { PaymentsForm } from './components/PaymentsForm'

import { CartContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <CartForm />
      <PaymentsForm />
      <div>
        <span>Cafés selecionados</span>
        <span>Total de itens</span>
        <span>Entrega</span>
        <span>Total</span>
        <input type="submit" value="Confirmar Pedido" />
      </div>
    </CartContainer>
  )
}
