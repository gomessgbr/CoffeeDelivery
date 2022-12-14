import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffeeImg from '../../../../assets/navHome.svg'
import {
  HeaderHomeContainer,
  HeaderHomeContent,
  HomeHeaderContainer,
  HomeHeaderImg,
  HomeHeaderSubTitle,
  HomeTitle,
} from './styles'   
export function HeaderHome() {
  return (
    <HeaderHomeContainer>
      <HeaderHomeContent>
        <HomeHeaderSubTitle>
          <HomeTitle>
            Encontre o café perfeito para qualquer hora do dia
          </HomeTitle>
          <span>
            Com o Coffee Delivery você recebe seu café onde estiver, a {'\n'}
            qualquer hora
          </span>
        </HomeHeaderSubTitle>
        <HomeHeaderSubTitle>
          <span>
            <ShoppingCart className="shopIcon" size={20} />
            Compra simples e segura
          </span>

          <span>
            <Timer className="timerIcon" size={20} />
            Entrega rápida e rastreada
          </span>

          <span>
            <Package className="packageIcon" size={20} />
            Embalagem mantém o café intacto
          </span>

          <span>
            <Coffee className="coffeeIcon" size={20} />O café chega fresquinho
            até você
          </span>
        </HomeHeaderSubTitle>
      </HeaderHomeContent>

      <HomeHeaderContainer>
        <HomeHeaderImg src={coffeeImg} alt="" />
      </HomeHeaderContainer>
    </HeaderHomeContainer>
  )
}
