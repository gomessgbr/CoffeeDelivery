import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useCart } from '../../hooks/useCart'

import { useNavigate } from 'react-router-dom'

import {
  FormArea,
  CartContainer,
  CartTitles,
  HeaderWrapper,
  CartTitleArea,
  PaymentContainer,
  ButtonsContainer,
  Button,
  AddressArea,
  DefaultInput,
} from './styles'

import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { ConfirmCart } from './components/ConfirmCart'

const confirmOrderSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(7, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número do endereço'),
  complement: zod.string(),
  neighborhood: zod.string().min(5, 'Informe o endereço'),
  city: zod.string().min(4, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe o estado'),
})

export type PaymentMethods =
  | 'Cartão de crédito'
  | 'Cartão de débito'
  | 'Dinheiro'

type inputDataTypes = zod.infer<typeof confirmOrderSchema>

export function Cart() {
  const { cleanCart } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethods>('Dinheiro')
  const { handleSubmit, reset, register } = useForm<inputDataTypes>({
    resolver: zodResolver(confirmOrderSchema),
  })

  const navigate = useNavigate()

  function handleConfirmOrder(data: inputDataTypes) {
    navigate('/checkout', {
      state: { ...data, paymentMethod },
    })
    cleanCart()
    reset()
  }

  function handlePaymentMethodChange(paymentMethod: PaymentMethods) {
    setPaymentMethod(paymentMethod)
  }

  return (
    <CartContainer>
      <CartTitleArea>
        <CartTitles>Complete seu pedido</CartTitles>
        <CartTitles>Cafés selecionados</CartTitles>
      </CartTitleArea>
      <FormArea onSubmit={handleSubmit(handleConfirmOrder)}>
        <section>
          <AddressArea>
            <HeaderWrapper>
              <MapPinLine size={22} color="#C47f17" />
              <div>
                <h3 className="subtitle">Endereço de Entrega</h3>
                <p className="description">
                  Informe o endereço onde deseja receber seu pedido
                </p>
              </div>
            </HeaderWrapper>
            <DefaultInput
              style={{ width: '12.5rem' }}
              placeholder="CEP"
              required
              {...register('cep')}
            />
            <DefaultInput
              style={{ width: '35rem' }}
              placeholder="Rua"
              required
              {...register('street')}
            />
            <DefaultInput
              style={{ width: '12.5rem' }}
              placeholder="Número"
              required
              {...register('number')}
            />
            <DefaultInput
              style={{ width: '21.75rem' }}
              {...register('complement')}
              placeholder="Complemento / Opcional"
            />
            <DefaultInput
              style={{ width: '12.5rem' }}
              placeholder="Bairro"
              required
              {...register('neighborhood')}
            />
            <DefaultInput
              style={{ width: '17.25rem' }}
              placeholder="Cidade"
              required
              {...register('city')}
            />
            <DefaultInput
              style={{ width: '3.75rem' }}
              placeholder="UF"
              required
              {...register('uf')}
            />
          </AddressArea>

          <PaymentContainer>
            <section className="header">
              <CurrencyDollarSimple color="#8047F8" size={22} />
              <div>
                <h2 className="subtitle">Pagamento</h2>
                <p className="description">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </section>
            <ButtonsContainer>
              <Button
                type="button"
                isSelected={paymentMethod === 'Cartão de crédito'}
                onClick={() => handlePaymentMethodChange('Cartão de crédito')}
              >
                <CreditCard className="iconButton" size={18} color="#8047F8" />
                CARTÃO DE CRÉDITO
              </Button>

              <Button
                type="button"
                isSelected={paymentMethod === 'Cartão de débito'}
                onClick={() => handlePaymentMethodChange('Cartão de débito')}
              >
                <Bank className="iconButton" size={18} color="#8047F8" />
                CARTÃO DE DÉBITO
              </Button>

              <Button
                type="button"
                isSelected={paymentMethod === 'Dinheiro'}
                onClick={() => handlePaymentMethodChange('Dinheiro')}
              >
                <div className="money">
                  <Money className="iconButton" size={18} color="#8047F8" />
                  DINHEIRO
                </div>
              </Button>
              <input value={paymentMethod} type="hidden" />
            </ButtonsContainer>
          </PaymentContainer>
        </section>
        <ConfirmCart />
      </FormArea>
    </CartContainer>
  )
}
