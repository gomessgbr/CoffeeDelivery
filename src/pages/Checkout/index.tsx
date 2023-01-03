import { CheckoutContainer } from './styles'
import { useNavigate, useLocation } from 'react-router-dom'

export function Checkout() {
  const location = useLocation()
  console.log('Vamo ver o que eu tenho nesta merda! kkkkkjj', location)
  return (
    <CheckoutContainer>
      <div>Checkout</div>
    </CheckoutContainer>
  )
}
