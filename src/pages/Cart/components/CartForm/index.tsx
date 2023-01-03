import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useFormContext } from 'react-hook-form'
import { CartFormContainer } from './styles'
import { useState } from 'react'

export type PaymentsMethods =
  | 'Cartão de crédito'
  | 'Dinheiro'
  | 'Cartão de Débito'

export function CartForm() {
  const [paymentsMethods, setPaymentsMethods] =
    useState<PaymentsMethods>('Dinheiro')

  const { register, setValue } = useFormContext()
  const { colors } = useTheme()

  function handlePaymentsMethods(paymentmethodInputValue: PaymentsMethods) {
    setValue('paymentsMethods', paymentmethodInputValue)
    setPaymentsMethods(paymentmethodInputValue)
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

        <div>
          <input
            type="text"
            className="cep"
            placeholder="CEP"
            required
            {...register('cep')}
          />
          <input
            type="text"
            className="street"
            placeholder="Rua"
            required
            {...register('street')}
          />
          <input
            type="number"
            min="1"
            className="number"
            placeholder="Número"
            required
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
            required
            {...register('neighborhood')}
          />
          <input
            type="text"
            className="city"
            placeholder="cidade"
            required
            {...register('city')}
          />
          <input
            type="text"
            className="uf"
            placeholder="UF"
            required
            {...register('uf')}
          />
        </div>
      </div>
      <div>
        <div>
          <CurrencyDollar size={22} color={colors['purple-200']} />
          <h1>Pagamento</h1>
          <span>O pagamento é feito na entrega</span>
          <div>
            <CreditCard size={16} />
            <button
              type="button"
              value="CARTÃO DE CRÉDITO"
              onClick={() => handlePaymentsMethods('Cartão de crédito')}
            >
              Cartão de crédito
            </button>
          </div>
          <div>
            <Bank size={16} />
            <button
              type="button"
              value="CARTÃO DE DÉBITO"
              onClick={() => handlePaymentsMethods('Cartão de Débito')}
            >
              Cartão de débito
            </button>
          </div>
          <div>
            <Money size={16} />
            <button
              type="button"
              value="DINHEIRO"
              onClick={() => handlePaymentsMethods('Dinheiro')}
            >
              Dinheiro
            </button>
          </div>
        </div>
        <input
          type="hidden"
          value={paymentsMethods}
          {...register('paymentsMethods')}
        />
      </div>
    </CartFormContainer>
  )
}
