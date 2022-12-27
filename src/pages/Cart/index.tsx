import { CartForm } from './components/CartForm'
import { ConfirmCart } from './components/ConfirmCart'
import * as zod from 'zod'

import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import { CartContainer } from './styles'
import { useForm, FormProvider } from 'react-hook-form'
import { useCart } from '../../hooks/useCart'

const confirmOrderSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(7, 'Informe a rua'),
  number: zod.number().min(1, 'Informe o número do endereço'),
  complement: zod.string(),
  neighborhood: zod.string().min(5, 'Informe o endereço'),
  city: zod.string().min(4, 'Informe a cidade'),
  uf: zod.string().min(2, 'Informe o estado'),
})

export type ValidateData = zod.infer<typeof confirmOrderSchema>

type ConfirmValidateData = ValidateData

export function Cart() {
  const confirmForm = useForm<ConfirmValidateData>({
    resolver: zodResolver(confirmOrderSchema),
  })

  const { handleSubmit } = confirmForm
  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleSubmitForm() {
    navigate('/checkout')

    cleanCart()
  }

  return (
    <FormProvider {...confirmForm}>
      <CartContainer>
        <CartForm />
        <form action="" onSubmit={handleSubmit(handleSubmitForm)}></form>
        <ConfirmCart />
      </CartContainer>
    </FormProvider>
  )
}
