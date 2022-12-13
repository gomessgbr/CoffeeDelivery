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
            Com o Coffee Delivery você recebe seu café onde estiver, a {'\n'}
            qualquer hora
          </span>
        </HomeHeaderTitle>
        <HomeHeaderSubTitle>
          <ShoppingCart size={15} /> <span>Compra simples e segura</span>
          <Timer size={15} /> <span>Entrega rápida e rastreada</span>
          <Package size={15} /> <span>Embalagem mantém o café intacto</span>
          <Coffee size={15} /> <span>O café chega fresquinho até você</span>
        </HomeHeaderSubTitle>
      </HomeHeader>
      <div>
        <HomeHeaderImg src={coffeImg} alt="" />
      </div>
    </HomeContainer>
  )
}
