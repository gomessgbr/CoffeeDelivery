import {
  CoffeeCardContainer,
  CoffeeCardDescription,
  CoffeCardFooter,
  CoffeeContent,
} from './styles'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeCardDescription>
        <img src="/CoffeesImg/tradicional.png" alt="" />
        <span>Tradicional</span>
        <span>Expresso tradicional</span>
        <span>O tradicional café feito com água quente e grãos moídos</span>
      </CoffeeCardDescription>
      <CoffeCardFooter></CoffeCardFooter>
    </CoffeeCardContainer>
  )
}
