import { CartForm } from './components/CartForm'
import { ConfirmCart } from './components/ConfirmCart'

import * as zod from 'zod'

import { CartContainer } from './styles'

const confirmOrderSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(7, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número do endereço'),
  complement: zod.string(),
  neighborhood: zod.string().min(5, 'Informe o endereço'),
  city: zod.string().min(4, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe o estado'),
})

export function Cart() {
  return (
    <CartContainer>
      <CartForm />
      <form action="" onSubmit={}></form>
      <ConfirmCart />
    </CartContainer>
  )
}
