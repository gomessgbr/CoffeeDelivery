import { HeaderContainer, LocaleContainer, HeaderNav } from './styles'
import coffeDeliveryLogo from '../../assets/CoffeeDeliveryLogo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeDeliveryLogo} alt="" />
      <HeaderNav>
        <LocaleContainer>
          <MapPin size={20} color="#8047F8" weight="fill" />
          São Paulo, SP
        </LocaleContainer>
        <NavLink to="Checkout" title="carrinho">
          <ShoppingCart size={24} />
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
