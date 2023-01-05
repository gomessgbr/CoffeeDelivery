import { CheckoutContainer, Content, Main, Title } from './styles'
import { useLocation } from 'react-router-dom'
import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'

import checkOutImg from '../../assets/checkOutImg.svg'

export function Checkout() {
  const { state } = useLocation()

  return (
    <CheckoutContainer>
      <Title>
        <header className="title">
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>
      </Title>
      <Content>
        <Main>
          <section className="clientInformation">
            <div className="icon">
              <MapPin size={16} weight="fill" color={'#FFFFFF'} />
            </div>
            <p style={{ marginTop: '1rem' }}>
              Entrega em{' '}
              <strong>
                {state.street}, {state.number} <br />
              </strong>
              {state.neighborhood} - {state.city}, {state.uf}
            </p>
          </section>
          <section className="clientInformation">
            <div className="icon timer">
              <Timer size={16} weight="fill" color={'#FFFFFF'} />
            </div>
            <p className="column">
              Previsão de entrega
              <strong>20 min - 30 min</strong>
            </p>
          </section>
          <section className="clientInformation">
            <div className="icon dollar">
              <CurrencyDollarSimple size={16} weight="fill" color={'#FFFFFF'} />
            </div>
            <p className="column">
              Pagamento na entrega
              <strong>{state.paymentMethod}</strong>
            </p>
          </section>
        </Main>

        <img src={checkOutImg} alt="Entrega de moto" />
      </Content>
    </CheckoutContainer>
  )
}
