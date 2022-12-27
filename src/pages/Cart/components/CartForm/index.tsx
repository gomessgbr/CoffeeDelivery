import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useForm } from 'react-hook-form'
import { CartFormContainer } from './styles'

export function CartForm() {
  const { register, handleSubmit } = useForm()
  const { colors } = useTheme()

  function confirmCart(data: any) {
    console.log('data', data)
  }
  return (
    <CartFormContainer>
      <h1
        style={{
          fontFamily: 'Baloo 2',
          fontWeight: '700',
          fontSize: '1.125rem',
          lineHeight: '130%',
        }}
      >
        Complete seu pedido
      </h1>
      <div>
        <div>
          <div>
            <MapPinLine size={22} color={colors['purple-200']} />
            <span>Endereço de Entrega</span>
          </div>

          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
        <form onSubmit={handleSubmit(confirmCart)}>
          <div>
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
          </div>
        </form>
      </div>
      <div>
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
      </div>
    </CartFormContainer>
  )
}
