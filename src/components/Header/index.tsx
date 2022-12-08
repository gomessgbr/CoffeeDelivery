import { HeaderContainer } from './styles'
import coffeDeliveryLogo from '../../assets/CoffeeDeliveryLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="" />
      
    </HeaderContainer>
  )
}
