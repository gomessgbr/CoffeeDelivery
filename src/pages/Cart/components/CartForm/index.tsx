import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import {
  CartFormContainer,
  CartFormTitle,
  FormAreaContainer,
  FormAreaTitle,
} from './styles'

export function CartForm() {
  const { colors } = useTheme()
  return (
    <CartFormContainer>
      <CartFormTitle>Complete seu pedido</CartFormTitle>
      <FormAreaContainer>
        <FormAreaTitle>
          <MapPinLine size={24} color={colors['purple-200']} />
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </FormAreaTitle>
      </FormAreaContainer>
    </CartFormContainer>
  )
}
