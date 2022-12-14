import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeImg from '../../../../assets/navHome.svg'
import {
  HeaderHomeContainer,
  HeaderHomeContent,
  HomeHeaderContainer,
  HomeHeaderImg,
  HomeHeaderSubTitle,
  HomeTitle,
  HomeHeaderTitle,
} from './styles'
export function HeaderHome() {
  return (
    <HeaderHomeContainer>
      <HeaderHomeContent>
        <HomeHeaderTitle>
          <HomeTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HomeTitle>
          <section>
            Com o Coffee Delivery você recebe seu café onde estiver, a {'\n'}
            qualquer hora
          </section>
        </HomeHeaderTitle>
        <HomeHeaderSubTitle>
          <span>
            <ShoppingCart className="shopIcon" size={20} weight="fill" />
            Compra simples e segura
          </span>

          <span>
            <Timer className="timerIcon" size={20} weight="fill" />
            Entrega rápida e rastreada
          </span>

          <span>
            <Package className="packageIcon" size={20} weight="fill" />
            Embalagem mantém o café intacto
          </span>

          <span>
            <Coffee className="coffeeIcon" size={20} weight="fill" />O café
            chega fresquinho até você
          </span>
        </HomeHeaderSubTitle>
      </HeaderHomeContent>

      <HomeHeaderContainer>
        <HomeHeaderImg src={coffeeImg} alt="" />
      </HomeHeaderContainer>
    </HeaderHomeContainer>
  )
}
