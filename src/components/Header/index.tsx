import { HeaderContainer, LocaleContainer } from './styles'
import coffeDeliveryLogo from '../../assets/CoffeeDeliveryLogo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="" />
      <nav>
        <LocaleContainer>
          <MapPin size={20} />
          São Paulo,SP
        </LocaleContainer>
        <NavLink to="Checkout" title="carrinho">
          <ShoppingCart size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
