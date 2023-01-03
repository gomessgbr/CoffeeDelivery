import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import {
  CartContainer,
  InputContainer,
  ConfirmOrderContainer,
  FormArea,
  CartTitleArea,
  PaymentMethodArea,
} from './styles'

const confirmOrderSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(7, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número do endereço'),
  complement: zod.string(),
  neighborhood: zod.string().min(5, 'Informe o endereço'),
  city: zod.string().min(4, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe o estado'),
})

type inputDataTypes = zod.infer<typeof confirmOrderSchema>

export function Cart() {
  const { handleSubmit, reset, formState, register } = useForm<inputDataTypes>({
    resolver: zodResolver(confirmOrderSchema),
  })

  const navigate = useNavigate()

  function handleConfirmOrder(data: inputDataTypes) {
    navigate('/checkout', {
      state: data,
    })

    reset()
  }

  return (
    <CartContainer>
      <InputContainer>
        <CartTitleArea>Complete seu Pedido</CartTitleArea>
        <FormArea>
          <form onSubmit={handleSubmit(handleConfirmOrder)}>
            <input
              type="text"
              className="cep"
              placeholder="CEP"
              {...register('cep')}
            />
            <input
              type="text"
              className="street"
              placeholder="Rua"
              {...register('street')}
            />
            <input
              type="number"
              min="1"
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
            <button type="submit">VAI FUNCIONAR MENÓ</button>
          </form>
        </FormArea>

        <PaymentMethodArea></PaymentMethodArea>
      </InputContainer>
      <ConfirmOrderContainer>
        <CartTitleArea>Cafés Selecionados</CartTitleArea>
      </ConfirmOrderContainer>
    </CartContainer>
  )
}
