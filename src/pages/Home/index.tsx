import {
  HomeContainer,
  HomeHeaderImg,
  HomeHeaderSubTitle,
  HomeHeaderTitle,
  HomeHeader,
  HomeTitle,
} from './styles'

import coffeImg from '../../assets/navHome.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <HomeHeaderTitle>
          <HomeTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HomeTitle>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </HomeHeaderTitle>
        <HomeHeaderSubTitle>
          <ShoppingCart size={20} /> <span>Compra simples e segura</span>
          <Timer size={20} /> <span>Entrega rápida e rastreada</span>
          <Package size={20} /> <span>Embalagem mantém o café intacto</span>
          <Coffee size={20} /> <span>O café chega fresquinho até você</span>
        </HomeHeaderSubTitle>
      </HomeHeader>

      <HomeHeaderImg src={coffeImg} alt="" />
    </HomeContainer>
  )
}
