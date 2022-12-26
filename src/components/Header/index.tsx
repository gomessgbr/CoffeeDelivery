import {
  HeaderContainer,
  LocaleContainer,
  HeaderNav,
  CountOfItensonCart,
} from './styles'
import coffeDeliveryLogo from '../../assets/CoffeeDeliveryLogo.svg'
import { NavLink } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { useCart } from '../../hooks/useCart'

export function Header() {
  const { cartItems } = useCart()
  const cartCountToShowOnScreen = cartItems.length

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={coffeDeliveryLogo} alt="" />
      </NavLink>
      <HeaderNav>
        <LocaleContainer>
          <MapPin size={20} color="#8047F8" weight="fill" />
          São Paulo, SP
        </LocaleContainer>
        <NavLink to="Cart" title="carrinho">
          <ShoppingCart size={24} color="#C47F17" weight="fill" />
          <CountOfItensonCart>{cartCountToShowOnScreen}</CountOfItensonCart>
        </NavLink>
      </HeaderNav>
    </HeaderContainer>
  )
}
