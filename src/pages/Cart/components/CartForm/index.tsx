import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import {
  CartFormContainer,
  CartFormTitle,
  FormAreaContainer,
  FormAreaTitle,
} from './styles'

export function CartForm() {
  const { register, handleSubmit } = useForm()
  const { colors } = useTheme()

  function confirmCart(data: any) {
    console.log('data', data)
  }
  return (
    <CartFormContainer>
      <CartFormTitle>Complete seu pedido</CartFormTitle>
      <FormAreaContainer>
        <FormAreaTitle>
          <MapPinLine size={24} color={colors['purple-200']} />
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
          <form onSubmit={handleSubmit(confirmCart)}>
            <input type="text" placeholder="CEP" {...register('CEP')} />
            <input type="text" placeholder="Rua" {...register('street')} />
            <input type="text" placeholder="Número" {...register('number')} />
            <input
              type="text"
              placeholder="Complemento"
              {...register('complemento')}
            />
            <input
              type="text"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input type="text" placeholder="cidade" {...register('city')} />
            <input type="text" placeholder="UF" {...register('UF')} />
            <input type="submit" value="enviar" />
          </form>
        </FormAreaTitle>
      </FormAreaContainer>
    </CartFormContainer>
  )
}