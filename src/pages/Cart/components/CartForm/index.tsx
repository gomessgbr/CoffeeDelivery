import { MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import {
  CartFormContainer,
  CartFormTitle,
  FormAreaContainer,
  FormAreaTitle,
  FormArea,
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
          <MapPinLine size={22} color={colors['purple-200']} />
          <span>Endereço de Entrega</span>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </FormAreaTitle>
        <form onSubmit={handleSubmit(confirmCart)}>
          <FormArea>
            <input
              type="text"
              className="cep"
              placeholder="CEP"
              {...register('CEP')}
            />
            <input
              type="text"
              className="street"
              placeholder="Rua"
              {...register('street')}
            />
            <input
              type="text"
              className="number"
              placeholder="Número"
              {...register('number')}
            />
            <input
              type="text"
              className="complement"
              placeholder="Complemento"
              {...register('complement')}
            />
            <input
              type="text"
              className="neighborhood"
              placeholder="Bairro"
              {...register('neighborhood')}
            />
            <input
              type="text"
              className="city"
              placeholder="cidade"
              {...register('city')}
            />
            <input
              type="text"
              className="uf"
              placeholder="UF"
              {...register('uf')}
            />
            <input type="submit" value="enviar" />
          </FormArea>
        </form>
      </FormAreaContainer>
    </CartFormContainer>
  )
}
