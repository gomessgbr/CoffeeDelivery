import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { CartForm } from './components/CartForm'

import { CartContainer } from './styles'

export function Cart() {
  const { colors } = useTheme()
  return (
    <CartContainer>
      <CartForm />
      <div>
        <CurrencyDollar size={22} color={colors['purple-200']} />
        <h1>Pagamento</h1>
        <span>O pagamento é feito na entrega</span>
        <div>
          <CreditCard size={16} />
          <input type="submit" value="CARTÃO DE CRÉDITO" />
        </div>
        <div>
          <Bank size={16} />
          <input type="submit" value="CARTÃO DE DÉBITO" />
        </div>
        <div>
          <Money size={16} />
          <input type="submit" value="DINHEIRO" />
        </div>
      </div>
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
